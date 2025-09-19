import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

// Types
export interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: string;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  analysisComplete: boolean;
  progress?: number;
}

export interface DocumentAnalysis {
  summary: string;
  keyPoints: string[];
  riskAnalysis: RiskItem[];
  translation: string;
}

export interface RiskItem {
  level: 'Low' | 'Medium' | 'High';
  category: string;
  description: string;
  recommendation: string;
}

// API Base URL (would come from environment in production)
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

// API Functions
const apiClient = {
  // Fetch all documents
  async getDocuments(): Promise<Document[]> {
    const response = await fetch(`${API_BASE_URL}/documents`);
    if (!response.ok) throw new Error('Failed to fetch documents');
    return response.json();
  },

  // Upload document
  async uploadDocument(file: File): Promise<Document> {
    const formData = new FormData();
    formData.append('document', file);
    
    const response = await fetch(`${API_BASE_URL}/documents/upload`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) throw new Error('Failed to upload document');
    return response.json();
  },

  // Get document analysis
  async getDocumentAnalysis(documentId: string): Promise<DocumentAnalysis> {
    const response = await fetch(`${API_BASE_URL}/documents/${documentId}/analyze`);
    if (!response.ok) throw new Error('Failed to get analysis');
    return response.json();
  },

  // Trigger document analysis
  async analyzeDocument(documentId: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/documents/${documentId}/analyze`, {
      method: 'POST',
    });
    
    if (!response.ok) throw new Error('Failed to start analysis');
  },

  // Delete document
  async deleteDocument(documentId: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/documents/${documentId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) throw new Error('Failed to delete document');
  },

  // Download document
  async downloadDocument(documentId: string): Promise<Blob> {
    const response = await fetch(`${API_BASE_URL}/documents/${documentId}/download`);
    if (!response.ok) throw new Error('Failed to download document');
    return response.blob();
  },
};

// React Query Hooks

export function useDocuments() {
  return useQuery({
    queryKey: ['documents'],
    queryFn: apiClient.getDocuments,
    staleTime: 30 * 1000, // 30 seconds
  });
}

export function useDocumentAnalysis(documentId: string) {
  return useQuery({
    queryKey: ['document-analysis', documentId],
    queryFn: () => apiClient.getDocumentAnalysis(documentId),
    enabled: !!documentId,
  });
}

export function useUploadDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.uploadDocument,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({
        title: "Upload Successful",
        description: `${data.name} has been uploaded successfully.`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Upload Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useAnalyzeDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.analyzeDocument,
    onSuccess: (_, documentId) => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      queryClient.invalidateQueries({ queryKey: ['document-analysis', documentId] });
      toast({
        title: "Analysis Started",
        description: "Document analysis has begun. You'll be notified when complete.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Analysis Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useDeleteDocument() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.deleteDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({
        title: "Document Deleted",
        description: "The document has been successfully deleted.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Delete Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useDownloadDocument() {
  return useMutation({
    mutationFn: apiClient.downloadDocument,
    onSuccess: (blob, documentId) => {
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `document-${documentId}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Download Started",
        description: "Your document download has begun.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Download Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}