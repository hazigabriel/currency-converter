import React from 'react'
import "./suggestions.scss";

function Suggestions() {
  return (
    <div className="outerWrapper">
      <div className="innerWrapper suggestionsInnerWrapper">
        <h3>popular conversions</h3>
        <div className="suggestionsRow">
          <div className="suggestionButton">
            <h4>RON to EUR</h4>
            <p>{'>'}</p>
          </div>
          <div className="suggestionButton">
            <h4>EUR to USD</h4>
            <p>{'>'}</p>
          </div>
        </div>
        <div className="suggestionsRow">
          <div className="suggestionButton">
            <h4>GBP to EUR</h4>
            <p>{'>'}</p>
          </div>
          <div className="suggestionButton">
            <h4>EUR to JPY</h4>
            <p>{'>'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestions