import React ,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [Mode, setMode] = useState(false);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = Mode ? "App dark" : "App light";
  function  WebLook(){                    
    setMode((Mode)=>!Mode)                  //missplaced logic 
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={WebLook}>
          {Mode ? "Dark" : "Light"} Mode {/* tiriary expression was not placed here correctly */}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;