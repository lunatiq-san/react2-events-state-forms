import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  // Default props for class with Babel
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};
  // constructor() {
  //   super();

  //   this.state = {
  //     value: 0,
  //   };
  // }

  // Same as above, with Babel
  // state - always object
  // state = { value: 5 };
  state = { value: this.props.initialValue };

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
    // this.setState(update, callback);
    // this.setState({ value: 10 });
    // Object ^^^

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    // Link ^^^
  };
  // Mandatory class method. They shoud return markup
  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />

        {/* Event - onClick, onSubmit, onChange, onMouseMove etc. */}
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Increment on 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrement on 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
