import './App.scss';
import { useState, useEffect } from 'react';
import Converter from './components/converter/converter';
import Suggestions from './components/suggestions/suggestions';
import Histogram from './components/histogram/histogram';
const axios = require('axios');


function App() {
  const [currencies, setCurrencies] = useState('')

  useEffect(() => {
    axios.get('https://free.currconv.com/api/v7/currencies?apiKey=8fa42fa13e6163c03e37')
      .then(function (response) {
        // handle success
        setCurrencies(response.data.results)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     

  },[])   
  function showData(){
    console.log(currencies)
  } 
  ///https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=8fa42fa13e6163c03e37 ech rate
  //7 days history https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&date=2022-04-10&endDate=2022-04-17&apiKey=8fa42fa13e6163c03e37
  //https://free.currconv.com/api/v7/currencies?apiKey=8fa42fa13e6163c03e37 countries and exch rate per country
  return (
    <div className="appContainer">
      <button onClick={showData}>show data</button>
      <Converter currencies={currencies} />
      <Suggestions />
      <Histogram />       
    </div>
    
  );
}

export default App;
