import React, { useState, useEffect } from 'react';

function Projects() {
  const [count, setCount] = useState(0);
  const MAX_COUNT = 389; // set a maximum count limit

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count >= MAX_COUNT) {
        clearInterval(intervalId);
      } else {
        setCount(prevCount => prevCount + 1);
      }
    }, 10);

    

    return () => clearInterval(intervalId);
  }, [count, MAX_COUNT]);

  return (
    
    <div className='  text-white font-extrabold p-5 text-lg '>

<h1 className='text-3xl text-green-400'>Our Results</h1>
<p className=' font-serif text-sm py-2'>HOW ABOUT SOME FUN FACTS ABOUT OUR COMPANY</p>


<div className=' sm:flex lg:flex md:flex space-x-2 max-sm:space-x-0 max-sm:space-y-2 max-sm:pl-16 justify-between'>


<div className='border w-3/4' >
<p>{count}</p>
<h1>YEARS</h1>
</div>

<div className='border w-3/4' >
<p>{count}</p>
<h1>PROJECT DONE</h1>
</div>

<div className='border w-3/4' >
<p>{count}</p>
<h1>CLIENTS</h1>
</div>

<div className='border w-3/4 ' >
<p>{count}</p>
<h1>Regions covered</h1>
</div>

</div>

    </div>
  );
}

export default Projects;
