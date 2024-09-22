# Sneakers Shop App
> 
# Features

### User -
- Sign in \ Register \ Sign out
- User authentication with jsonwebtoken
- Update profile info
- Reset password option
- Update shipping info
- Filter products by price\color\brand\size
- Sort produdcts by top rated\lowest price\highest price
- Display products in grid view or list view
- Add products to cart && Purchase products
- Remove products from the cart
- View shopping history
- Rating products after purchase
- Top picks products are generated depends on user favorite products

### Admin -
- Add new product to shop page
- Edit an exist product


# Built with

### Client - 
- React.js
- Apollo Client
- React Redux
- Styled Components
- Material UI
### Server - 
- Node.js
- Express
- GraphQL 
- MongoDB



## Home page
![screenshot](https://github.com/amitshuu/sneakers-shop/blob/master/uploads/home_page.png)

## Products
![screenshot](https://github.com/amitshuu/sneakers-shop/blob/master/uploads/Products.png)

## User cart && orders
![screehnshot](https://github.com/amitshuu/sneakers-shop/blob/master/uploads/cart_orders.png)

## Admin
![screehnshot](https://github.com/amitshuu/sneakers-shop/blob/master/uploads/Admin.png)


Create a .env file in the root and add the following

```
PORT = 5000
MONGO_URL = YOUR MONGODB URL
JWT_SECRET = ANY JWT SECRET CODE
```

### Install Dependencies (client & server)

```
npm install
cd client
npm install
```

### Run
```
Run frontend (:3000) & backend (:5000)
npm run client
npm run server
```


