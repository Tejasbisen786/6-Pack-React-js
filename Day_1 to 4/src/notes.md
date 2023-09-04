# Props and Default Destructing pasing value within a component


****************
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
*********************

**********************
- <MyName name={"Sachin"} nameForid='div1' income={300}/>
  <MyName name={"Virat"} nameForid='div2' income={500}/>
  <MyName name={"Rohit"} nameForid='div3' />
*****************
