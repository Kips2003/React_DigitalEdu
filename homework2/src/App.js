
import {Card} from "./components/Card.js"
import { products } from "./constants/products.js";
import { BlockList } from "./components/block-list.js";
import './App.css';

function App () {
  return(
      <main className="container">
          {products.map((product)=>(
            <Card {...product}
           />
          ))}
          <BlockList />
      </main>
  )
}

export default App;
