# Charity Organisation Platform

![Charity Organisation Logo](public/favicon.ico)

## Overview

This is a modern web application for a charity organisation built with Vue 3, TypeScript, and Firebase. The platform enables donors to connect with charitable causes, view upcoming events, make donations, and stay updated with the latest news from the organisation.

## Features

- **User Authentication**: Secure login with Google authentication
- **Interactive Map**: View charity branches and locations using MapLibre GL
- **Donation System**: Easy-to-use donation interface with payment integration
- **Events Calendar**: Browse and register for upcoming charity events
- **News Feed**: Stay updated with the latest news and articles
- **Responsive Design**: Optimized for all devices from mobile to desktop

## Tech Stack

- **Frontend**: Vue 3 with Composition API
- **State Management**: Pinia with persisted state
- **Styling**: SCSS with modern design principles
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Build Tool**: Vite
- **Testing**: Vitest for unit tests, Playwright for E2E tests
- **TypeScript**: For type safety and better developer experience
- **Form Validation**: Vuelidate
- **Notifications**: SweetAlert2

## Screenshots

*[Screenshots of the application would go here]*

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/charity.git
   cd charity
   ```

2. Install dependencies
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase configuration
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. Start the development server
   ```sh
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test:unit` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## Project Structure

```
/src
  /assets - Static assets like images and global styles
  /components - Reusable Vue components
  /firebase - Firebase configuration
  /interfaces - TypeScript interfaces
  /layouts - Layout components
  /router - Vue Router configuration
  /stores - Pinia stores
  /styles - SCSS variables, mixins, and global styles
  /utils - Utility functions
  /views - Page components
```

## Deployment

This application can be deployed to various platforms:

1. **Firebase Hosting**
   ```sh
   npm run build
   firebase deploy
   ```

2. **Netlify/Vercel**
   - Connect your repository and set the build command to `npm run build`
   - Set the publish directory to `dist`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Firebase](https://firebase.google.com/)
- [MapLibre GL](https://maplibre.org/)
- [Vite](https://vitejs.dev/)
- All our contributors and supporters

---

© 2025 Charity Organisation. All Rights Reserved.
