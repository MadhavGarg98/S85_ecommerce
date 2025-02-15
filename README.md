
# Follow Along E-Commerce Website

## Key Features

### 1. REST API
- Implements RESTful principles for efficient client-server communication.
- Endpoints for managing products, users, and orders.

### 2. MERN Stack
- Built with MongoDB, Express.js, React, and Node.js.
- Ensures scalability, performance, and a seamless full-stack experience.

### 3. Order Handling
- Streamlined order processing from cart to checkout.
- Real-time updates for order status and inventory management.

### 4. Product Listing & Management
- Features for adding, editing, and removing products.
- Search and filter functionality for an optimized user experience.

### 5. User Authentication
- Secure authentication with JWT.
- Role-based access control for users and admins.

---

## Milestone 2 Progress 🚀

### ✅ Project Setup
- Structured the project with separate frontend and backend directories.
- Initialized a React app for the frontend and a Node.js server for the backend.

### ✅ Tooling & Configuration
- Configured Tailwind CSS for modern and responsive styling.
- Added useful extensions to improve development efficiency.

### ✅ Login Page Implementation
- Designed and developed a fully functional Login Page.
- Ensured proper UI styling using Tailwind CSS.
- Set up basic authentication logic to handle user login.

---

## Milestone 3 Progress 🚀

### ✅ Backend Folder Structure
- Organized backend code with separate folders for routes, controllers, models, and middleware.

### ✅ Server Setup
- Created a backend server using Node.js and Express.

### ✅ Database Connection
- Integrated MongoDB to store and manage data.

### ✅ Error Handling
- Implemented a global error handler for better debugging.

---

## Milestone 4: Creating User Model and Controller 🚀

### ✅ User Model Implementation
- Defined a *User Schema* using Mongoose.
- Integrated *bcrypt* for secure password hashing.

### ✅ User Controller Setup
- Developed controller functions for user management.

### ✅ Multer File Upload Integration
- Configured *Multer* to handle file uploads (e.g., profile pictures).

---

## Milestone 5: Creating the Signup Page 🚀

### ✅ Sign-Up Page UI Development
- Designed the Sign-Up page using Tailwind CSS.
- Implemented client-side form validation.

---

## Milestone 6: Backend Signup Endpoint and Password Encryption 🚀

### ✅ Signup Endpoint Implementation
- Created a new route to handle user registration.
- Used bcrypt to hash passwords securely.

---

## Milestone 7: Backend Login Endpoint and Password Validation 🚀

### ✅ Login Endpoint Implementation
- Created a backend route for user login.
- Implemented password validation using bcrypt.compare.

---

## Milestone 8: Product Card Component and Homepage Layout 🚀

### ✅ Frontend Product Card Component
- Designed and implemented a reusable Product Card component.
- Created a responsive homepage to display multiple Product Cards.

---

## Milestone 9: Product Input Form 🚀

### ✅ Product Form Implementation
- Designed a form for adding product details.
- Integrated backend database storage with validation.

---

## Milestone 10: Product Schema and API Endpoint 🚀

### ✅ Product Schema Implementation
- Defined a *Product Schema* in Mongoose.
- Implemented validation for fields like name, price, and image URL.

### ✅ API Endpoint for Adding Products
- Created a *POST* endpoint to store product details in MongoDB.
- Ensured proper validation before saving the data.

---

## Milestone 11: Dynamic Product Display 🚀


### ✅ Fetching Product Data
- Created an endpoint to retrieve all stored products from MongoDB.
- Implemented API call logic in the frontend to fetch data dynamically.

### ✅ Displaying Products
- Passed fetched product data to the Product Card component.
- Rendered product information dynamically on the homepage.

## Milestone 12: Product Page Implementation 🚀

## Overview
In this milestone, I developed the **Product Page** that displays products created by the logged-in user. If a user creates a product on the **Create Product Page** using their email ID, it will be visible on their **Product Page**.

## Key Features ✅
- **User-Specific Product Display**: Products created using a particular email ID are shown on the corresponding user's Product Page.
- **Dynamic Fetching**: The page fetches product data from the backend dynamically.
- **Seamless Integration**: Integrated with the existing product creation and authentication system.

## Implementation Details ⚙️

- **Updated Product Schema**: Added an `email` field to associate products with the creator's email ID.
- **Created API Endpoint**: Developed a new GET endpoint to fetch products based on the logged-in user's email.
- **Dynamic Rendering**: Fetched products are dynamically displayed on the Product Page.

## Milestone 13: Product Update Feature 🚀

## ✅ Overview
Implemented the ability to update product details using the product ID. Users can modify product name, price, and image.

## ✅ Key Features
Edit Product Details: Users can update product information.
Update by Product ID: Changes are applied based on the product’s unique identifier.
Real-Time Data Fetching: Updated details are reflected instantly.
## ✅ Implementation
Created a PUT API endpoint to update product details in MongoDB.
Designed an edit form in the frontend with pre-filled data.
Ensured dynamic updates by fetching the latest product data.

