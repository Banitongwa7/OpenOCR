import React from 'react'
import Image from "next/image";

const Resultat = ({ data }) => {


  return (
   <div className='container'>
    <div className="flex flex-col rounded-lg bg-neutral-700 md:flex-row w-[80%] m-auto mt-24">
     <div>
      <Image
          src="https://picsum.photos/id/159/200/300"
          alt="Album"
          className='rounded-s-lg'
          width={500}
          height={300}
        />
     </div>
      <div className="flex flex-col justify-start p-6 w-full">
        <h5 className="mb-2 text-xl font-medium text-neutral-50">
          Voici le résultat de l'extraction
        </h5>
        <p className="mb-3 text-sm text-neutral-400">
          {data.text}
        </p>
      </div>
    </div>
   </div>
  )
}

export default Resultat