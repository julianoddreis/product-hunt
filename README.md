# Product Hunt

A modern web application built with cutting-edge technologies to provide a seamless user experience.

## 🚀 Technologies

- **Vite**: Next-generation frontend tooling for blazing fast development and optimized builds
- **TypeScript**: Adds static type definitions to JavaScript, improving code quality and developer experience
- **TanStack Query**: Powerful asynchronous state management
- **TanStack Router**: Type-safe routing solution with excellent developer experience
- **Zod**: TypeScript-first schema validation with static type inference
- **GraphQL**: Modern API query language for efficient data fetching
- **Styled Components**: CSS-in-JS styling solution for component-based styling
- **ESLint**: Static code analysis tool for identifying and fixing problems in JavaScript/TypeScript code
- **Prettier**: Code formatter that enforces a consistent style across your codebase
- **Vitest and Testing Library**: To handle component tests

## 🛠️ Setup

1. Clone the repository
2. Copy the environment variables:
   ```bash
   cp .env.example .env
   ```
3. Setup the env `VITE_PRODUCT_HUNT_BEARER_TOKE` with your token.
   You can get this token creating one application at `https://www.producthunt.com/v2/oauth/applications` and requesting via curl

   ```bash
     curl -X POST https://api.producthunt.com/v2/oauth/token \
     -H "Content-Type: application/json" \
     -d '{
       "client_id": "YOUR_CLIENT_ID",
       "client_secret": "YOUR_CLIENT_SECRET",
       "grant_type": "client_credentials"
     }'
   ```

4. Install dependencies:

   ```bash
   yarn
   ```

5. Start the development server:
   ```bash
   yarn dev
   ```
   The application will be available at `http://localhost:5173` (or the port specified in your environment variables).

To run tests:

```bash
yarn test
```
