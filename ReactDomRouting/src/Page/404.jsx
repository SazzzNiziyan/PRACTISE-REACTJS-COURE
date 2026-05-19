import React from "react";
import { useNavigate } from "react-router-dom";

export function ErrorSection7() {
  const navigate = useNavigate();

  return (
      <>
      <div className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black text-9xl text-amber-50">
        <h1>404</h1>
      </div>
       <button onClick={()=>navigate("/home")} className='border bg-amber-400 px-10 py-4 rounded m-4 active:scale-95' >Back To Home</button>
       </>
  );
}

export default ErrorSection7;