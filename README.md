# PhishTutor

## Overview

PhishTutor is an interactive web-based educational phishing attack prevention game designed to teach users how to identify and recognize phishing attacks. This project was developed as part of a bachelor thesis to improve user phishing attack awareness through gamified, hands-on learning experiences. The game's functionality and design rationale are described in detail in the thesis.

## Links

- **[Deployed Game](https://migle-kirilovaite.github.io/PhishTutor/)** - Play PhishTutor online

## Running Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm lint
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `src/components/` - Reusable React components (modals, email views, progress bars, etc.)
- `src/pages/` - Main page components (Welcome, Practice, Explanations, Feedback, etc.)
- `src/data/` - Game data including levels and phishing concepts

## Technology Stack

- **React 19** - User interface framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
