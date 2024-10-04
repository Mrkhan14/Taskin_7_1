import { useEffect, useState } from 'react';

const CartPage = () => {
   const [cart, setCart] = useState([]);
   const [totalSum, setTotalSum] = useState(0);

   // Retrieve cart from localStorage on component mount
   useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('Cart')) || [];
      setCart(storedCart);
      calculateTotalSum(storedCart);
   }, []);

   // Calculate the total sum
   const calculateTotalSum = cartItems => {
      const sum = cartItems.reduce((acc, item) => {
         if (item && item.product && item.product.price && item.quantity) {
            return acc + item.quantity * item.product.price;
         }
         return acc;
      }, 0);
      setTotalSum(sum);
   };

   // Handle add item
   const handleAdd = index => {
      const newCart = [...cart];
      if (newCart[index] && newCart[index].quantity !== undefined) {
         newCart[index].quantity += 1;
         setCart(newCart);
         localStorage.setItem('Cart', JSON.stringify(newCart));
         calculateTotalSum(newCart);
      }
   };

   // Handle remove item
   const handleRemove = index => {
      const newCart = [...cart];
      if (
         newCart[index] &&
         newCart[index].quantity !== undefined &&
         newCart[index].quantity > 0
      ) {
         newCart[index].quantity -= 1;
         setCart(newCart);
         localStorage.setItem('Cart', JSON.stringify(newCart));
         calculateTotalSum(newCart);
      }
   };

   return (
      <div>
         {cart.map((item, index) => (
            <div key={item.product?.id || index}>
               <img
                  src={item.product?.image || ''}
                  alt={item.product?.name || 'Product image'}
               />
               <div>{item.product?.name || 'Product name'}</div>
               <div>{item.product?.description || 'Product description'}</div>

               <div>
                  <button onClick={() => handleRemove(index)}>remove</button>
                  {item.quantity || 0}
                  <button onClick={() => handleAdd(index)}>add</button>
               </div>
            </div>
         ))}
         <div>Total Sum: {totalSum}</div>
      </div>
   );
};

export default CartPage;
