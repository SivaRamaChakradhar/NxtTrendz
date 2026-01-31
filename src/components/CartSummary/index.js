import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalItems = cartList.length
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      return (
        <>
          <div className="cart-summary-container">
            <div>
              <h1 className="cart-summary-price">
                Order Total: <span className="price">Rs {totalPrice} /-</span>
              </h1>
              <p className="cart-summary-items">{totalItems} items in cart</p>
            </div>
          </div>
          <button className="checkout-button" type="button">
            checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
