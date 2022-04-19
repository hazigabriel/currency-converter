import React, { useEffect } from 'react';
import { useState } from 'react';
import "./converter.scss";
import { FaExchangeAlt } from 'react-icons/fa';

    
function Converter(props) {
  const {currencies} = props;
  const [fromCurrency, setFromCurrency] = useState("RON");
  const [toCurrency, settoCurrency] = useState("EUR");
  function showCurrencies(){
      console.log(currencies)
       
    
  }                 
  return (
    <div className="outerWrapper converterWrapper">
        <div className="innerWrapper converterInnerWrapper">
            <div className="currencySelector">
                <div>
                    <select>
                            {Object.keys(currencies).map((currency) => (
                                //display the default from value for the select drowndown using ternary operator validation
                                currency == fromCurrency ? <option selected value={currency}>{currency}</option> :  <option value={currency}>{currency}</option>
                                    
                            ))}
                            
                    </select>
                    <input type="number" min={1} placeholder="Amount" />   
                </div>
                
    
            </div>
            <div class="switchWrapper">
                <p>to</p>
                <FaExchangeAlt onClick={showCurrencies} />
            </div>

            <div className="currencySelector">
                <div>
                    <select>
                            {Object.keys(currencies).map((currency) => (
                                //display the default from value for the select drowndown using ternary operator validation
                                currency == toCurrency ? <option selected value={currency}>{currency}</option> :  <option value={currency}>{currency}</option>
                                    
                            ))}
                            
                    </select>
                    <input type="number"  placeholder="Amount" />   
                </div>
                
    
            </div>
        </div>
        
    </div>
  )
}

export default Converter