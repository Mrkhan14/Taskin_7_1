import { useEffect, useState } from 'react';

const CartPage = () => {
   const [cart, setCart] = useState([]);
   const [totalSum, setTotalSum] = useState(0);

   useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('Cart')) || [];
      setCart(storedCart);
   }, []);

   // const removeObjectById = id => {
   //    const storedData = localStorage.getItem('Cart');
   //    if (storedData) {
   //       const dataArray = JSON.parse(storedData);
   //       const updatedArray = dataArray.filter(item => item.id !== id);
   //       localStorage.setItem('Cart', JSON.stringify(updatedArray));
   //       setCart(dataArray);
   //    } else {
   //       console.log('No data found in localStorage for the specified key.');
   //    }
   // };

   return (
      <div className='mt-5 w-[80%] m-auto'>
         {cart.map((item, index) => (
            <div
               className='flex bg-white items-center p-5 mb-6 rounded-xl'
               key={item.id || index}
            >
               <img
                  className='w-28'
                  src={item.image || ''}
                  alt={item.name || 'Product image'}
               />
               <div className='flex-1 ml-8'>
                  <div className='text-2xl font-bold'>
                     {item.name || 'Product name'}
                  </div>
                  <div>{item.description || 'Product description'}</div>
               </div>

               <div>
                  <button
                     className='p-2 bg-primary-600 m-2 text-white rounded-lg'
                     onClick={() => handleMinus(index)}
                  >
                     -
                  </button>

                  {item.quantity || 0}

                  <button
                     className='p-2 bg-primary-600 m-2 text-white rounded-lg'
                     onClick={() => handlePlus(index)}
                  >
                     +
                  </button>
               </div>

               <span className='ml-8 text-2xl text-primary-600 font-bold'>
                  {item.price} ₽
               </span>

               {/* <button
                  className='ml-5'
                  onClick={() => removeObjectById(item.id)}
               >
                  X
               </button> */}
            </div>
         ))}

         <div className='flex justify-between'>
            <div className='text-2xl text-primary-600 font-bold'>
               Итого: {totalSum} ₽
            </div>
            <button className='bg-primary-600 text-white py-3 px-8 rounded-md'>
               Оформить заказ
            </button>
         </div>
      </div>
   );
};

export default CartPage;
