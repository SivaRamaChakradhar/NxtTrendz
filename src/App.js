import {Component} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import {ProductItemDetailsWrapper} from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

const LoginFormWrapper = () => {
  const navigate = useNavigate()
  return <LoginForm navigate={navigate} />
}

class App extends Component {
  state = {
    cartList: [],
    showNotification: false,
  }

  componentDidMount() {
    this.loadCartFromLocalStorage()
  }

  loadCartFromLocalStorage = () => {
    try {
      const savedCart = localStorage.getItem('cartList')
      if (savedCart) {
        this.setState({cartList: JSON.parse(savedCart)})
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
    }
  }

  saveCartToLocalStorage = (cartList) => {
    try {
      localStorage.setItem('cartList', JSON.stringify(cartList))
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }

  showNotification = () => {
    this.setState({showNotification: true})
    setTimeout(() => {
      this.setState({showNotification: false})
    }, 2000)
  }

  addCartItem = product => {
    this.setState(prevState => {
      const isProductInCart = prevState.cartList.find(
        item => item.id === product.id,
      )

      const currQuantity = product.quantity
      let updatedCartList

      if (isProductInCart) {
        updatedCartList = prevState.cartList.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + currQuantity}
            : item,
        )
      } else {
        updatedCartList = [...prevState.cartList, product]
      }

      this.saveCartToLocalStorage(updatedCartList)
      this.showNotification()
      return {cartList: updatedCartList}
    })
  }

  removeCartItem = product => {
    this.setState(prevState => {
      const updatedCartList = prevState.cartList.filter(item => item.id !== product)
      this.saveCartToLocalStorage(updatedCartList)
      return {cartList: updatedCartList}
    })
  }

  incrementCartItemQuantity = productId => {
    this.setState(prevState => {
      const updatedCartList = prevState.cartList.map(item =>
        item.id === productId ? {...item, quantity: item.quantity + 1} : item,
      )
      this.saveCartToLocalStorage(updatedCartList)
      return {cartList: updatedCartList}
    })
  }

  decrementCartItemQuantity = productId => {
    this.setState(prevState => {
      const updatedCartList = prevState.cartList
        .map(item =>
          item.id === productId ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0)
      this.saveCartToLocalStorage(updatedCartList)
      return {cartList: updatedCartList}
    })
  }

  removeAllCartItems = () => {
    this.saveCartToLocalStorage([])
    this.setState({
      cartList: [],
    })
  }

  render() {
    const {cartList, showNotification} = this.state

    return (
      <>
        {showNotification && (
          <div className="notification-container">
            <p className="notification-message">Product Added to Cart</p>
          </div>
        )}
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            removeCartItem: this.removeCartItem,
            decrementCartItemQuantity: this.decrementCartItemQuantity,
            incrementCartItemQuantity: this.incrementCartItemQuantity,
            removeAllCartItems: this.removeAllCartItems,
          }}
        >
          <Routes>
            <Route exact path="/login" element={<LoginFormWrapper />} />
            <Route exact path="/" element={<ProtectedRoute component={Home} />} />
            <Route exact path="/products" element={<ProtectedRoute component={Products} />} />
            <Route
              exact
              path="/products/:id"
              element={<ProtectedRoute component={ProductItemDetailsWrapper} />}
            />
            <Route exact path="/cart" element={<ProtectedRoute component={Cart} />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </CartContext.Provider>
      </>
    )
  }
}

export default App
