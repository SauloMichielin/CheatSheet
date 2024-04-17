import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Principal from './Pages/Principal';
import NotFound from './Pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Principal/> } />
      <Route path='*' element={ <NotFound/> } />
    </Routes>
  );
}