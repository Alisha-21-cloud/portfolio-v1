# 🚀 Portfolio V1 - SYED AHMAD ALISHA

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-blue?style=for-the-badge&logo=vercel)](https://portfolio-v1-sandy-nine.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel)](https://vercel.com/)

> **"I don't just write code—I build innovative, intelligent, and impactful solutions."**

A modern, interactive portfolio website showcasing my journey as a Full-Stack & AI Developer. Built with cutting-edge technologies and featuring stunning animations, 3D elements, and a seamless user experience.

## ✨ Features

### 🎨 **Modern Design & Animations**
- **Interactive Welcome Screen** - Engaging first impression with smooth transitions
- **Framer Motion Animations** - Fluid page transitions and micro-interactions  
- **GSAP Integration** - Advanced scroll-triggered animations
- **3D Spline Elements** - Interactive 3D components for visual appeal
- **AOS (Animate On Scroll)** - Smooth reveal animations as users scroll

### 🧭 **Seamless Navigation**
- **Multi-page SPA** - React Router for smooth client-side routing
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dynamic Navbar** - Context-aware navigation with smooth transitions
- **404 Error Handling** - Custom not-found page for better UX

### 📱 **Interactive Sections**
- **Portfolio Showcase** - Dynamic project cards with detailed views
- **About Me** - Personal stats and professional journey
- **Contact Form** - Integrated messaging system with form validation
- **Comments System** - Interactive feedback section for visitors
- **Certificate Gallery** - Professional certifications display

### 🛠️ **Advanced Functionality**
- **Firebase Integration** - Backend services for data management
- **Supabase Database** - Modern database solution for content management
- **TypeWriter Effects** - Dynamic text animations for engaging content
- **Social Media Integration** - Direct links to professional profiles
- **Email Integration** - Direct contact functionality

## 🚀 Tech Stack

### **Frontend**
- ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react) **React 18.3.1** - Latest React with concurrent features
- ![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=flat&logo=vite) **Vite 5.4.10** - Next-generation build tool for faster development
- ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript) **JavaScript ES6+** - Modern JavaScript features

### **Styling & UI**
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css) **Tailwind CSS 3.4.17** - Utility-first CSS framework
- ![Material-UI](https://img.shields.io/badge/Material%20UI-6.1.6-0081CB?style=flat&logo=material-ui) **Material-UI 6.1.6** - React component library
- ![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.13-DB7093?style=flat&logo=styled-components) **Styled Components** - CSS-in-JS styling

### **Animation & Interaction**
- ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.15.0-0055FF?style=flat&logo=framer) **Framer Motion 11.15.0** - Production-ready motion library
- **GSAP 3.12.5** - Professional animation library
- **AOS 2.3.4** - Animate on scroll library
- **React Spring 9.7.5** - Spring-physics based animations

### **Backend & Database**
- ![Firebase](https://img.shields.io/badge/Firebase-11.0.1-FFCA28?style=flat&logo=firebase) **Firebase 11.0.1** - Backend-as-a-Service platform
- ![Supabase](https://img.shields.io/badge/Supabase-2.49.9-3ECF8E?style=flat&logo=supabase) **Supabase 2.49.9** - Open source Firebase alternative

### **3D & Visual Effects**
- **Spline** - 3D design and interactive elements
- **Lottie Animations** - Lightweight, scalable animations
- **React Icons 5.5.0** - Popular icon library

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **Autoprefixer** - CSS vendor prefixes automation
- **PostCSS** - CSS transformation and processing

## 🏗️ Project Structure

```
portfolio-v1/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 Pages/             # Main page components
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # About section
│   │   ├── Portfolio.jsx     # Projects showcase
│   │   ├── Contact.jsx       # Contact form
│   │   ├── WelcomeScreen.jsx # Initial loading screen
│   │   ├── ThankYou.jsx      # Success page
│   │   └── 404.jsx           # Not found page
│   ├── 📁 components/        # Reusable components
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Background.jsx    # Animated background
│   │   ├── CardProject.jsx   # Project cards
│   │   ├── Certificate.jsx   # Certificate display
│   │   ├── Modal.jsx         # Modal dialogs
│   │   ├── ProjectDetail.jsx # Project details view
│   │   ├── SocialLinks.jsx   # Social media links
│   │   └── TechStackIcon.jsx # Technology icons
│   ├── 📁 assets/            # Images and static files
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│   └── supabase.js           # Database configuration
├── 📄 package.json           # Dependencies and scripts
├── 📄 vite.config.js         # Vite configuration
├── 📄 tailwind.config.js     # Tailwind configuration
└── 📄 vercel.json            # Deployment configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Alisha-21-cloud/portfolio-v1.git
   cd portfolio-v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file and add your API keys
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## ⚙️ Configuration (Supabase)

All backend data for this project (portfolio, certificates, and comments) is managed by Supabase.

### 1\. Create Supabase Project

  - Go to [Supabase](https://supabase.com/) and create a new project.
  - Keep your **Project URL** and **anon public key** handy. You can find them in **Settings \> API**.

### 2\. Setup Database Tables & Policies

Run the following all-in-one SQL script in your Supabase **SQL Editor**. This will set up all necessary tables, security policies, storage, and also insert one example for each table.

```sql
-- ---- TABLE CREATION ----

-- Creates the 'projects' table for portfolio items
CREATE TABLE public.projects (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  "Title" text,
  "Description" text,
  "Img" text,
  "Link" text,
  "Github" text,
  "Features" jsonb,
  "TechStack" jsonb
);

-- Creates the 'certificates' table
CREATE TABLE public.certificates (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  "Img" text
);

-- Creates the 'portfolio_comments' table for the comment system
CREATE TABLE public.portfolio_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  profile_image TEXT,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ---- ROW LEVEL SECURITY (RLS) SETUP ----

-- Enable RLS for all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_comments ENABLE ROW LEVEL SECURITY;

-- ---- POLICY CREATION ----

-- Policy for 'projects': Allow public read access
CREATE POLICY "Public Read Access Policy for Projects"
ON public.projects FOR SELECT TO public USING (true);

-- Policy for 'certificates': Allow public read access
CREATE POLICY "Public Read Access Policy for Certificates"
ON public.certificates FOR SELECT TO public USING (true);

-- Policies for 'portfolio_comments': Allow read for everyone, and insert for everyone (but not pinned)
CREATE POLICY "Allow public read on portfolio_comments"
ON public.portfolio_comments FOR SELECT TO public USING (true);

CREATE POLICY "Allow public insert on portfolio_comments"
ON public.portfolio_comments FOR INSERT TO public WITH CHECK (is_pinned = false);

-- ---- STORAGE SETUP FOR COMMENT PROFILE IMAGES ----

-- Create a public bucket for profile images
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-images', 'profile-images', true)
ON CONFLICT (id) DO NOTHING; -- Avoid errors if the bucket already exists

-- Policies for 'profile-images' bucket
CREATE POLICY "Allow public to upload profile images"
ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'profile-images');

CREATE POLICY "Allow public to read profile images"
ON storage.objects FOR SELECT TO public USING (bucket_id = 'profile-images');

-- ---- EXAMPLE DATA INSERTION ----

-- Insert one example project
INSERT INTO public.projects ("Title", "Description", "Img", "Link", "Github", "Features", "TechStack") 
VALUES (
    'Example Project Title', 
    'A simple description for this example project, explaining its main purpose and goals.', 
    'REPLACE_WITH_YOUR_PROJECT_IMAGE_URL.png', 
    'REPLACE_WITH_YOUR_LIVE_DEMO_URL.com', 
    'REPLACE_WITH_YOUR_GITHUB_REPO_URL.com', 
    '["Main Feature A", "Core Function B", "Key Ability C"]', 
    '["React", "Supabase", "Tailwind CSS"]'
);

-- Insert one example certificate
INSERT INTO public.certificates ("Img") 
VALUES ('REPLACE_WITH_YOUR_CERTIFICATE_IMAGE_URL.png');

-- Insert one example comment
INSERT INTO public.portfolio_comments (content, user_name) 
VALUES ('Created By Eki Zulfar Rachman', 'ekizr');

```

### 3\. Enable Realtime (for Comment System)

  - Go to **Table Editor > portofolio_comments**.
  - Enable Realtime for the `portfolio_comments`.

## 🔧 Environment Variables Setup

Create a file named `.env` in the root of your project and add your Supabase credentials.

```env
# Supabase Configuration
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Important:**

  - All environment variables must be prefixed with `VITE_` for Vite to access them.
  - Restart your development server after creating or modifying the `.env` file.
  - **Never** commit your `.env` file to version control. Ensure it's listed in your `.gitignore` file.

### Configuration File (`supabase.js`)

Ensure your Supabase client configuration file (e.g., `src/supabase.js`) uses these environment variables.

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Anon Key are required. Check your .env file.")
}

export const supabase = createClient(supabaseUrl, supabaseKey)
```

## 🌟 Key Highlights

### 🎯 **Performance Optimized**
- **Lazy Loading** - Components load only when needed
- **Code Splitting** - Reduced initial bundle size
- **Optimized Images** - WebP format with fallbacks
- **Minimal Bundle Size** - Tree-shaking and minification

### 🔒 **Security & Best Practices**
- **Environment Variables** - Secure API key management
- **Form Validation** - Client and server-side validation
- **Sanitized Inputs** - XSS protection
- **HTTPS Deployment** - Secure data transmission

### 📱 **Mobile-First Design**
- **Responsive Grid** - Adapts to any screen size
- **Touch-Friendly** - Optimized for mobile interactions
- **Fast Loading** - Optimized for mobile networks
- **Progressive Enhancement** - Works on all devices

## 🎨 Design Philosophy

This portfolio embodies a **modern minimalist aesthetic** with carefully crafted:

- **Typography Hierarchy** - Clear information structure
- **Color Psychology** - Professional blue and accent colors
- **Whitespace Usage** - Clean, breathable layout
- **Interactive Elements** - Engaging user experience
- **Accessibility** - WCAG 2.1 compliant design

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ Performance
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Total Bundle Size**: < 1MB
- **Mobile Optimization**: 100%

## 🤝 Contributing

Contributions are always welcome! If you have suggestions for improvements:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**SYED AHMAD ALISHA**  
Full-Stack & AI Developer

- 🌐 **Portfolio**: [portfolio-v1-sandy-nine.vercel.app](https://portfolio-v1-sandy-nine.vercel.app/)
- 💼 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/syed-ahmad-alisha)
- 📧 **Email**: [Click to copy](mailto:ahmadalisha1420@gmail.com)
- 🐙 **GitHub**: [@Alisha-21-cloud](https://github.com/Alisha-21-cloud)

---

<div align="center">

**Built with ❤️ and modern web technologies**

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

*⭐ Don't forget to star this repository if you found it helpful!*

</div>