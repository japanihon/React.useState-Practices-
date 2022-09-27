import React from 'react'

const initialCart = [
    {
    id: 1,
    model: "Iphone 14",
    price: "650 USD",
    brand: "Apple",
    stock: true
},
{
    id: 2,
    model: "Iphone 12",
    price: "450 USD",
    brand: "Apple",
    stock: true
},
{
    id: 3,
    model: "Macbook Pro 14' M1",
    price: "1450 USD",
    brand: "Apple",
    stock: true
}

];



export default function ShoppingCart() {

const [cart, setCart] = React.useState(initialCart);

function deleteProduct(productId) {
  setCart(cart.filter(item => item.id !== productId));
}

function addProduct(newProduct) {
  newProduct.id = Date.now();

  setCart([newProduct,...cart])
}

/* Tenemos que actualizar el estado de cart mediante setCard([]) podemos dejar
un estado vacio para chequear si la funcion trabaja bien */

function updateProduct(editProduct) {
  setCart(cart.map(item =>(
    item.id === editProduct.id
    ? editProduct
    : item
  )))
}

  return (
    <div>
    <h1> Shopping Cart </h1>
    <button onClick={() => addProduct({
      model: "Ipad Pro 11' 2021",
      price: "550 USD"
    })}>
      Add Product
    </button>



    {cart.map(item => (
        <div key={item.id} > 
        <h1> Model: {item.model} </h1>  
        <p> Price: {item.price} </p> 
   <button onClick={() => deleteProduct(item.id)}> 
   Delete Item
    </button>
<button onClick={() => updateProduct({
  id: item.id, model: "Iphone 13",  price: "750 usd"
})}>
  Update Product
</button>
   </div>
    ))}
</div>
  ) 
    }
