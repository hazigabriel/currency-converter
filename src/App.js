import './App.scss';
import { useState, useEffect } from 'react';
import Converter from './components/converter/conveter';
import Suggestions from './components/suggestions/suggestions';
import Histogram from './components/histogram/histogram';


function App() {
  ///https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=8fa42fa13e6163c03e37 ech rate
  //7 days history https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&date=2022-04-10&endDate=2022-04-17&apiKey=8fa42fa13e6163c03e37
  //https://free.currconv.com/api/v7/currencies?apiKey=8fa42fa13e6163c03e37 countries and exch rate per country
  return (
    <div className="appContainer">
      <Converter />
      <Suggestions />
      <Histogram /> 
    </div>
  );
}

export default App;
