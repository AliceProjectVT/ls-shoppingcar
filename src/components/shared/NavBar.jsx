import React from 'react'

const NavBar = () => {
  return (
    <>
      <header className=""  >
        <section className="bg-black h-15 flex" >
          <span className='font-bold ml-5 uppercase p-6 text-gray-300 flex-1 w-10 '>
            <div className=""> Logo</div>
          </span>
          <ol role="list" className='w-20 flex-1 text-gray-300 flex space-x-10 p-6 ml-10 '>
            <li className='liss'>Home</li>
            <li className='liss'>Frutas</li>
            <li className='liss'>Verduras</li>
            <li className='liss'>Abarrotes</li>
          </ol>
          <div className='text-gray-300 p-6 ml-10 w-30 flex-1'>CartWidget</div>

        </section>

      </header>

    </>
  )
}

export default NavBar