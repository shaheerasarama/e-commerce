# E-commerce Website

**E-commerce Website** is a React application that allows users to browse various online items, search for them, view details, and add or remove them from their cart. The cart operation is available only when the user is logged in. You can choose a user and log in using the [users list](https://dummyjson.com/users).

## Table of Contents
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Components](#components)
- [Routing](#routing)
- [Data Management](#data-management)
- [Styling](#styling)
- [Additional Resources](#additional-resources)
- [Contact](#contact)

## Demo

Check out the online demo of the website: [E-commerce Website Demo](https://shaheerasarama.github.io/e-commerce/).

## Getting Started

To get started with the E-commerce Website, follow these steps:

1. Clone the repository to your desktop:

    ```bash
    git clone https://github.com/SD-0224/Shaheera-Sarama-React
    ```

2. Navigate to the project directory:

    ```bash
    cd firstProject
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

Once the development server is running, you can access the E-commerce Website in your browser at `http://localhost:3000`. From there, you can browse online items, view item details, search for items, and fill your cart with your favorite items.

## Components

The E-commerce Website consists of several components that are used throughout the application. Here are some of the main components:

- **Shared and reusable components throughout the application:**
  - **Header component:** Contains the navigation.
  - **Card component:** Displays information about the items.
  - **ProductRating component:** Responsible for rendering the UI rating for items.
  - **HeroImg component:** Contains the Hero image used on the website.
  - **Footer component:** Contains the footer content.

- **Pages components which contain the pages in the website:**
  - **Home component:** Contains the home page content, including a list of categories and some products.
  - **Categories component:** Responsible for showing the products related to the selected category.
  - **Product component:** Contains the details page content for individual items.
  - **Login component:** Responsible for the login operation on the website.
  - **Cart component:** Responsible for showing the user's cart of items with the ability to manipulate this data.
  
    > **Note:** The cart functionality uses `localStorage` to store and manage cart items because the API does not support add-to-cart requests.

  - **Products component:** Responsible for showing all the products with pagination, and includes the functionality for searching for items, applying filters by categories, and sorting products by:
    - Price: Low to High
    - Price: High to Low
    - Most Rating
    - Product Title

## Routing

The application uses React Router for client-side routing. Here are the main routes:

- `/`: Home page displaying a list of categories.
- `/:categoryName`: Products listing according to the selected category.
- `/:categoryName/:id`: Product details based on the selected product.
- `/products`: Listing of all products.
- `/login`: Displays the login page.
- `/userCart`: Displays the user's cart items page.

## Data Management

The E-commerce Website manages item data using React State, the Context API, and makes API calls to retrieve item information from a [backend server](https://dummyjson.com).

## Styling

Styling is achieved using MUI components by customizing them to create a visually appealing user interface.

## Additional Resources

**API Links:**

- [List of all Products](https://dummyjson.com/products?limit=0)
- [Details of a Product](https://dummyjson.com/products/1)
- [List of products according to category](https://dummyjson.com/products/category/categorName)
- [Login Request](https://dummyjson.com/auth/login)
- [Getting User Info](https://dummyjson.com/auth/me)
- [Getting Category List](https://dummyjson.com/products/category-list)
- [Search for Products](https://dummyjson.com/products/search?limit=0&q=searchKeyWord)

These links provide access to various endpoints of the backend server, allowing the retrieval of items and user information.

## Contact

For any inquiries or feedback, feel free to reach out via email at shaheerasarama@gmail.com.
