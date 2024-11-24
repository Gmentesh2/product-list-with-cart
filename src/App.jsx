/* eslint-disable no-unused-vars */
import "./App.css";
import "./css/resp.css";
import DessertCard from "./components/DessertCard";
import data from "./assets/data.json";
import Checkout from "./components/Checkout";
import { useEffect, useState } from "react";
import CheckoutModal from "./components/CheckoutModal";
import EmptyCart from "./components/EmptyCart";

const App = () => {
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [cartCounter, setCardCounter] = useState(0);

  useEffect(() => {
    const totalItems = selectedDesserts.reduce(
      (total, dessert) => total + dessert.amount,
      0
    );
    setCardCounter(totalItems);
  }, [selectedDesserts]);

  // console.log(selectedDesserts)

  return (
    <>
      {/*---------------------Modal*/}
      {openModal ? (
        <CheckoutModal
          selectedDesserts={selectedDesserts}
          setSelectedDesserts={setSelectedDesserts}
          setOpenModal={setOpenModal}
          setCardCounter={setCardCounter}
        />
      ) : null}
      {/*---------------------Content*/}
      <div className="container app-container">
        <h2 className="main-title">Desserts</h2>
        <section className="sub-container">
          <div className="deserts-container">
            {data.map((desert, index) => {
              return (
                <DessertCard
                  setSelectedDesserts={setSelectedDesserts}
                  selectedDesserts={selectedDesserts}
                  name={desert.name}
                  price={desert.price}
                  category={desert.category}
                  key={index}
                  image={desert.image.desktop}
                />
              );
            })}
          </div>

          <div className="checkout-div">
            {cartCounter > 0 ? (
              <Checkout
                selectedDesserts={selectedDesserts}
                setSelectedDesserts={setSelectedDesserts}
                setOpenModal={setOpenModal}
                cartCounter={cartCounter}
                setCardCounter={setCardCounter}
              />
            ) : (
              <EmptyCart cartCounter={cartCounter} />
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
