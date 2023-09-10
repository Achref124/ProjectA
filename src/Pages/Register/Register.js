import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div>
       <div class="container">
        <form action="" method="post" class="sign-form" id="sign-form" autocomplete="on">
            <h1 class="form-title">Sign Up</h1>
            <p class="form-caption">See your growth and get consulting support!</p>
            <button class="google-sign-btn"><i class="fa fa-google"></i> Sign up with Google</button>

            <br/>

            <div class="google-guide-container">
                <div class="hr-left"></div>
                <p class="guide-google">or Sign up with Email</p>
                <div class="hr-right"></div>
            </div>

            <label for="username">Name<span class="star-required">*</span></label>
            <input type="text" name="username" id="username" placeholder="Name" autofocus required/>

            <label for="email">Email<span class="star-required">*</span></label>
            <input type="email" name="email" id="email" placeholder="mail@website.com" required/>

            <label for="password">Password<span class="star-required">*</span></label>
            <input type="password" name="password" id="password" placeholder="Min. 8 character" required/>
           
            <br/>

            <input type="checkbox" name="terms-agree" id="terms-agree" required/>
            <p class="sentence-agree">I agree to the <a href="">Terms & Conditions</a></p>

            <input type="submit" value="Sign Up" id="submit"/>

            <p class="have-account-line">Already have an Account? <a href="">Sign in</a></p>

            <p class="info">2023 Felix All rights reserved.</p>
        </form>
    </div>
    </div>
    
  )
}

export default Register