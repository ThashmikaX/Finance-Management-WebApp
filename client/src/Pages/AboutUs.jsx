import React from 'react'
import './AboutUs.css'
import Card from "../Components/card";
import card1 from '../assets/Facebook.png'
import card2 from '../assets/Sudesh.png'
import card3 from '../assets/Behance.png'

const AboutUs = () => {
  return (
      <div className="aboutCon1">
  
        <div className="aboutDiv1">
     
            <h1 className="here_1" >So,</h1><h1 className="here_1">Here We're</h1>

            <p className="DescriptionAbout_1">Lorem ipsum dolor sit amet consectetur. Congue vulputate mauris ut turpis tortor. Est sed posuere facilisi ullamcorper sit risus neque tortor vestibulum. Vel magna orci in nisl. Malesuada nisl placerat tincidunt arcu. Tortor risus quisq</p>
        </div>


        <div className="aboutDiv2">
          <div className="box_1">
            <Card className="grayGradient">
            
            <div className="box1_Up">
              
              <div className="box_1_up_left">
              <img src={card2} alt="SLSAC" className='logo_1'/>
              </div>

              <div className="box_1_up_right">

                <div className="box_1_up_right_1">
                  <text className="createrNameinAbout">Sudesh Thashmika</text>
                </div>

                <div className="box_1_up_right_2">
                <img  src={card1} alt="SLSAC" className='logo_2'/>
                <img  src={card3} alt="SLSAC" className='logo_2'/>
                </div>

              </div>
                
            </div>

            <div className="box1_Down">
            <text className="CreaterDescription">Designer Developer<br/> Computer Engineering Undergraduate</text>
            </div>
            </Card>
          </div>
          

          <div className="box_2">
          <Card className="grayGradient">
            
            <div className="box1_Up">
              
              <div className="box_1_up_left">
              <img src={card2} alt="SLSAC" className='logo_1'/>
              </div>

              <div className="box_1_up_right">

                <div className="box_1_up_right_1">
                  <text className="createrNameinAbout">Sudesh Thashmika</text>
                </div>

                <div className="box_1_up_right_2">
                <img  src={card1} alt="SLSAC" className='logo_2'/>
                <img  src={card3} alt="SLSAC" className='logo_2'/>
                </div>

              </div>
                
            </div>

            <div className="box1_Down">
            <text className="CreaterDescription">Designer Developer<br/> Computer Engineering Undergraduate</text>
            </div>
            </Card>
          </div>
          
        </div>
      </div>

  )
}

export default AboutUs;
