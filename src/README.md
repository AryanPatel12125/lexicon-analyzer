# LegalAI - AI-Powered Legal Document Analysis Platform

A modern, production-ready React application for AI-powered legal document analysis built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

### Core AI Analysis Types
- **Document Summarization**: Intelligent extraction of key information into concise summaries
- **Key Points Extraction**: Automatic identification of critical clauses and important details
- **Risk Analysis**: Comprehensive assessment of legal risks and compliance issues
- **Multi-Language Translation**: Professional translation maintaining legal context (50+ languages)

### Platform Features
- **Modern Dashboard**: Intuitive document management interface
- **File Upload**: Support for PDF, DOCX, TXT files up to 10MB
- **Real-time Processing**: Live progress tracking and notifications
- **Secure Architecture**: Enterprise-grade security and compliance
- **Responsive Design**: Mobile-first, fully responsive interface
- **Dark/Light Mode**: Automatic theme switching
- **Multi-language UI**: Support for 6 languages (EN, ES, FR, DE, PT, IT)

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth (Google + Email/Password)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Sonner + Custom Toast system

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout components
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   └── ui/             # shadcn/ui components
├── hooks/
│   ├── use-auth.ts     # Authentication hook
│   ├── use-documents.ts # Document management hooks
│   └── use-toast.ts    # Toast notifications
├── pages/
│   ├── Home.tsx        # Landing page
│   ├── Features.tsx    # Features showcase
│   ├── HowItWorks.tsx  # Process explanation
│   ├── Dashboard.tsx   # Main dashboard
│   ├── About.tsx       # Company information
│   └── Contact.tsx     # Contact page
├── assets/             # Images and static assets
├── lib/                # Utility functions
└── index.css          # Global styles and design system
```

## 🎨 Design System

The application uses a comprehensive design system built with CSS custom properties and Tailwind CSS:

- **Colors**: Professional navy/blue theme with semantic color tokens
- **Typography**: Inter font family with consistent sizing scale
- **Spacing**: Tailwind's spacing system
- **Components**: Custom variants for shadcn/ui components
- **Gradients**: Pre-defined gradients for consistent visual hierarchy
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Fluid typography and spacing
- Touch-friendly interface elements
- Optimized for all screen sizes

## 🔐 Security Features

- Secure file upload handling
- Client-side file validation
- HTTPS-only in production
- XSS protection
- CSRF protection via proper authentication flows

## 🌐 API Integration

The application is designed to integrate with Django REST API endpoints:

- `GET /api/documents` - Fetch user documents
- `POST /api/documents/upload` - Upload new document
- `GET /api/documents/{id}/analyze` - Get analysis results
- `POST /api/documents/{id}/analyze` - Trigger analysis
- `DELETE /api/documents/{id}` - Delete document
- `GET /api/documents/{id}/download` - Download document

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-git-url]
   cd legal-ai-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
VITE_API_URL=http://localhost:8000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
```

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication with Google and Email/Password providers
3. Add your domain to authorized domains
4. Update the configuration in `src/hooks/use-auth.ts`

## 📋 Features Roadmap

- [ ] Real-time collaboration
- [ ] Advanced search and filtering
- [ ] Bulk document processing
- [ ] Custom AI model training
- [ ] Integration with legal databases
- [ ] Advanced reporting and analytics
- [ ] Team management and permissions
- [ ] API rate limiting and quotas
- [ ] Webhook notifications
- [ ] Mobile app development

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📈 Performance

- Lighthouse score: 95+ for Performance, Accessibility, Best Practices, SEO
- Core Web Vitals optimized
- Lazy loading for images and routes
- Code splitting for optimal bundle size
- Service worker for caching (production)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🆘 Support

For support, email support@legalai.com or join our Discord community.

---

Built with ❤️ by the LegalAI team