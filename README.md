# Badminton Equipment Secondhand Marketplace

## Description

The Badminton Equipment Marketplace, known as "Smash Deal," is a platform designed to facilitate the buying, selling, and trading of second-hand badminton equipment. Leveraging modern web technologies, this project aims to connect badminton enthusiasts from all over, enabling them to find great deals on equipment or sell items they no longer need.

## Features

- **User Authentication**: Secure login and registration system for users.
- **Product Listings**: Users can list their badminton equipment for sale, including details like condition, price, and photos.
- **Search and Filter**: Easily search for items or filter by category, price range, and location.
- **Messaging System**: Users can communicate directly within the platform to negotiate prices or ask for more details.
- **Payment Integration**: Secure payment system integrated with Stripe for safe and easy transactions.
- **Admin Panel**: Admins can manage users, listings, and site content.

## Technologies Used

- Frontend: React, Chakra UI, DaisyUI, Emotion, Framer Motion, Redux Toolkit, React Router DOM
- Backend: Express, Node.js, Firebase, Firebase Admin
- Payments: Stripe
- Other: Vite, TailwindCSS, Chart.js, dotenv

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system to run this project.

### Installation

1. Clone the repository
2. Setup environment variables:
- Create a `.env` file in the root directory.
- Add your Firebase and Stripe API keys as follows:
  ```
  REACT_APP_FIREBASE_API_KEY=<your_firebase_api_key>
  REACT_APP_STRIPE_API_KEY=<your_stripe_api_key>
  ```
3.npm run dev
4.npm start
