/* eslint-disable react/prop-types */
import emptyCartImage from "../assets/images/illustration-empty-cart.svg";
const EmptyCart = ({ cartCounter }) => {
  return (
    <div className="empty-cart">
      <h2 className="empty-cart-title">Your Cart ({cartCounter})</h2>
      <div className="empty-cart-content">
        <img src={emptyCartImage} alt="" />
        <p className="empty-cart-text">Your added items will be appear here</p>
      </div>
    </div>
  );
};

export default EmptyCart;
