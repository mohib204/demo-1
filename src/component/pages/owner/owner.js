import React from 'react'
import './owner.css'
import SampleImage from './a.jpg'
function owner() {
  return (
    <div className="container">
    <h1>Welcome to My Homepage</h1>
    
    <br />
  <div className="content">

    <div className="image-container">
      <p>Hi, I am the owner of this website. I create amazing designs and code them beautifully. Stay tuned for more updates!</p>
      <img src={SampleImage} alt="Profile" className="circle-image" />
      
    </div>
    
  </div>
</div>
  )
}

export default owner;
