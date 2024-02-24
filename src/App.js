import { Container } from "react-bootstrap";
import "./index.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import { useState } from "react";
import Catogery from "./components/Catogery";
import { items } from "./data";

function App() {
  const [itemsData, setItemsData] = useState(items);
  const allCtegory = ["الكل", ...new Set(items.map((i) => i.category))];
  // console.log(allCtegory);

  // filter by catogery
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArry = items.filter((item) => item.category === cat);
      setItemsData(newArry);
    }
  };

  // filter by search form
  const filterbySearch = (word) => {
    if (word !== "") {
    }
    const newArrSearch = items.filter((item) => item.title === word);
    setItemsData(newArrSearch);
  };
  

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Catogery filterbyCategory={filterbyCategory} allCtegory={allCtegory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
