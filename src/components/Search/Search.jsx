
// // import React, { useState } from 'react';

// // const Search = (props) => {
// //   const [jobcri, setJobcri] = useState({
// //     title: '',
// //     location: '',
// //     experience: '',
// //     type: '',
// //   });

// //   const handle = (e) => {
// //     setJobcri((prevState) => ({
// //       ...prevState,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const search = async () => {
// //     await props.fetchJobscustom(jobcri);
// //   };

// //   return (
// //     <div className='flex gap-4 my-10 justify-center px-10'>
// //       <select
// //         onChange={handle}
// //         name='title'
// //         value={jobcri.title}
// //         className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
// //       >
// //         <option value='' disabled hidden selected>
// //           Job Role
// //         </option>
// //         <option value='Android Developer'>Android Developer</option>
// //         <option value='Frontend Developer'>Frontend Developer</option>
// //         <option value='Backend Developer'>Backend Developer</option>
// //         <option value='Fullstack Developer'>Fullstack Developer</option>
// //       </select>
// //       <select
// //         onChange={handle}
// //         name='type'
// //         value={jobcri.type}
// //         className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
// //       >
// //         <option value='' disabled hidden selected>
// //           Job Type
// //         </option>
// //         <option value='Part Time'>Part Time</option>
// //         <option value='Full Time'>Full Time</option>
// //       </select>
// //       <select
// //         onChange={handle}
// //         name='location'
// //         value={jobcri.location}
// //         className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
// //       >
// //         <option value='' disabled hidden selected>
// //           Location
// //         </option>
// //         <option value='Remote'>Remote</option>
// //         <option value='In-Office'>In-Office</option>
// //         <option value='Hybrid'>Hybrid</option>
// //       </select>
// //       <select
// //         onChange={handle}
// //         name='experience'
// //         value={jobcri.experience}
// //         className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
// //       >
// //         <option value='' disabled hidden selected>
// //           Experience
// //         </option>
// //         <option value='Fresher'>Fresher</option>
// //         <option value='Junior Level'>Junior Level</option>
// //         <option value='Senior Level'>Senior Level</option>
// //       </select>
// //       <button
// //         onClick={search}
// //         className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'
// //       >
// //         Search
// //       </button>
// //     </div>
// //   );
// // };

// // export default Search;

// import React, { useState } from 'react';

// const Search = (props) => {
//   const [jobcri, setJobcri] = useState({
//     title: '',
//     location: '',
//     experience: '',
//     type: '',
//   });

//   const handle = (e) => {
//     setJobcri((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const search = async () => {
//     await props.fetchJobscustom(jobcri);
//   };

//   return (
//     <div className='flex flex-col md:flex-row gap-4 my-10 justify-center px-10'>
//       <select
//         onChange={handle}
//         name='title'
//         value={jobcri.title}
//         className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
//       >
//         <option value='' disabled hidden selected>
//           Job Role
//         </option>
//         <option value='Android Developer'>Android Developer</option>
//         <option value='Frontend Developer'>Frontend Developer</option>
//         <option value='Backend Developer'>Backend Developer</option>
//         <option value='Fullstack Developer'>Fullstack Developer</option>
//       </select>
//       <select
//         onChange={handle}
//         name='type'
//         value={jobcri.type}
//         className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
//       >
//         <option value='' disabled hidden selected>
//           Job Type
//         </option>
//         <option value='Part Time'>Part Time</option>
//         <option value='Full Time'>Full Time</option>
//       </select>
//       <select
//         onChange={handle}
//         name='location'
//         value={jobcri.location}
//         className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
//       >
//         <option value='' disabled hidden selected>
//           Location
//         </option>
//         <option value='Remote'>Remote</option>
//         <option value='In-Office'>In-Office</option>
//         <option value='Hybrid'>Hybrid</option>
//       </select>
//       <select
//         onChange={handle}
//         name='experience'
//         value={jobcri.experience}
//         className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
//       >
//         <option value='' disabled hidden selected>
//           Experience
//         </option>
//         <option value='Fresher'>Fresher</option>
//         <option value='Junior Level'>Junior Level</option>
//         <option value='Senior Level'>Senior Level</option>
//       </select>
//       <button
//         onClick={search}
//         className='w-full md:w-64 bg-blue-500 text-white font-bold py-3 rounded-md'
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default Search;


import React, { useState } from 'react';

const Search = (props) => {
  const [jobcri, setJobcri] = useState({
    title: '',
    location: '',
    experience: '',
    type: '',
  });

  const handle = (e) => {
    setJobcri((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const search = async () => {
    await props.fetchJobscustom(jobcri);
  };

  return (
    <div className='flex flex-col md:flex-row gap-4 my-10 justify-center px-6 md:px-10'>
      <select
        onChange={handle}
        name='title'
        value={jobcri.title}
        className='w-full md:w-40 lg:w-64 py-2 md:py-3 pl-2 md:pl-4 bg-zinc-200 text-sm md:text-base font-semibold rounded-md'
      >
        <option value='' disabled hidden selected>
          Job Role
        </option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Frontend Developer'>Frontend Developer</option>
        <option value='Backend Developer'>Backend Developer</option>
        <option value='Fullstack Developer'>Fullstack Developer</option>
      </select>
      <select
        onChange={handle}
        name='type'
        value={jobcri.type}
        className='w-full md:w-40 lg:w-64 py-2 md:py-3 pl-2 md:pl-4 bg-zinc-200 text-sm md:text-base font-semibold rounded-md'
      >
        <option value='' disabled hidden selected>
          Job Type
        </option>
        <option value='Part Time'>Part Time</option>
        <option value='Full Time'>Full Time</option>
      </select>
      <select
        onChange={handle}
        name='location'
        value={jobcri.location}
        className='w-full md:w-40 lg:w-64 py-2 md:py-3 pl-2 md:pl-4 bg-zinc-200 text-sm md:text-base font-semibold rounded-md'
      >
        <option value='' disabled hidden selected>
          Location
        </option>
        <option value='Remote'>Remote</option>
        <option value='In-Office'>In-Office</option>
        <option value='Hybrid'>Hybrid</option>
      </select>
      <select
        onChange={handle}
        name='experience'
        value={jobcri.experience}
        className='w-full md:w-40 lg:w-64 py-2 md:py-3 pl-2 md:pl-4 bg-zinc-200 text-sm md:text-base font-semibold rounded-md'
      >
        <option value='' disabled hidden selected>
          Experience
        </option>
        <option value='Fresher'>Fresher</option>
        <option value='Junior Level'>Junior Level</option>
        <option value='Senior Level'>Senior Level</option>
      </select>
      <button
        onClick={search}
        className='w-full md:w-40 lg:w-64 bg-blue-500 text-white font-bold py-2 md:py-3 rounded-md text-sm md:text-base'
      >
        Search
      </button>
    </div>
  );
};

export default Search;

