/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import addToCart from "../assets/images/icon-add-to-cart.svg";
import { useEffect, useState } from "react";
import decrementSvg from "../assets/images/icon-decrement-quantity.svg";
import incrementSvg from "../assets/images/icon-increment-quantity.svg";
const DessertCard = ({
  image,
  category,
  name,
  price,
  setSelectedDesserts,
  selectedDesserts,
}) => {
  const [count, setCount] = useState(0);


  // ------------------------------add
  const handlePlusClick = () => {
    setCount(count + 1);

    const selectedDessert = selectedDesserts.find((dessert) => {
      return dessert.name === name;
    });

    if (selectedDessert) {
      const updatedSelectedDesserts = selectedDesserts.map((dessert) => {
        if (dessert.name === selectedDessert.name) {
          return {
            amount: selectedDessert.amount + 1,
            price: price,
            name: name,
            image: image,
          };
        } else {
          return dessert;
        }
      });
      setSelectedDesserts(updatedSelectedDesserts);
    } else {
      const obj = {
        amount: count + 1,
        price: price,
        name: name,
        image: image,
      };
      setSelectedDesserts([...selectedDesserts, obj]);
    }
  };
  // ------------------------------remove
  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);

      const selectedDessert = selectedDesserts.find((dessert) => {
        return dessert.name === name;
      });

      if (selectedDessert.amount > 1) {
        const updatedSelectedDesserts = selectedDesserts.map((dessert) => {
          if (dessert.name === selectedDessert.name) {
            return {
              amount: selectedDessert.amount - 1,
              price: price,
              name: name,
            };
          } else {
            return dessert;
          }
        });
        setSelectedDesserts(updatedSelectedDesserts);
      } else {
        const updatedSelectedDesserts = selectedDesserts.filter((dessert) => {
          return dessert.name !== name;
        });
        setSelectedDesserts(updatedSelectedDesserts);
      }
    }
  };

  const dessert = selectedDesserts.find((dessert) => dessert.name === name);

  const amount = dessert?.amount;

  const borderStyle = amount
    ? {
        display: "flex",
      }
    : {};

  return (
    <div className="dessert-card">
      <img
        src={image}
        alt=""
        style={{
          border: amount ? "2px solid var(--color-primary)" : "",
        }}
      />
      <button>
        <img src={addToCart} alt="" />
        <span className="add-to-cart">Add to Cart</span>
        <span className="cart-actions" style={borderStyle}>
          <span className="action-span " onClick={handleMinusClick}>
            <span className="minus">
              <img src={decrementSvg} alt="" />
            </span>
          </span>
          <span className="action-quantity-span">{count}</span>
          <span className="action-span" onClick={handlePlusClick}>
            <span className="plus">
              <img src={incrementSvg} alt="" />
            </span>
          </span>
        </span>
      </button>
      <div className="card-footer">
        <h6 className="category-name">{category}</h6>
        <h2 className="category-title">{name}</h2>
        <p className="category-price">${price}</p>
      </div>
    </div>
  );
};

export default DessertCard;
