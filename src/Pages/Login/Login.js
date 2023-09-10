import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div>
        <div class="container">
        <form action="" method="post" class="sign-form" id="sign-form" autocomplete="on">
            <h1 class="form-title">Sign In</h1>
            <p class="form-caption">See your growth and get consulting support!</p>
            <button class="google-sign-btn"><i class="fa fa-google"></i> Login with Google</button>

            <br/>

            <div class="google-guide-container">
                <div class="hr-left"></div>
                <p class="guide-google">or login with Email</p>
                <div class="hr-right"></div>
            </div>

            
            <label for="email">Email<span class="star-required">*</span></label>
            <input type="email" name="email" id="email" placeholder="mail@website.com" required/>

            <label for="password">Password<span class="star-required">*</span></label>
            <input type="password" name="password" id="password" placeholder="Min. 8 character" required/>
           
            <br/>

            
            

            <input type="submit" value="Sign in" id="submit"/>

            <p class="have-account-line">don't  have an Account? <a href="">Sign in</a></p>

            <p class="info">2023 Felix All rights reserved.</p>
        </form>
    </div>
    </div>
  )
}

export default Login