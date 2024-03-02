import React from 'react'
import './Trust.css'
import Card from "../Components/card";
import girl1 from '../Assets/girl-1.png'
import boy1 from '../Assets/boy-1.png'
import boy2 from '../Assets/boy-2.png'


const Trust = () => {
    return (
        <div className="tMainDiv" >

            {/*Div 1 up side */}

            <div className="tDiv1">
            <h1 className="topic1">Trust is Everything</h1>
            <text className="textDis">We're always looking for ways to improve our finance tracking app and your feedback is invaluable. Share your honest review below to help others make informed decisions and inspire them on their financial journey.

We appreciate your time and insights!</text>

            {/* 
             <div className="tDiv1_Down">
                <text className="textDis">Lorem ipsum dolor sit amet consectetur. Congue vulputate mauris ut turpis tortor. Est sed posuere facilisi ullamcorper sit risus neque tortor vestibulum. Vel magna orci in nisl. Malesuada nisl placerat tincidunt arcu. Tortor risus quisq</text>
             </div>*/}
           </div>

           {/*Div 2 down side */}

           <div className="tDiv2">
            
              <div className="tBox1">
                
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

               <div className="tBox2">
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

              <div className="tBox3">
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
