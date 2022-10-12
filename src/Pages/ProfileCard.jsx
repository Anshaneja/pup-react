import React from 'react';
import './ProfileCard.css';
import profile from "../images/profile.jpeg"

export default function Card() {

  return (

    <div className="">

      <div className="container">

      <div className="box">

      <div className="image">

         <img src={profile} alt="" />

        </div>

        <div className="name_job">Ansh Aneja</div>

        <div className="position">Senior React Developer</div>

        <p> A very Hardworking and Successful Alumni of Punjabi University, Patiala currently in Microsoft USA .</p>

        <ul className="skills">

            <li>Session :  2019-23</li>

            <li>Degree :  B.Tech(CSE)</li>

            <li>Department :  UCOE</li>

        </ul>

        </div>

    </div>

    </div>

  )

} 