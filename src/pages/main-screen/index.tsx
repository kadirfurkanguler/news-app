import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Header } from 'components';
import { CategoryScreen, HomeScreen, SearchScreen } from 'pages';
export const MainScreen = () => {
  {
    /*
    Header ve Routes componentlerini render ediyoruz.
    Header componenti tüm sayfalarda görüneceği için burada render ediyoruz.
    Routes componenti ise tüm sayfaları yönlendirmek için kullanıyoruz.
    */
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen /> } />
        <Route path="categories/:category" element={<CategoryScreen />} />
        <Route path="search/:q" element={<SearchScreen />} />
      </Routes>
    </>
  )
};
