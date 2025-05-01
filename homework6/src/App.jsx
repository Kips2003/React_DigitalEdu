import './css/App.css';
import './css/reset.css';
import Counter from './components/Counter';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      <h1>App</h1>

      <Counter />
      <Hello />
    </div>
  );
}

export default App;
