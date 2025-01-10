import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";


export const metadata:Metadata = {
 title: 'Shopping cart',
 description: 'Counter',
};

export default function CounterPage() {

  

  return (
    <div className="flex flex-col items-center justify-center text-black w-full h-full">
      <span>Products</span>
      <CartCounter value={20}/>
    </div>
  );
}