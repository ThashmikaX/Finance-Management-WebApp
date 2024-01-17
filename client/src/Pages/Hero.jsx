import React from 'react'
import './Hero.css'
import card from '../assets/3d.png'
import Green from '../assets/Green.png'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Hero = () => {
  const Navigate = useNavigate()
  return (
    <React.StrictMode>
    <div className='full'>
      <h1 className='title'>Manage Your Finace</h1>
      <div className='Hero'>
        <p className='description'>Lorem ipsum dolor sit amet consectetur. Congue vulputate mauris ut turpis tortor. Est sed posuere facilisi ullamcorper sit risus neque tortor vestibulum. Vel magna orci in nisl. Malesuada nisl placerat tincidunt arcu. Tortor risus quisque proin amet integer. Eu id eget dictumst purus arcu. Senectus neque </p>
        <img  src={card} alt="SLSAC" className='logo'/>
        {/* <button className='goButton'>Click Me</button> */}
        <Button variant="light" className='goButton' onClick={()=>Navigate('/core')}>Let's goo</Button>{' '}

      </div>
      {/* <div className='bgImages'>
        <img src={Green} alt="Green" className='green'/>
        <img src={Green} alt="Green" className='green2'/>
      </div> */}
    </div>
    </React.StrictMode>
  )
}

export default Hero
