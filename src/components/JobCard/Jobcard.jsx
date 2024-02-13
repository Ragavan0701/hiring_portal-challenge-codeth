
import React from 'react';
import dayjs from 'dayjs';

const Jobcard = (props) => {
  const skills = ["Javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diff = date1.diff(props.postedOn, 'day');

  return (
    <div className='mx-4 mb-4 md:mx-40'>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-center md:text-left'>{props.title} - {props.company}</h1>
          <p className='text-xs md:text-sm lg:text-base text-center md:text-left'>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
          <div className='flex items-center gap-2 flex-wrap justify-center md:justify-start'>
            {skills.map((skill) => (
              <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black text-xs md:text-sm lg:text-base">{skill}</p>
            ))}
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center mt-3 md:mt-0 gap-4'>
          <p className='text-gray-500 text-xs md:text-sm lg:text-base'>Posted {diff > 1 ? `${diff} days` : `${diff} day`} ago</p>
          <a href={props.job_link} target="_blank" rel="noopener noreferrer">
            <button className='text-blue-500 border border-blue-500 px-6 py-2 rounded-md text-xs md:text-sm lg:text-base'>Apply</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
