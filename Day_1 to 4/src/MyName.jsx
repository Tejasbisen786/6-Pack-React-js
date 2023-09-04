import React from 'react'

const MyName = ({name,nameForid,income=100}) => {
    
  return (
    <>
      <h1  id={nameForid} className=" bg-slate-600 text-white rounded-lg border px-3 py-4  mx-4 mt-5 text-xl text-center font-semi-bold font-sans ">
        Hey Channel, Welcome To My Guys {name} : ${income}
        </h1>
    </>
      )
}

export default MyName