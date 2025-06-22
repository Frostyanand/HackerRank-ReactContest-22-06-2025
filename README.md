# React UI Challenges – Interactive Components Showcase

This project is a modular React application that demonstrates clean, functional, and visually engaging solutions to four different UI-focused challenges. Each problem is implemented as a separate component using React and Tailwind CSS for modern styling and responsiveness.

## Requirements

- Node.js (v14 or higher)
- npm or yarn
- Modern browser (for testing components)

## Installation & Setup

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-ui-challenges.git
   cd react-ui-challenges
Install all dependencies:


npm install
or if you're using yarn:

yarn install
Start the development server:

npm start
The application will be available at http://localhost:3000

Using the Application
To run any specific question/component:

Open src/App.js

Import the component you want to view:

import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
Replace the component in the return statement:

export default function App() {
  return <Question2 />;
}
Save the file. The browser will reload with the selected component view.

Overview of Questions
Question 1 – Article Sorting
Displays a table of articles that can be sorted by upvotes or publication date. Includes interactive buttons and responsive styling. Articles default to sorted by upvotes.

Question 2 – Word Omitter
Allows users to type a sentence while omitting a predefined list of words in real-time. Includes a toggle to show all words and a clear button. Text is filtered immediately as you type.

Question 3 – Word Omitter (Enhanced UI)
An advanced version of the word omitter with a modern glassmorphic interface, animated feedback, real-time word statistics, and dynamic transitions. Designed to deliver both functionality and aesthetics.

Question 4 – Slideshow Application
A fully interactive slideshow interface featuring smooth transitions, progress tracking, restart and navigation controls. Each slide contains a title and descriptive content, optimized for readability.

Production Build
To create a production-ready version of the application:

npm run build
The compiled project will be available in the /build folder, ready for deployment to Netlify, Vercel, GitHub Pages, or any other static hosting platform.