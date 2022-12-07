import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Header } from 'components';
import { CategoryScreen, AboutScreen, HomeScreen, SearchScreen } from 'pages';
export const TestScreen = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen /> } />
        <Route path="categories/:category" element={<CategoryScreen />} />
        <Route path="search/:q" element={<SearchScreen />} />
        <Route path="about" element={<AboutScreen />} />
      </Routes>
    </>
  )
};
