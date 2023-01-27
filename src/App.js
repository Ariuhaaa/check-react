import "./App.css";
import Input from "./components/Input";
import Main from "./components/Main";
import Data from "./components/Data";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState();
  const [products, setProducts] = useState(Data);

  const filter = () => {
    console.log(search);
  };

  return (
    <div className="container">
      <Input search={search} setSearch={setSearch} onFilter={filter} />
      <Main Data={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
