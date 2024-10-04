import React, { useEffect, useState } from 'react';
import StockIcon from '../../assets/icons/StockIcon';
import { categories } from '../../data/categories';
import { products } from '../../data/product';

const updateCart = newCart => {
   localStorage.setItem('Cart', JSON.stringify(newCart));
   const event = new Event('cartUpdated');
   window.dispatchEvent(event);
};

function HomePage() {
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [cart, setCart] = useState([]);

   useEffect(() => {
      const cartFromLocalStorage =
         JSON.parse(localStorage.getItem('Cart')) || [];
      setCart(cartFromLocalStorage);
   }, []);

   const addProduct = product => {
      const newCart = [...cart, product];
      localStorage.setItem('Cart', JSON.stringify(newCart));
      setCart(newCart);
      updateCart(newCart);
   };
   const removeProduct = productId => {
      const newCart = cart.filter(product => product.id !== productId);
      localStorage.setItem('Cart', JSON.stringify(newCart));
      setCart(newCart);
      updateCart(newCart);
   };

   const handleCategoryClick = category => {
      setSelectedCategory(category);
   };

   const filteredProducts = selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products;

   const categorizedProducts = categories.map(category => ({
      category: category.name,
      products: filteredProducts.filter(
         product => product.category === category.name
      ),
   }));

   return (
      <div>
         <ul className='flex justify-between my-8'>
            <li
               className='w-[135px] h-[104px] bg-white border border-bor-color flex justify-center items-center flex-col rounded-xl cursor-pointer hover:border-primary-600'
               onClick={() => handleCategoryClick(null)}
            >
               <StockIcon />
               <span>Акции</span>
            </li>
            {categories.map((category, index) => (
               <li
                  key={index}
                  className='w-[135px] h-[104px] bg-white border border-bor-color flex justify-center items-center flex-col rounded-xl cursor-pointer hover:border-primary-600'
                  onClick={() => handleCategoryClick(category.name)}
               >
                  <img
                     src={category.image}
                     alt={category.name}
                     className='category-icon'
                  />
                  <span>{category.name}</span>
               </li>
            ))}
         </ul>

         <div className='box'>
            {categorizedProducts.map(({ category, products }) => (
               <div key={category}>
                  {products.length > 0 && (
                     <div className='category-name'>
                        <h1 className='text-[40px] font-bold'>{category}</h1>
                     </div>
                  )}
                  <div className='products grid grid-cols-4 gap-4'>
                     {products.map(product => {
                        const isAdded = cart.find(p => p.id === product.id);
                        return (
                           <div
                              key={product.id}
                              className='product bg-white border border-bor-color rounded-xl'
                           >
                              <img
                                 className='w-full'
                                 src={product.image}
                                 alt={product.name}
                              />
                              <div className='p-5'>
                                 <div className='text-lg font-semibold mb-3'>
                                    {product.name}
                                 </div>
                                 <div className='text-sm font-normal mb-3 min-h-10'>
                                    {product.description}
                                 </div>
                                 <div className='flex justify-between items-center'>
                                    <button
                                       className='bg-primary-600 text-white py-3 px-8 rounded-md'
                                       onClick={() => {
                                          if (isAdded) {
                                             removeProduct(product?.id);
                                          } else {
                                             addProduct(product);
                                          }
                                       }}
                                    >
                                       {isAdded ? 'Remove' : 'Add'}
                                    </button>
                                    <span className='text-2xl text-primary-600 font-bold'>
                                       от {product.price} ₽
                                    </span>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default HomePage;
