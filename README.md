# 🛍️ E-commerce Website

A React-based e-commerce web app where users can browse, search, view, and add/remove products from their cart. Users must be logged in to manage their cart. You can log in using a dummy user from this [users list](https://dummyjson.com/users).

---

## 📑 Table of Contents

- [🚀 Demo](#-demo)
- [⚙️ Getting Started](#️-getting-started)
- [💻 Usage](#-usage)
- [🧩 Components](#-components)
  - [🔁 Shared Components](#-shared-components)
  - [📄 Page Components](#-page-components)
- [🌐 Routing](#-routing)
- [🔧 Data Management](#-data-management)
  - [🧠 User Slice](#-user-slice)
  - [🛒 Cart Slice](#-cart-slice)
- [🎯 Cart Context](#-cart-context)
  - [📌 Features](#-features)
  - [📦 Usage](#-usage-1)
- [🎨 Styling](#-styling)
- [📚 API Resources](#-api-resources)
- [📬 Contact](#-contact)

---

## 🚀 Demo

Check out the live version of the project here:  
👉 [https://shaheerasarama.github.io/e-commerce/](https://shaheerasarama.github.io/e-commerce/)

---

## ⚙️ Getting Started

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/shaheerasarama/e-commerce

# 2. Navigate to the project directory
cd e-commerce

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

---

## 💻 Usage

Visit `http://localhost:3000` in your browser. From there, you can:

- View all products
- Filter products by category
- Sort and search
- View product details
- Log in with dummy user credentials
- Add/remove items from your cart

> Note: Cart functionality is enabled only for logged-in users.

---

## 🧩 Components

### 🔁 Shared Components

- **Header** – Navigation bar with links.
- **Card** – Displays each product.
- **ProductRating** – Visual rating component.
- **HeroImg** – Large banner image.
- **Footer** – Basic site footer.

### 📄 Page Components

- **Home** – Categories and featured products.
- **Products** – Displays all products with:
  - Pagination
  - Category filter
  - Sort (price, rating, title)
  - Search input
- **Categories** – Products by selected category.
- **Product** – Product details page.
- **Login** – User login using dummy API.
- **UserProfile** – Shows logged-in user info.
- **Cart** – Shows items in user’s cart with update/delete.

---

## 🌐 Routing

React Router handles routing:

| Path | Description |
|------|-------------|
| `/` | Home page |
| `/products` | All products |
| `/login` | Login page |
| `/userProfile` | User info (protected) |
| `/userCart` | Cart (protected) |
| `/:categoryName` | Products by category |
| `/:categoryName/:id` | Product details |

---

## 🔧 Data Management

Uses **Redux** to manage user and cart state.

### 🧠 User Slice

- Handles login/logout
- Stores user info
- Makes user data accessible in `UserProfile`

### 🛒 Cart Slice

- Add/update/remove items from cart
- Syncs with `localStorage` for persistence

> Cart data is stored locally due to the API’s limitations.

---

## 🎯 Cart Context

Used for managing login and cart access globally.

### 📌 Features

- Stores user login state
- Stores user information
- Cart operations:
  - Add item
  - Update quantity
  - Remove item
- Logout clears user and cart data

### 📦 Usage

All components can access cart/user data via context. Helps maintain centralized state control and UI updates.

---

## 🎨 Styling

Uses **Material-UI (MUI)** for styling:

- Fully responsive layout
- Customized components for cards, buttons, inputs, etc.
- Typography, spacing, and UI behavior adapted for modern e-commerce UX

---

## 📚 API Resources

Data is fetched from [DummyJSON](https://dummyjson.com).

| Resource | Endpoint |
|----------|----------|
| All Products | [https://dummyjson.com/products?limit=0](https://dummyjson.com/products?limit=0) |
| Product Details | [https://dummyjson.com/products/1](https://dummyjson.com/products/1) |
| By Category | [https://dummyjson.com/products/category/{categoryName}](https://dummyjson.com/products/category/categorName) |
| Category List | [https://dummyjson.com/products/category-list](https://dummyjson.com/products/category-list) |
| Search | [https://dummyjson.com/products/search?q=term](https://dummyjson.com/products/search?limit=0&q=searchKeyWord) |
| Login | [https://dummyjson.com/auth/login](https://dummyjson.com/auth/login) |
| Authenticated User | [https://dummyjson.com/auth/me](https://dummyjson.com/auth/me) |

---

## 📬 Contact

If you have any questions or suggestions, feel free to reach out:  
📧 **shaheerasarama@gmail.com**

---
