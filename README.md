# Next.js Authentication Project

This is a Next.js project with authentication implemented using NextAuth.js, Prisma and MongoDB. It supports multiple providers such as Credentials, and GitHub, along with session management.

## Features

- Email/password login (Credentials Provider)

- OAuth login (GitHub)

- Secure password hashing with bcryptjs

- Session management

- Integration with Prisma ORM

- Ready to use with MongoDB

- Role-based access support


## Prerequisites

- Node.js >= 22

- npm

- Database (MongoDB)

- Optional: GitHub developer accounts for OAuth

---

## Getting Started

1. Clone the repository

2. Install dependencies

```bash
npm install
```

3. Setup environment variables

Create a .env file in the root directory:

```bash
# Database
DATABASE_URL=

# NextAuth secret
AUTH_SECRET=

# OAuth Providers
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

```

4. Setup Prisma

```bash
npx prisma generate
npx prisma db push
```

5. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to see the app in action.


## Thank you

- [Programming with Umair](https://www.youtube.com/watch?v=sQ3fPyko6o8)
