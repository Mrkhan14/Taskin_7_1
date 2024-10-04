import { useContext } from 'react';
import CartCard from '../../components/CartCard';
import { CartContext } from './../../context/CartContext'


const CartPage = () => {
   const { cart } = useContext( CartContext )

   return (
      <div className='mt-5 w-[80%] m-auto'>
         {cart.length !== 0 ? cart.map(item => <CartCard key={item.id} {...item}></CartCard> ): <div className='bg-primary-600  text-white text-center p-4'>Malumot yoq</div>}

         {/* {cart.length !== 0 ? (
         <div className='flex justify-between'>
            <div className='text-2xl text-primary-600 font-bold'>
               Итого:  ₽
            </div>
            <button className='bg-primary-600 text-white py-3 px-8 rounded-md'>
               Оформить заказ
            </button>
         </div>
         ): ''} */}
      </div>
   );
};

export default CartPage;
