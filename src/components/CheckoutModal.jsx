/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import successImage from "../assets/images/icon-order-confirmed.svg";
const CheckoutModal = ({
  selectedDesserts,
  setOpenModal,
  setCardCounter,
  setSelectedDesserts,
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
    <div
      className="modal-overlay"
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div
        className="checkout-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={successImage} alt="" width="40px" height="40px" />
        <h2 className="modal-headline">Order Confirmed</h2>
        <p className="modal-text">We hope you enjoy your food</p>
        {selectedDesserts.map((dessert, index) => {
          return (
            <section key={dessert.name} className="checkoutModalSection">
              <div className="modal-sub-content">
                <div className="modal-dessert-list">
                  <img
                    src={dessert.image}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                    alt=""
                  />
                  <div className="modalNamePriceQuantity">
                    <h6>{dessert.name}</h6>
                    <p className="checkoutPriceContainer">
                      <span className="checkoutItemAmount modalCheckoutAmount">
                        {dessert.amount}x
                      </span>
                      <span className="checkoutItemPrice modalCheckoutPrice">
                        <span>@</span> ${dessert.price}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="checkoutItemTotalPrice modalCheckoutTotalPrice">
                  ${dessert.price * dessert.amount}
                </span>
              </div>
            </section>
          );
        })}

        <div className="modal-total-price">
          <p>Order Total</p>
          <h2>$ {result}</h2>
        </div>
        <button
          onClick={() => {
            setOpenModal(false);
            setCardCounter(0);
            setSelectedDesserts([]);
          }}
          className="startNewOrderBtn"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
