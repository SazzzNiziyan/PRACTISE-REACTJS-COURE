import React from "react";
import Innershadow from "./component/innershadow";
import { useState } from "react";


const Counterapp = () => {
  
  const [number, setnumber] = useState(0)

   const increase = () => {
    setnumber(number+1)
   }

   const decrease = () => {
    setnumber(number-1)
   }

   const plus5 = () => {
    setnumber(number+5)
   }

   const minus5 = () => {
    setnumber(number-5)
   }

   const reset = () => {
    setnumber(0)
   }
  

  return (
    <div className="bg-linear-[145deg,var(--color-intial),var(--color-final)] h-screen text-black pt-4 pb-4 grid grid-cols-5 grid-rows-5 gap-4">
      <div className="col-span-3 row-span-3 col-start-2 text-9xl flex justify-center items-center border-4 border-gray-400 rounded-xl relative shadow-(--shadow-neu)">
        <Innershadow />
        <h2 className="select-none">{number}</h2>
      </div>

      <div className="col-start-2 col-span- row-start-4 text-2xl relative overflow-hidden rounded-xl flex justify-center items-center shadow-(--shadow-neu) active:shadow-(--shadow-neu-inset)">
        <Innershadow />
        <button onClick={increase} className="uppercase w-full h-full font-bold select-none" >Increase</button>
      </div>

      <div className="col-start-3 row-start-4 relative rounded-xl flex overflow-hidden justify-center items-center shadow-(--shadow-neu)">
        <img src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full scale-180 rounded-xl w-full object-cover" alt="" srcset="" /><Innershadow /><Innershadow />
      </div>

      <div className="col-start-2 row-start-5 relative rounded-xl flex justify-center items-center shadow-(--shadow-neu) active:shadow-(--shadow-neu-inset)">
        <Innershadow />
        <button onClick={plus5}  className="uppercase font-bold text-3xl w-full h-full select-none">+5</button>
      </div>

      <div className="col-start-3 row-start-5 relative rounded-xl overflow-hidden flex justify-center items-center shadow-(--shadow-neu) active:shadow-(--shadow-neu-inset)">
        <Innershadow />
        <button onClick={reset}  className="uppercase font-bold text-2xl w-full h-full select-none">Reset</button>
      </div>

      <div className="col-start-4 row-start-5 relative rounded-xl flex justify-center items-center shadow-(--shadow-neu) active:shadow-(--shadow-neu-inset)">
        <Innershadow />
        <button onClick={minus5}  className="uppercase font-bold w-full h-full text-3xl select-none">-5</button>
      </div>

      <div className="col-start-4 row-start-4 relative overflow-hidden rounded-xl flex justify-center items-center shadow-(--shadow-neu) active:shadow-(--shadow-neu-inset)">
        <Innershadow />
        <button onClick={decrease}  className="uppercase font-bold text-2xl w-full h-full select-none">decrease</button>

      </div>
    </div>
  );
};

export default Counterapp;
