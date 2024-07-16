import React from 'react'
import cardimg from "../../assets/cardimg.png"
import './Sectiontwo.css'
import { FaArrowRight } from "react-icons/fa6";


const Sectiontwo = () => {
    let data =[
        {
            img:cardimg,
            title:'Top Ten Stock Option Mistake Employees Make',
            description:'Write an amazing description in this dedicated card section. Each word counts.',
        },
        {
            img:cardimg,
            title:'Top Ten Stock Option Mistake Employees Make',
            description:'Write an amazing description in this dedicated card section. Each word counts.',
        },
        {
            img:cardimg,
            title:'Top Ten Stock Option Mistake Employees Make',
            description:'Write an amazing description in this dedicated card section. Each word counts.',
        },
        {
            img:cardimg,
            title:'Top Ten Stock Option Mistake Employees Make',
            description:'Write an amazing description in this dedicated card section. Each word counts.',
        },
        {
            img:cardimg,
            title:'Top Ten Stock Option Mistake Employees Make',
            description:'Write an amazing description in this dedicated card section. Each word counts.',
            description:'Write an amazing description in this dedicated card section. Each word counts.',
        },
        {
            img:cardimg,
            title:'Top Ten Stock Option Mistake Employees Make',
            description:'Write an amazing description in this dedicated card section. Each word counts.',
        },
    ]
  return (
    <div className='section-two'>
        
        <div className="header">
            <h1>Post</h1>
            <h2>Latest Tax News & Updates</h2>
            <h3>Ssquare offers free webinars & conducts live events to help the community learn more about taxes.  Please join us in our next FREE webinar.</h3>
       
      <div className="card">
        {data.map((item) => {
          return (
            <div className="card-container">
              <img src={item.img} alt="" />
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <button>See more &nbsp; <FaArrowRight /></button>
            </div>
          )
        })}    
      </div>
      <button>Load more</button>
      </div>
    </div>
  )
}

export default Sectiontwo
