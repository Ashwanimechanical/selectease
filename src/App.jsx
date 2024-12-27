import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import './App.css';

function App() {
 return (
   <div className="app">
     <Header />
     <main className="main-content">
       <Outlet />
     </main>
     <Footer />
   </div>
 );
}

export default App;