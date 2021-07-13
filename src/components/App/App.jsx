import './App.css';
import Counter from '../Counter/Counter';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const App = () => {
  return (
    <>
      <h1>Component state</h1>

      <Counter initialValue={10} />
      <Counter />
    </>
  );
};

export default App;
