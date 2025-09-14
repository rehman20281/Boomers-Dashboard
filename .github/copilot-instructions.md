# Copilot Instructions for Boomers-Dashboard

## Project Overview
- This is a React (JSX) project bootstrapped with Vite for fast development and HMR.
- The codebase is organized by feature and domain: see `src/pages/`, `src/components/`, and `src/utils/`.
- State management is mostly local (React hooks), with some context providers in `src/providers/`.
- Data fetching and updates are handled via service modules in `src/utils/agentService.js` and similar files.
- The UI uses custom components in `src/components/ui/` and shared partials in `src/partials/`.

## Key Patterns & Conventions
- **API Calls:** Use the service functions in `src/utils/agentService.js` for all agent-related data. These return promises and are used in `useEffect` or event handlers.
- **Form Handling:** Forms use local state via `useState`. Updates are sent using FormData and service functions. See `PersonalInfo` in `src/pages/Profile/components/personal-info.jsx` for an example.
- **Modals/Dialogs:** Confirmation dialogs are implemented with local state (`isOpen`) and conditional rendering.
- **Update Patterns:** After a successful update, set a `dataupdated` flag to show a success message, then auto-hide it with `setTimeout`.
- **Component Structure:** Most pages export multiple related components (e.g., `PersonalInfo`, `LicensingInfo`, `Bio`, etc.) from a single file.
- **File Naming:** Use kebab-case for files and PascalCase for components.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite)
- **Build for Production:** `npm run build`
- **Lint:** `npm run lint` (uses ESLint config in `eslint.config.js`)
- **No explicit test setup** is present; add tests as needed.

## Integration & Data Flow
- **Auth:** User info and tokens are stored in `localStorage` and accessed directly in components.
- **API URLs:** Use `import.meta.env.VITE_API_URL` for backend endpoints.
- **File Uploads:** Profile images and other files are handled via FormData and passed to service functions.
- **Routing:** Uses `react-router-dom` for navigation; see `src/routing/`.

## Examples
- To update agent info, see the `handleSave` function in `src/pages/Profile/components/personal-info.jsx`.
- For dynamic select options, see the licensing info form in the same file.

## External Dependencies
- React, Vite, react-router-dom, axios, date-fns, lucide-react, and others as listed in `package.json`.

## Tips for AI Agents
- Always use the service layer for API calls, not direct axios/fetch in components.
- Follow the update/success-message pattern for user feedback.
- Use the provided UI components for consistency.
- Reference `README.md` for Vite/React basics, but rely on this file for project-specific patterns.
