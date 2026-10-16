# Next.js User Management Client

A user management interface built with Next.js, React, TypeScript, and shadcn/ui. The application connects to an Express.js and MongoDB backend to perform user CRUD operations.

## Features

- Display the user list
- Add new users
- View individual user details
- Update existing user information
- Delete users
- Form-based user input
- Reusable UI components
- Responsive interface, where supported by the implemented layouts

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

## Getting Started

### Prerequisites

- Node.js and npm
- The corresponding Express.js API server

### Installation

Clone the repository:

```bash
git clone YOUR_CLIENT_REPOSITORY_URL
cd nextjs-user-management-client
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Backend Configuration

This application requires the corresponding Express.js API server to be running.

The API provides the following endpoints:

| Method | Endpoint     | Description            |
| ------ | ------------ | ---------------------- |
| GET    | `/users`     | Retrieve all users     |
| GET    | `/users/:id` | Retrieve a single user |
| POST   | `/users`     | Create a user          |
| PATCH  | `/users/:id` | Update a user          |
| DELETE | `/users/:id` | Delete a user          |

Configure the API base URL according to the configuration used in the application. If the API URL is hardcoded in the source, consider moving it to a Next.js public environment variable such as `NEXT_PUBLIC_API_URL`.

## Available Scripts

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `npm run dev`       | Start the development server    |
| `npm run build`     | Build the application           |
| `npm start`         | Start the production server     |
| `npm run lint`      | Run ESLint                      |
| `npm run typecheck` | Check TypeScript types          |
| `npm run format`    | Format TypeScript and TSX files |

## Learning Objectives

This project was built to practise connecting a Next.js frontend to a REST API, managing user data, and building reusable interfaces with modern React tooling.

## Related Project

**Backend:** [Express MongoDB User API](https://github.com/mehedilabs/express-mongodb-user-api)

## License

This project is available for learning and educational purposes.
