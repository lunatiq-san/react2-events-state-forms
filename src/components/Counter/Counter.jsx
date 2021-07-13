import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     value: 0,
  //   };
  // }

  // Same as above, with Babel
  state = { value: 5 };

  // Arrow fn automatically binds context
  handleIncrement = event => {
    console.log('Click on increment button');
    // The event is only available in synchronous code
    const target = event.target;

    setTimeout(() => {
      console.log(target);
    }, 1000);
  };

  handleDecrement = () => {
    console.log('Click on decrement button');
  };
  // Mandatory class method. They shoud return markup
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter__controls">
          {/* Event - onClick, onSubmit, onChange, onMouseMove etc. */}
          <button type="button" onClick={this.handleIncrement}>
            Increment on 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrement on 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
