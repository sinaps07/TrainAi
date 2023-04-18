import React, { useState } from "react";
import CountUp from 'react-countup';
import List from "./components/List";


const App = () => {

  const [train, setTrain] = useState(false)

  const handleClick = () => {
    setTrain(!train)
  }

  return (
    !train ?
      <div>
        <div className='h-[100vh] bg-[#171614] flex items-center justify-center'>
          <div>
            <p className='text-9xl text-white'>Unleash your</p>
            <p className='text-9xl text-orange-600'>Potential</p>
            <button onClick={handleClick} className='bg-gradient-to-r from-orange-600 to-yellow-500 text-white text-xl px-8 rounded-md py-2 mt-8 scale-1 hover:scale-125 hover:translate hover:delay-100 hover:transition-all transition-all delay-100'>Train Now</button>
          </div>
          <img src='./images/hero.jpeg' />
        </div>
        <div className='bg-[#171614] flex justify-around'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-4xl text-white'>Total Exercises</p>
            <CountUp start={0} end={500} enableScrollSpy={true} scrollSpyOnce={true} className='text-3xl text-slate-400'></CountUp>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-4xl text-white'>Total Hustlers</p>
            <CountUp start={0} end={1500} enableScrollSpy={true} scrollSpyOnce={true} className='text-3xl text-slate-400'></CountUp>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-4xl text-white'>Total Trainees</p>
            <CountUp start={0} end={1200} enableScrollSpy={true} scrollSpyOnce={true} className='text-3xl text-slate-400'></CountUp>
          </div>
        </div>
        <div className='bg-[#171614] flex pt-32 justify-center px-12 pb-16'>
          <img className='rounded-lg grayscale hover:grayscale-0 scale-1 hover:scale-105 hover:translate hover:delay-200 hover:transition-all transition-all delay-200 hover:rotate-2' src='./images/ai.png'></img>
          <div className='ms-12 '>
            <h1 className='text-6xl text-white'><span className='text-orange-600'>About</span> Us</h1>
            <p className='text-white mt-4 text-lg'>If you decide to not update for now, you can leave the comments there.

              They will not affect your build, and will serve as a reminder to revisit upgrading these dependencies later. They also allow you to glance at how behind the dependencies are, which is a way to estimate the technical debt of the project regarding the dependencies upgrades.

              If you want to delete these comments, it’s possible too, and it’s safe. Running the refreshVersions task will bring them back (plus any newer available update).</p>
          </div>
        </div>
        <div className='pb-4 pt-16 bg-[#171614] flex flex-col items-center'>
          <button onClick={handleClick} className='bg-gradient-to-r from-orange-600 to-yellow-500 text-white text-xl px-8 rounded-md py-2 mt-8 scale-1 hover:scale-125 hover:translate hover:delay-100 hover:transition-all transition-all delay-100 animate-bounce hover:animate-none'>Train Now</button>

          <p className='text-white mt-32'>Made with ❤️ by <span className='text-orange-600'>Fitbloom Team</span></p>
        </div>
      </div> : <List />
  )
}

export default App;