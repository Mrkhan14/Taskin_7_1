import React, { useEffect, useState } from 'react';
import StockIcon from '../../assets/icons/StockIcon';
import { categories } from '../../data/categories';
import { products } from '../../data/product';
import ProductCard from '../../components/ProductCard';


function HomePage() {
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [cart, setCart] = useState([]);

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
         <ul className='flex justify-between my-8 max-lg:flex-wrap'>
            <li
               className='w-[135px] h-[104px] max-md:w-full max-lg:w-2/4 max-lg:mb-5  bg-white border border-bor-color flex justify-center items-center flex-col rounded-xl cursor-pointer hover:border-primary-600'
               onClick={() => handleCategoryClick(null)}
            >
               <StockIcon />
               <span>Акции</span>
            </li>
            {categories.map((category, index) => (
               <li
                  key={index}
                  className='w-[135px] h-[104px] max-md:w-full max-lg:w-2/4 max-lg:mb-5  bg-white border border-bor-color flex justify-center items-center flex-col rounded-xl cursor-pointer hover:border-primary-600'
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
                  <div className='products grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3'>
                     {products.map(product => {
                        return (
                           <ProductCard key={product.id} {...product}></ProductCard>
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
