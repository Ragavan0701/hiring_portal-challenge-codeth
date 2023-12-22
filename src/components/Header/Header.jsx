// import React from 'react'

// const Header = () => {
//   return (
//     <div className='mt-10 flex flex-col gap-5 items-center justify-center text-white'>
//         <div className="md:flex md:flex-row md:text-3xl ">
//         <h1 className='text-5xl font-bold '>Start your Journey </h1>
//         <h1 className='text-5xl font-bold '> &nbsp;Here </h1>
//         </div>
//         <p className='text-xl'>Get the latest job openings</p>
//     </div>
//   )
// }

// export default Header


import React from 'react';

const Header = () => {
  return (
    <div className='mt-10 flex flex-col gap-5 items-center justify-center text-white'>
      <div className="md:flex md:flex-row md:text-3xl ">
        <h1 className='text-3xl md:text-5xl font-bold text-center'>
          Start your Journey
        </h1>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>
          &nbsp;Here
        </h1>
      </div>
      <p className='text-xl text-center md:text-left'>
        Get the latest job openings
      </p>
    </div>
  );
};

export default Header;
