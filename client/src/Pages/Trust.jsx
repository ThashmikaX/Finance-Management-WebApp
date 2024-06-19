import React from 'react'
import './Trust.css'
import Card from "../Components/Card";
import girl1 from '../assets/girl-1.png'
import boy1 from '../assets/boy-1.png'
import boy2 from '../assets/boy-2.png'


const Trust = () => {
    return (
        <div className="tMainDiv" >

            {/*Div 1 up side */}

            <div className="tDiv1">
                <h1 className="topic1">
                    <span className='silver-gradient'>Trust is </span>
                    <span className='green-gradient'>Everything</span>
                </h1>
            <text className="textDis">We're always looking for ways to improve our finance tracking app and your feedback is invaluable. Share your honest review below to help others make informed decisions and inspire them on their financial journey.

We appreciate your time and insights!</text>

           </div>
           <div className="content-div">
              <div className="card">     
                <Card className="grayGradient trust_grayGradient">
                    <div className="tBox1_up">
                        <img src={boy1} alt="SLSAC" className='t_logo'/>
                        <text className="t_Name">William Thompson</text>
                    </div>
                    <div className="tBox1_Down">
                        <text className="box_Dis">Before using this app, my finances were a complete mess! Now, I can easily track income and expenses, set realistic budgets, and see exactly where my money goes. I love the visual charts and reports, they make understanding my spending habits so much easier.</text>
                    </div>
                </Card>
              </div>

               <div className="card">
               <Card className="grayGradient trust_grayGradient">
                    <div className="tBox1_up">

                    <img src={girl1} alt="SLSAC" className='t_logo'/>
                    <text className="t_Name">Amelia Garcia</text>

                    </div>

                    <div className="tBox1_Down">
                        <text className="box_Dis">As a freelancer, keeping track of my income and expenses is crucial. This app has been a game-changer! I can easily categorize income from different sources and track project expenses. The goal-setting features are fantastic, keeping me motivated and on track to achieve my financial aspirations.</text>
                    </div>
                
                    
                </Card>
              </div>

              <div className="card">
                    <Card className="grayGradient trust_grayGradient">
                                            <div className="tBox1_up">
                    <img src={boy2} alt="SLSAC" className='t_logo'/>
                    <text className="t_Name">Daniel Lee</text>
                    </div>
                    <div className="tBox1_Down">
                        <text className="box_Dis">I was hesitant to try another finance app after being disappointed with several in the past. However, I'm glad I gave this one a chance! The interface is clean and intuitive, making it easy to add transactions and view reports.</text>
                    </div>
                     </Card>
              </div>
           </div>
        </div>
    )
  }
  
  export default Trust;
