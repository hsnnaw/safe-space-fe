<h1 align="center">SafeSpace</h1>

<p align="center">
  Mental Wellness Social Platform - A safe space for mental health support and community
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#core-features"><strong>Core Features</strong></a> ·
  <a href="#development-workflow"><strong>Development Workflow</strong></a>
</p>
<br/>

## Introduction

SafeSpace is a mental wellness social platform designed to provide a safe, supportive environment for individuals seeking mental health support. The platform combines anonymity options, peer support, mood tracking, and professional resources to create a comprehensive mental wellness community.

## Getting Started

### Prerequisites

- **Node.js LTS** - [Download here](https://nodejs.org/)
- **VS Code** - [Download here](https://code.visualstudio.com/)
- **Package Manager**: pnpm (recommended), npm, or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd safe-space-fe
\`\`\`

2. Enable Corepack (for pnpm):
\`\`\`bash
corepack enable
\`\`\`

3. Install dependencies:
\`\`\`bash
pnpm install
# or
npm install
# or
yarn install
\`\`\`

4. Run the development server:
\`\`\`bash
pnpm dev
# or
npm run dev
# or
yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** (TypeScript) - React framework with Server-Side Rendering (SSR) and Client-Side Rendering (CSR)
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion](https://framer.com/motion)** - Animation library
- **[Lucide Icons](https://lucide.dev/)** - Icon library

### Backend (Separate Repository)
- **Node.js** (TypeScript)
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Sequelize ORM** - Database ORM

### Deployment
- **VM** (University provided) - Production deployment

### Code Quality
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## Core Features

### 1. Dual Identity System
- Post as yourself (profile) OR anonymously
- Toggle between identities per post/comment
- Anonymous posts get random animal avatars (changes per post for privacy)
- Profile posts build reputation/trust in community

### 2. Mood-Based Feed & Tracking
- **Daily Mood Check-in**: Quick emoji selection (😊😐😔😰😢)
- **Mood Timeline**: Visual graph showing emotional patterns over weeks
- **Feed Filters**: See posts from others feeling similar emotions
- **Mood-based matching**: Connect with others going through similar phases

### 3. Safe Content Sharing
- Posts with trigger warnings (automatically tagged: anxiety, depression, self-harm, etc.)
- Content filtering preferences - users control what they see
- Vent posts vs Success stories - different post types
- Voice notes option - sometimes typing is hard
- Art/Creative expression - image uploads for art therapy

### 4. Peer Support Features
- **"Me Too" button** - Solidarity instead of likes
- **Gentle comments system** - AI checks for harmful language before posting
- **Buddy System**: Match users who want accountability partners
- **Crisis Button**: Immediately connects to helplines (by country)

### 5. "Hope Wall"
- Curated recovery stories and positive outcomes
- Filter by condition type (anxiety, depression, eating disorders, etc.)
- Uplifting quotes submitted by community
- "Where are they now" - check-ins from people who recovered

### 6. Guided Support Rooms
Topic-based chat rooms (moderated):
- "Anxious Tonight" - late-night anxiety support
- "Work Stress"
- "Relationship Issues"
- "New to Therapy"
- Scheduled group sessions - like AA meetings but virtual
- Breathing exercises room - synchronized meditation/breathing with others

### 7. Daily Coping Toolkit
- Personalized coping strategies library
- Grounding exercises (5-4-3-2-1 technique, etc.)
- Emergency calm-down activities (breathing animations, soothing sounds)
- Journaling prompts - private entries with mood tracking
- Gratitude journal - daily 3 things you're grateful for

### 8. Wellness Challenges
- 7-day challenges: "Exercise 10 mins daily", "Talk to one person", "No doomscrolling"
- Team challenges - do it together with matched buddies
- Streak tracking - gamification without being toxic
- Rewards: badges, unlockable calming backgrounds

### 9. Professional Corner
- Verified therapists can post educational content (not ads)
- Myth-busting section - common mental health misconceptions
- Resource directory: Affordable therapy, hotlines, crisis centers by location
- Self-assessment tools (PHQ-9, GAD-7 screeners) - with disclaimer

### 10. Smart Moderation & Safety
- AI sentiment analysis - flags concerning posts for human moderators
- Community reporting - but done sensitively
- Trained volunteer moderators
- Auto-resources: Posts with keywords like "suicide" get resource banner

### 11. Real-Time Chat System
**1-on-1 Private Chat:**
- End-to-end encrypted
- Can remain anonymous or reveal profile
- "Feeling overwhelmed" button - pause conversation gracefully
- Reported chats reviewed by moderators

**Group Chats:**
- Max 5-8 people for intimacy
- Temporary rooms (24hr) or ongoing support groups
- Ice breaker prompts to start conversations
- Moderator presence in some rooms

**Chat Features:**
- Typing pauses - reminds people to think before sending in crisis
- Supportive response suggestions - AI suggests empathetic replies
- No screenshots allowed (discouraged)

## Development Workflow

### Git Workflow

**IMPORTANT**: Always pull the latest changes before starting work:

\`\`\`bash
# Pull latest changes from main branch
git pull origin main

# OR create a new branch
git checkout -b "feature/your-feature-name"
\`\`\`

### Branch Strategy
- \`main\` - Production-ready code
- \`develop\` - Development branch
- \`feature/*\` - Feature branches
- \`bugfix/*\` - Bug fix branches

### CI/CD Pipeline
- Automated testing on pull requests
- Automated deployment to VM on merge to main
- Code quality checks (ESLint, TypeScript)

## Project Structure

\`\`\`
safe-space-fe/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ...
├── components/            # React components
│   ├── home/             # Home page components
│   ├── layout/           # Layout components
│   └── shared/           # Shared/reusable components
├── lib/                  # Utilities and hooks
│   ├── hooks/           # Custom React hooks
│   └── utils.ts         # Utility functions
├── public/              # Static assets
└── ...
\`\`\`

## Available Scripts

\`\`\`bash
# Development
pnpm dev          # Start development server

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm format       # Check code formatting
pnpm format:write # Format code with Prettier
\`\`\`

## Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Database (to be configured later)
# DATABASE_URL=

# API Keys (to be configured later)
# API_KEY=
\`\`\`

## Contributing

1. Pull the latest changes from main
2. Create a new branch for your feature
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

See [LICENSE.md](LICENSE.md) for details.
