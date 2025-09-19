import React, { useState, useEffect, createContext, useContext } from "react";
import { toast } from "@/hooks/use-toast";

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  role: string;
  subscription: 'free' | 'pro' | 'enterprise';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

// Mock Firebase Auth (replace with actual Firebase implementation)
class MockFirebaseAuth {
  private currentUser: User | null = null;
  private listeners: ((user: User | null) => void)[] = [];

  // Simulate authentication state
  onAuthStateChanged(callback: (user: User | null) => void) {
    this.listeners.push(callback);
    // Simulate initial auth check
    setTimeout(() => {
      callback(this.currentUser);
    }, 1000);

    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful login
    this.currentUser = {
      id: '1',
      email,
      name: 'John Doe',
      company: 'Legal Corp',
      role: 'Senior Associate',
      subscription: 'pro',
    };
    
    this.notifyListeners();
    return { user: this.currentUser };
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    this.currentUser = {
      id: '1',
      email,
      name: 'New User',
      role: 'User',
      subscription: 'free',
    };
    
    this.notifyListeners();
    return { user: this.currentUser };
  }

  async signInWithPopup() {
    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    this.currentUser = {
      id: '1',
      email: 'user@gmail.com',
      name: 'Google User',
      role: 'User',
      subscription: 'free',
    };
    
    this.notifyListeners();
    return { user: this.currentUser };
  }

  async signOut() {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.currentUser = null;
    this.notifyListeners();
  }

  async sendPasswordResetEmail(email: string) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock email sent
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentUser));
  }
}

// Create auth instance
const auth = new MockFirebaseAuth();

// Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Custom hook for authentication logic
export function useFirebaseAuth(): AuthContextType {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      toast({
        title: "Welcome back!",
        description: "You have been successfully signed in.",
      });
    } catch (error: any) {
      toast({
        title: "Sign In Failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      await auth.createUserWithEmailAndPassword(email, password);
      toast({
        title: "Account Created",
        description: "Welcome to LegalAI! Your account has been created successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Sign Up Failed",
        description: error.message || "Please try again with different credentials.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await auth.signInWithPopup();
      toast({
        title: "Welcome!",
        description: "You have been successfully signed in with Google.",
      });
    } catch (error: any) {
      toast({
        title: "Google Sign In Failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
    } catch (error: any) {
      toast({
        title: "Sign Out Failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await auth.sendPasswordResetEmail(email);
      toast({
        title: "Reset Email Sent",
        description: "Please check your email for password reset instructions.",
      });
    } catch (error: any) {
      toast({
        title: "Reset Failed",
        description: error.message || "Please try again with a valid email.",
        variant: "destructive",
      });
      throw error;
    }
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
    resetPassword,
  };
}

// Auth Provider Component  
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useFirebaseAuth();
  return React.createElement(AuthContext.Provider, { value: auth }, children);
}