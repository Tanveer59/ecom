import { useDispatch, useSelector } from "react-redux";
import Components from "./product-component";
import { jsonObj } from "./productdm";
import { motion } from "framer-motion";
import {Product} from './Product'

const sub = [
  "Hoodies", "Polo Shirts", "Jackets", "Shorts", "Tracksuits", 
  "Trousers", "Sweat Shirts", "T-Shirts", "Varsity Jackets", 
  "Cycling Wear", "Gloves", "Footballs", "Footwears",
  "Fashion Jackets Men", "Fashion Jackets Women", "Motorbike Jackets & Pants",
  "Leather Vest", "Leather Coat", "Uniforms",
  "Denim Jackets", "Denim Pants", "Denim Skirts", "Customized",
  "Wallets", "Hand Bags", "Saddle Bags", "Belts", "Laptop Bags",
  "Dressing Shoes", "Casual Shoes", "Sneakers Shoes", "Sports Shoes", 
  "Long Boots", "Dancing Shoes", "Sandals", "Night Slippers",
  "SR#", "Domain", "Hosting", "Business Emails", "Google Analytics Account", 
  "Mobile Friendly", "Google Business Profile", "Google Search Console"
];

export default function ProductCat() {
  // Get the current product category value from the Redux store
  const ProductVal = useSelector((state: any) => state.ChangeContent.value);

  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-[4.6rem] overflow-y-auto flex flex-wrap gap-y-8 justify-center md:justify-between items-center pt-4 mx-2 md:mx-0 lg:mx-4 xl:mx-12 ">
      <h1 className="bg-red-500 text-2xl">{ProductVal}</h1>
        {ProductVal === 'Hoodies' && (
          
          <div className="w-full flex flex-wrap gap-4">
            <img src="/banner.jpg" className="w-full"/>
            {jsonObj.map((productItem, productIndex) => (
                <Components product={productItem} key={productIndex} />
            ))}
          </div>
        )}
        {ProductVal === 'Polo Shirts' && (
          <div className="w-full flex flex-wrap gap-4">
            {Product.map((productItem, productIndex) => (
                <Components product={productItem} key={productIndex}/>
            ))}
          </div>
        )}
    </div>
  );
}
