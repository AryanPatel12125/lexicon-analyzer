import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  Brain, 
  AlertTriangle, 
  Languages,
  Download,
  Trash2,
  Eye,
  Plus,
  Search,
  Filter,
  Calendar,
  MoreVertical
} from "lucide-react";

const Dashboard = () => {
  const [documents] = useState([
    {
      id: 1,
      name: "Employment_Contract_2024.pdf",
      uploadDate: "2024-01-15",
      status: "completed",
      size: "2.4 MB",
      type: "Employment Contract",
      analysisComplete: true
    },
    {
      id: 2,
      name: "NDA_TechCorp.docx",
      uploadDate: "2024-01-14",
      status: "processing",
      size: "1.8 MB",
      type: "Non-Disclosure Agreement",
      analysisComplete: false,
      progress: 75
    },
    {
      id: 3,
      name: "Lease_Agreement_Downtown.pdf",
      uploadDate: "2024-01-13",
      status: "completed",
      size: "3.1 MB",
      type: "Lease Agreement",
      analysisComplete: true
    }
  ]);

  const [selectedDocument, setSelectedDocument] = useState(documents[0]);

  const analysisResults = {
    summary: "This employment contract establishes the terms of employment between TechCorp Inc. and the employee. Key provisions include a competitive salary package, comprehensive benefits, standard working hours, and intellectual property agreements. The contract includes a 6-month probationary period and outlines performance evaluation processes.",
    keyPoints: [
      "Employment start date: March 1, 2024",
      "Annual salary: $120,000 with performance bonuses",
      "40-hour work week with flexible arrangements",
      "Comprehensive health and dental coverage",
      "6-month probationary period with quarterly reviews",
      "Intellectual property clause - all work belongs to company",
      "30-day notice period for termination"
    ],
    riskAnalysis: [
      {
        level: "Medium",
        category: "Intellectual Property",
        description: "Broad IP assignment clause may impact employee's personal projects",
        recommendation: "Consider adding exclusions for personal work"
      },
      {
        level: "Low",
        category: "Termination",
        description: "Standard 30-day notice period is reasonable",
        recommendation: "No action required"
      },
      {
        level: "High",
        category: "Non-Compete",
        description: "Non-compete clause is overly broad for this jurisdiction",
        recommendation: "Narrow the geographic and time restrictions"
      }
    ],
    translation: "Available in: Spanish, French, German, Portuguese, Italian"
  };

  const stats = [
    { label: "Documents Processed", value: "156", change: "+12 this month" },
    { label: "Time Saved", value: "240 hrs", change: "+18 hrs this week" },
    { label: "Risk Issues Found", value: "23", change: "3 high priority" },
    { label: "Languages Used", value: "8", change: "2 new this month" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="legal-container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Document Analysis Dashboard</h1>
            <p className="text-muted-foreground">
              Manage and analyze your legal documents with AI-powered insights
            </p>
          </div>
          <Button size="lg" className="mt-4 md:mt-0">
            <Plus className="h-5 w-5 mr-2" />
            Upload Document
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Document List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Documents
                  <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </CardTitle>
                <CardDescription>
                  Click on a document to view analysis results
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDocument(doc)}
                      className={`p-4 border-b last:border-b-0 cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedDocument?.id === doc.id ? 'bg-primary/5 border-primary/20' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <FileText className="h-4 w-4 text-primary" />
                            <span className="font-medium text-sm truncate">{doc.name}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">
                            {doc.type} • {doc.size}
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge 
                              variant={doc.status === 'completed' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {doc.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {doc.uploadDate}
                            </span>
                          </div>
                          {doc.status === 'processing' && (
                            <Progress value={doc.progress} className="mt-2 h-1" />
                          )}
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upload Area */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Upload New Document</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag & drop or click to select files
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOCX, TXT up to 10MB
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Results */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>{selectedDocument?.name}</span>
                    </CardTitle>
                    <CardDescription>
                      Analysis results for {selectedDocument?.type}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="summary" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="summary" className="flex items-center space-x-2">
                      <Brain className="h-4 w-4" />
                      <span className="hidden sm:inline">Summary</span>
                    </TabsTrigger>
                    <TabsTrigger value="keypoints" className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span className="hidden sm:inline">Key Points</span>
                    </TabsTrigger>
                    <TabsTrigger value="risks" className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="hidden sm:inline">Risks</span>
                    </TabsTrigger>
                    <TabsTrigger value="translation" className="flex items-center space-x-2">
                      <Languages className="h-4 w-4" />
                      <span className="hidden sm:inline">Translation</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="space-y-4">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Brain className="h-5 w-5 mr-2 text-blue-600" />
                        AI-Generated Summary
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {analysisResults.summary}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="keypoints" className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-green-600" />
                        Key Points Extracted
                      </h3>
                      {analysisResults.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                          <div className="bg-green-100 text-green-600 rounded-full p-1 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-current"></div>
                          </div>
                          <span className="text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="risks" className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                        Risk Analysis Results
                      </h3>
                      {analysisResults.riskAnalysis.map((risk, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Badge 
                                variant={risk.level === 'High' ? 'destructive' : 
                                        risk.level === 'Medium' ? 'default' : 'secondary'}
                              >
                                {risk.level} Risk
                              </Badge>
                              <span className="font-medium">{risk.category}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{risk.description}</p>
                          <p className="text-sm font-medium text-primary">
                            💡 Recommendation: {risk.recommendation}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="translation" className="space-y-4">
                    <div className="bg-muted/30 p-6 rounded-lg text-center">
                      <Languages className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Translation Options</h3>
                      <p className="text-muted-foreground mb-4">
                        {analysisResults.translation}
                      </p>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Request Translation
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;