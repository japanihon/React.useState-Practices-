import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Conditional from './Conditional'
import Error from './Error'
import ShoppingCart from './ShoopingCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Conditional />
        <Error />
        <ShoppingCart />
      </header>

    </div>
  );
}

export default App;
