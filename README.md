# Nxt Trendz - E-Commerce Application

Nxt Trendz is a modern React-based e-commerce application that allows users to browse products, view exclusive prime deals, filter items, manage a shopping cart, and make purchases with an intuitive user interface.

## Features

- **User Authentication**: Secure login system with JWT token-based authentication
- **Product Browsing**: Browse through a wide variety of products with detailed information
- **Product Filtering**: Filter products by category, price range, and ratings
- **Prime Deals**: Exclusive deals section for prime members
- **Shopping Cart**: Add/remove items, manage quantities, and view cart summary
- **Product Details**: View comprehensive product information with similar product recommendations
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop and mobile devices
- **Context API State Management**: Efficient state management for cart operations

## Tech Stack

- **Frontend**: React.js with Hooks and Context API
- **Routing**: React Router v6
- **Styling**: CSS3
- **HTTP Client**: Fetch API
- **State Management**: React Context API
- **Icons**: React Icons (Bootstrap)
- **Loading Spinner**: react-loader-spinner
- **Authentication**: JWT tokens with js-cookie

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SivaRamaChakradhar/NxtTrendz/
cd nxt-trendz
```

2. Install dependencies:
```bash
npm install
```

3. Install additional packages:
```bash
npm install js-cookie react-loader-spinner react-icons --legacy-peer-deps
```

## Available Scripts

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for best performance.

## Project Structure

```
src/
├── components/
│   ├── Header/                    # Navigation header with logout
│   ├── Home/                      # Homepage with hero section
│   ├── LoginForm/                 # User authentication
│   ├── Products/                  # Products listing page
│   ├── ProductCard/               # Individual product card
│   ├── ProductItemDetails/        # Detailed product view
│   ├── Cart/                      # Shopping cart page
│   ├── CartItem/                  # Individual cart item
│   ├── CartSummary/               # Cart total and checkout
│   ├── AllProductsSection/        # All products with filters
│   ├── PrimeDealsSection/         # Prime exclusive deals
│   ├── FiltersGroup/              # Product filtering options
│   ├── ProtectedRoute/            # Protected route wrapper
│   ├── NotFound/                  # 404 page
│   └── EmptyCartView/             # Empty cart message
├── context/
│   └── CartContext.js             # Cart state management
├── App.js                         # Main app component
├── App.css                        # App styles
├── index.js                       # Entry point
└── index.css                      # Global styles
```

## User Credentials

### Prime User
- **Username:** rahul
- **Password:** rahul@2021

### Non-Prime User
- **Username:** raja
- **Password:** raja@2021

## Key Components

### Header
Navigation bar with logo, links to different sections, and logout functionality.

### Products
Main products page with filtering options:
- Category filters (Clothing, Electronics, Appliances, Grocery, Toys)
- Price range filters
- Rating filters
- Sort options (Price High to Low, Price Low to High)

### Cart Management
- Add/remove items from cart
- Increment/decrement quantities
- View cart summary with total price
- Clear entire cart

### Product Details
- Comprehensive product information
- Brand and availability details
- Customer ratings and reviews
- Similar products recommendations
- Add to cart with quantity selection

## Authentication Flow

1. User logs in with credentials
2. Server returns JWT token
3. Token is stored in cookies
4. Protected routes check for valid token
5. Unauthorized users are redirected to login

## API Endpoints

- `POST https://apis.ccbp.in/login` - User login
- `GET https://apis.ccbp.in/products` - Get all products
- `GET https://apis.ccbp.in/products/:id` - Get product details
- `GET https://apis.ccbp.in/prime-deals` - Get prime exclusive deals

## State Management

The app uses React Context API for managing cart state globally. Cart operations include:
- Add cart item
- Remove cart item
- Increment/decrement cart item quantity
- Remove all cart items

## Future Enhancements

- Payment gateway integration
- User profile management
- Order history
- Wishlist functionality
- Product reviews and ratings
- Search functionality
- Discount coupon codes
- Multiple payment methods

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please contact the development team or create an issue in the repository.

---

**Happy Shopping with Nxt Trendz!** 🛍️
