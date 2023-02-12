import React from 'react'
import Delete from '../img/Delete.png'
import Edit from '../img/Edit.png'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://www.shutterstock.com/image-illustration/cute-very-tired-girl-drawn-260nw-2085823726.jpg" alt='' />
        <div className="user">
          <img src="https://www.shutterstock.com/image-illustration/cute-very-tired-girl-drawn-260nw-2085823726.jpg" alt='' />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>vjhvhv</h1>
        <p>Calamity Queen was also once part of the MADS group, likely placing him in the research facility as well. The theory essentially claims that Kaido and the Calamities met by happenstance in this research lab on Punk Hazard, with their future captain breaking the group out. He then used flame clouds to lift up Onigashima, which used to be the center of Punk Hazard, and fly it to Wano, where it became his base of operations.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
