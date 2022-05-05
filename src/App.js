// import Greet from './components/Greet';
// import {Message} from './components/Message';
// import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Greet name="tizio" superHeroName="tizioman" />
      <Greet name="sempronio" superHeroName="sempronium">
        <button>Action</button>
      </Greet>
      <Greet name="caio" superHeroName="wonder caio">
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
