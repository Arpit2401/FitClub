import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className="join">

        <div className="left-join">
            <hr />
            <div>
                <span className='stroke-text'>Ready to </span>
                <span>level up</span>
            </div>
            <div>
                <span>your body </span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>

        <div className="right-join">
            <form className="email-container">
                <input type="email" name="user_email" placeholder='Enter your email address' />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>

    </div>
  )
}

export default Join