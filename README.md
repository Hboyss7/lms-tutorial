# LMS Tutorial Project

Learning Management System built with Next.js, Prisma, Clerk, and UploadThing.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon/Vercel Postgres recommended)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd lms-tutorial
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Then fill in your actual values in `.env.local`:
- **Clerk**: Sign up at https://clerk.com and get your keys
- **Database**: Get PostgreSQL connection string from Neon or Vercel
- **UploadThing**: Sign up at https://uploadthing.com and configure App URL
- **Mux** (optional): For video processing at https://mux.com
- **Stripe** (optional): For payments at https://stripe.com

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: Clerk
- **File Upload**: UploadThing
- **Rich Text Editor**: react-quill-new
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Video Processing**: Mux (optional)
- **Payment**: Stripe (optional)

## 📁 Project Structure

```
lms-tutorial/
├── app/                    # Next.js app directory
│   ├── (dashboard)/       # Dashboard routes (protected)
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities
│   └── generated/prisma/ # Prisma client
└── prisma/               # Database schema
    └── schema.prisma
```

## 🔑 Environment Variables

See `.env.example` for all required environment variables.

**Important**: Never commit `.env.local` to Git! It contains sensitive keys.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma generate` - Generate Prisma Client
- `npx prisma db push` - Push schema changes to database

## 👥 Team Setup

1. Clone the repository
2. Copy `.env.example` to `.env.local`
3. Ask team lead for actual API keys and database URL
4. Run `npm install`
5. Run `npx prisma generate` to generate Prisma Client
6. Run `npm run dev` to start development
7. Happy coding! 🎉

## ⚙️ UploadThing Configuration

1. Sign up at https://uploadthing.com
2. Create a new app
3. In dashboard settings, set **App URL** to `http://localhost:3000` (for local dev)
4. Copy `UPLOADTHING_TOKEN`, `UPLOADTHING_SECRET`, and `UPLOADTHING_APP_ID` to `.env.local`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [UploadThing Documentation](https://docs.uploadthing.com)

## 📄 License

MIT
