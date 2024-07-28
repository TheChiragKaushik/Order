## Live Demo

You can view the deployed application [here](https://oneorder.netlify.app/).

# Product Order List Application

This Product Order List application allows users to select products, specify quantities, and review their orders. It also features text-to-speech functionality to read out the order details. 

## Features

- **Product Selection**: Choose products and specify quantities.
- **Order Review**: Display and review the order summary.
- **Text-to-Speech**: Read out the order details using text-to-speech technology.
- **Responsive Design**: The app is designed to work seamlessly on both desktop and mobile devices.

## Tech Stack

- **ReactJS**: A JavaScript library for building user interfaces.
- **Redux**: State management with `@reduxjs/toolkit` for handling global state.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: For routing and navigation within the app.

## File Structure

```
src/
├── components/
│ ├── NewOrder.jsx # Component for displaying and selecting products
│ ├── ShowOrder.jsx # Component for displaying the order summary
│ ├── WhatIsMyOrder.jsx # Component for text-to-speech functionality
│ ├── Footer.jsx # Footer component for the application
│ ├── Navbar.jsx # Navigation bar component
├── app/
│ └── Store.js # Configuration of the Redux store
├── api/
│ └── index.js # Configuration of API
├── features/
│ └── order/
│ ├── orderSlice.js # Handles the state management for orders
│ └── textToSpeech.js # Manages text-to-speech functionality
├── index.css # Global CSS styles
├── App.jsx # Main application component that sets up routing and layout
└── main.jsx # Entry point for the React application, including routing and Redux provider setup
```

## Setup and Running Instructions

1. **Clone the Repository**
   ```bash
   https://github.com/TheChiragKaushik/Order.git

2. **Navigate to the Project Directory**
   ```bash
   cd Order

3. **Install Dependencies**
   ```bash
   npm install

4. **Run the Application**
   ```bash
   npm run dev

The application will start and be accessible at http://localhost:5173. 


5. **Building for Production**
   **Build the Application:**
     ```bash
     npm run build

This command creates a build directory with a production build of the app. The build can be deployed to a static site hosting service.
