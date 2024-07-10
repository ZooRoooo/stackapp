import React, { useContext } from 'react'
import { ThemeContext } from '../../../Context/ThemeContext'

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='my-10 flex flex-col items-center gap-5'>
      <h2 className='text-3xl font-bold text-center'>Top 20 Ideas for your startup</h2>
      <h2 className='text-center my-3'>
        <strong className='text-secondary'>Share your Ideas </strong>
        and also explore different new Ideas
      </h2>

      <div className="">
        <select
          onChange={(event) => setTheme(event.target.value)}
          className="select select-bordered border-primary w-full max-w-xs"
        >
          <option disabled>Select a theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="bumblebee">Bumblebee</option>
          <option value="forest">Forest</option>
        </select>
      </div>
    </div>
  )
}

export default Hero
