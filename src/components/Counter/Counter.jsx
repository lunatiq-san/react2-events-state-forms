import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  // Mandatory class method. They shoud return markup
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>

        <div className="Counter__controls">
          <button type="button">Increment on 1</button>
          <button type="button">Decrement on 1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
