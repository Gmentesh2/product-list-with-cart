/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import "../css/resp.css"
const Checkout = ({
  selectedDesserts,
  setSelectedDesserts,
  setOpenModal,
  cartCounter,
  setCartCounter,
}) => {
   const calculateTotalPrice = (selectedDesserts) => {
    let totalPrice = 0;
    selectedDesserts.forEach((dessert) => {
      totalPrice += dessert.price * dessert.amount;
    });
    //console.log("result", totalPrice)
    return totalPrice;
  };
  const result = calculateTotalPrice(selectedDesserts);

  return (
    <div className="checkout ">
      <h2 className="checkoutHeading">Your Cart ({cartCounter})</h2>
      {/* items */}

      {selectedDesserts.map((dessert, index) => {
        return (
          <section key={dessert.name} className="checkoutItem">
            <div className="checkoutItemLeft">
              <h6 className="dessert-name">{dessert.name}</h6>
              <p className="checkoutPriceContainer">
                <span className="checkoutItemAmount">{dessert.amount}x</span>
                <span className="checkoutItemPrice">
                  <span className="unit">@</span>${dessert.price}
                </span>
                <span className="checkoutItemTotalPrice">
                  ${dessert.price * dessert.amount}
                </span>
              </p>
            </div>
            <button
              className="checkoutItemRemoveBtn"
              onClick={() => {
                setSelectedDesserts(
                  selectedDesserts.filter((des, i) => des.name !== dessert.name)
                );
              }}
            >
              <span className="dessert-delete-btn">x</span>
            </button>
          </section>
        );
      })}
      <footer className="checkoutFooter">
        <section className="checkoutFooterLeft">
          <p className="total-order">Order Total</p>
          <h2 className="total-order-price">${result}</h2>
        </section>

        <section>
          <div className="carbon-neutral-delivery">
            <img src={carbonNeutral} alt="" style={{ marginRight: "3px" }} />
            <p>
              This is a{" "}
              <span style={{ fontWeight: "700" }}>carbon-neutral</span> delivery
            </p>
          </div>
          <button
            className="btn checkoutBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Confirm Order
          </button>
        </section>
      </footer>
    </div>
  );
};

export default Checkout;
