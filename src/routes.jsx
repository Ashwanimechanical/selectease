// src/routes.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';


const About = () => <div>About Page</div>;
const Categories = () => <div>Categories Page</div>;
const AddProduct = () => <div>Add Product Page</div>;
const WriteReview = () => <div>Write Review Page</div>;
const blogs = () => <div>Blogs Page</div>;
const Contact = () => <div>Contact Page</div>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/add-product',
        element: <AddProduct />
      },
      {
        path: '/write-review',
        element: <WriteReview />
      },
      {
        path: '/Blogs',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);