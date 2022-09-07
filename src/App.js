import React, {useState,useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Book from "./components/Book";
import Author from "./components/Author";
import BookReview from './components/BookReview';
import Navbar from './components/Navbar';
// import { useEffect, useState } from 'react';

function App() {
  
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route exact path='/' element={<Book />} />
          <Route exact path='/author' element={<Author />} />
          <Route exact path='/review' element={<BookReview/>} />
        </Routes>
      </Router> 
    </>
)
}

export default App;
