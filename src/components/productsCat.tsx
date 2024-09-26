import { useSelector } from "react-redux";
import Components from "./product-component";
import { jsonObj } from "./productdm";
import {Product} from './Product'
import Image from "next/image";


export default function ProductCat() {
  // Get the current product category value from the Redux store
  const ProductVal = useSelector((state: any) => state.ChangeContent.value);

  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-[4.6rem] overflow-y-auto flex flex-wrap gap-y-8 justify-center md:justify-between items-center pt-4 mx-2 md:mx-0 lg:mx-4 xl:mx-12 ">
      <h1 className="bg-red-500 text-2xl">{ProductVal}</h1>
        {ProductVal === 'Hoodies' && (
          
          <div className="w-full flex flex-wrap gap-4">
            <Image src="/banner.jpg" className="w-full" alt="banner"/>
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
