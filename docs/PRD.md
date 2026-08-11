# Product Requirements Document: Portfolio Web Application

## 1. Executive Summary

- **Problem Statement**: The user needs a clean, production-ready portfolio web application to showcase their 3+ years of experience as a Web Developer, specifically highlighting backend systems and scalable architecture.
- **Proposed Solution**: A single-page HTML5 portfolio styled with Tailwind CSS. The layout will be clean, high-readability, and spacious, inspired by modern minimal portfolios, using a strictly defined flat color palette.
- **Success Criteria**:
  - 100% adherence to the defined design system (no dark mode, no gradients, no neon).
  - Fully responsive on mobile, tablet, and desktop viewports.
  - Generates a production-ready build deployable directly to Vercel.

## 2. User Experience & Functionality

- **User Personas**: Recruiters, Hiring Managers, and potential clients looking for a Web Developer specialized in Backend Systems.
- **User Stories**:
  - *As a Recruiter*, I want to quickly see the developer's experience metrics so I know if they fit my senior/mid-level requirements.
  - *As a Hiring Manager*, I want to read detailed case studies of past government web applications to understand their technical depth (Laravel, Node.js).
  - *As a visitor*, I want to easily contact the developer via email or LinkedIn from the footer section.
- **Acceptance Criteria**:
  - Sticky navbar remains visible during scrolling.
  - Clicking 'Download CV' prompts a file download.
  - Featured project cards have functional "Case Study" and "GitHub" buttons.
  - Design strictly follows the requested flat design, high contrast, and spacing rules.
- **Non-Goals**:
  - Complex animations or 3D effects.
  - Dark mode support (explicitly excluded).
  - Backend integration (this is a static portfolio site).

## 3. Technical Specifications

- **Architecture Overview**: Static web application utilizing HTML5 and Tailwind CSS.
- **Technology Stack**:
  - **Core**: HTML5
  - **Styling**: Tailwind CSS (PostCSS)
  - **Icons**: SVG or a lightweight icon library (e.g., Lucide/Heroicons)
- **Directory Structure**:
  ```text
  /
  ├── index.html (Main landing page)
  ├── package.json (For Tailwind dependencies/scripts)
  ├── tailwind.config.js
  ├── src/
  │   └── css/
  │       └── style.css (Tailwind directives)
  └── assets/ (Images and CV file)
  ```
- **Design System Details**:
  - **Background**: Slate Off-White (`#F8FAFC`)
  - **Text Colors**: Primary: Deep Slate (`#0F172A`), Secondary: Muted Slate (`#475569`)
  - **Cards**: Pure White (`#FFFFFF`) with 1px solid border (`#E2E8F0`)
  - **Accent**: Cobalt Blue (`#2563EB`)
  - **Styling Rules**: FLAT design, no gradients, no neon glows.

## 4. Risks & Roadmap

- **Phased Rollout**:
  - **Phase 1**: Setup project structure and configuration (Tailwind).
  - **Phase 2**: Implement core UI components (Navbar, Hero, Metrics, Cards).
  - **Phase 3**: Refine spacing, typography, and test responsiveness.
  - **Phase 4**: Deployment to Vercel.
- **Technical Risks**:
  - Vercel static deployment configuration needs to correctly serve `index.html` from the root directory.
