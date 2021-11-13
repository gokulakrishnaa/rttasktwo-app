import "./App.css";
import { Header } from "./Header";
import { Toppage } from "./Toppage";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [remove, setRemove] = useState(add);
  return (
    <div className="App">
      <Header add={add} setAdd={setAdd} />
      <Toppage />
      <Home remove={remove} setRemove={setRemove} add={add} setAdd={setAdd} />
      <Footer />
    </div>
  );
}

export default App;
