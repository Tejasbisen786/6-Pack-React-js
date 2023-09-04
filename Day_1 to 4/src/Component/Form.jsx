import React, { useState } from "react";
const Form = () => {
//   let inputvalue = 0;



  const Chnagehandler = (e) => {
    inputvalue = e.target.value;
    console.log(inputvalue);
  };

     // Increment And Decrement functions 

     const [inputvalue,setInputvalue]=useState(0)
  const increment = () => {
    setInputvalue(inputvalue+1)
  }
  const decrement = () => {
    if(inputvalue>0)
    setInputvalue(inputvalue-1)

  }

  return (
    <>
      <div className="mt-5 flex items-center justify-center ">
        <div className="inputBox flex flex-col gap-2">
          <label htmlFor="Id"> Increment And Decrement</label>
          <input
            className=" border   px-3 py-2"
            type="text"
            name=" Id"
            id=""
            value={inputvalue}
            placeholder="e"
            onChange={Chnagehandler}
            readOnly
          />

          <div className="buttonBox flex flex-row gap-3 ">
            <button
              className="bg-teal-500 px-3 font-bold text-xxl py-2  w-24"
              onClick={increment}
            >
              +{" "}
            </button>

            <button
              className="bg-teal-500 px-3 font-bold text-xxl py-2 w-24 "
              onClick={decrement}
            >
              -{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
