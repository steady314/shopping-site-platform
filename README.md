# Shopping Site Platform

A responsive e-commerce frontend built with React and designed to simulate a real-world online shopping experience.

The application allows customers to browse products, view product details, add products to a shopping cart, manage cart items, and proceed through a checkout flow.

Live Demo: https://shopping-site-platform.vercel.app/

GitHub Repository: https://github.com/steady314/shopping-site-platform

## Project Overview

This project was built as a portfolio application to demonstrate practical frontend development skills using React.

The application focuses on creating a realistic shopping experience with reusable components, client-side routing, shared application state, responsive layouts, and a structured component-based architecture.

The project was designed with real-world frontend practices in mind, including reusable UI components, responsive design, user interaction, state management, and production deployment.

## Features

### Product Discovery

* Browse available products
* View products in a responsive grid
* View individual product information
* View product images and pricing
* Navigate between different sections of the application

### Product Details

* View detailed product information
* Display product image and price
* Add products directly to the cart
* Navigate between products and shopping sections

### Shopping Cart

* Add products to the cart
* Increase or decrease product quantities
* Remove products from the cart
* Calculate cart totals
* View the current cart contents
* Maintain cart state across the application

### Checkout

* Review selected products before checkout
* Display order information
* Calculate the order total
* Provide a structured checkout interface

### User Experience

* Responsive layouts
* Mobile, tablet, and desktop support
* Reusable UI components
* Interactive navigation
* Clear product presentation
* Responsive shopping cart interface
* Consistent styling and spacing
* Accessible interactive elements

## Tech Stack

* React
* JavaScript
* React Router
* CSS
* Vite
* Git
* GitHub
* Browser localStorage

## Project Architecture

The application is organized around reusable components, pages, shared context, and product data.

```text
src/
├── components/
├── context/
├── data/
├── pages/
├── App.jsx
├── index.css
└── main.jsx
```

### Components

Reusable interface elements include components such as:

* Navbar
* ProductCard
* ProductGrid
* ProductDetails
* Modal
* Cart interface

### Context

Shared cart state is managed using React Context.

The cart context provides functionality for:

* Adding products
* Removing products
* Updating quantities
* Calculating totals
* Accessing cart data across different components

### Pages

The application separates major user experiences into individual pages, including:

* Home
* Products
* Product Details
* Cart
* Checkout

## Getting Started

### Clone the repository

```bash
git clone https://github.com/steady314/shopping-site-platform.git
```

### Move into the project directory

```bash
cd shopping-site-platform
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Screenshots

Screenshots can be added here to demonstrate the main application workflows.

Recommended screenshots:

* Home page
* Product listing
* Product details
* Shopping cart
* Checkout page
* Mobile responsive layout

## Known Limitations

This project currently uses a frontend-only architecture.

Product data is currently provided locally rather than retrieved from a production backend or external API.

The checkout flow is a frontend demonstration and does not process real payments or orders.

The application does not currently include:

* Backend API integration
* Database integration
* User authentication
* Real payment processing
* Order management
* Real-time inventory management
* Server-side checkout processing

## Future Improvements

Potential future development includes:

* REST API integration
* Backend product management
* User authentication
* Database integration
* Real payment gateway integration
* Order history
* User accounts
* Product search and advanced filtering
* Product reviews and ratings
* Wishlist functionality
* Inventory management
* Automated frontend testing
* TypeScript migration
* Production analytics

## What This Project Demonstrates

This project demonstrates practical experience with:

* React component architecture
* React state management
* Context API
* React Router
* Reusable components
* Product data rendering
* Shopping cart functionality
* Form and checkout interfaces
* Responsive CSS
* User interaction
* Client-side application architecture
* Git and GitHub workflow
* Production builds
* Vercel deployment
* Frontend project organization

## License

This project was created as a portfolio project for educational and demonstration purposes.
