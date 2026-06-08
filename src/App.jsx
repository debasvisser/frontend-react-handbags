import './App.css'
import Button from "./assets/components/Button.jsx";
import Product from "./assets/components/Product.jsx";
import Tile from "./assets/components/Tile.jsx";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
  return (<>

        <h1>Handbags & Purses</h1>
        <nav>
          <Button text="to the collection" disabled={false}/>
          <Button text="shop all bags" disabled={false}/>
          <Button text="pre-orders" disabled={true}/>
        </nav>
          <main>
              <Product label="Best seller" image={bag1} imageALT="bag1" nameOfBag="The handy bag" price="400"/>
              <Product label="Best seller" image={bag2} imageALT="bag2" nameOfBag="The stylish bag" price="250"/>
              <Product label="New collection" image={bag3} imageALT="bag3" nameOfBag="The simple bag" price="300"/>
              <Product label="New collection" image={bag4} imageALT="bag4" nameOfBag="The trendy bag" price="150"/>
          </main>
          <footer>
              <Tile title="The brand">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor dolores molestiae, officia omnis sapiente!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facere id possimus quia ratione voluptas.</p>
              </Tile>
              <Tile image={brand} imgDescription="Brand logo"/>
              <Tile image={our_story} imgDescription="The designers"/>
              <Tile title="Our story">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto autem, cum dolor est fugit hic id iste molestias officiis quae quibusdam rerum, sunt. Nulla.</p>
              </Tile>
          </footer>
    </>
  )
}

export default App
