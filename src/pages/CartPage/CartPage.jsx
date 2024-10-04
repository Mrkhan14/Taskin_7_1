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
         if (item && item && item.price && item.quantity) {
            return acc + item.quantity * item.price;
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
            <div key={item.id || index}>
               <img src={item.image || ''} alt={item.name || 'Product image'} />
               <div>{item.name || 'Product name'}</div>
               <div>{item.description || 'Product description'}</div>

               <div>
                  <button
                     className='p-2 bg-primary-600 m-2'
                     onClick={() => handleRemove(index)}
                  >
                     -
                  </button>
                  {item.quantity || 0}
                  <button
                     className='p-2 bg-primary-600 m-2'
                     onClick={() => handleAdd(index)}
                  >
                     +
                  </button>
               </div>
            </div>
         ))}
         <div>Total Sum: {totalSum}</div>
      </div>
   );
};

export default CartPage;
