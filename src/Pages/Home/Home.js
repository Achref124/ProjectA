import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <nav class="navbar">
    <div class="container">
      <h1 class="logo">agrowing</h1>
      <ul class="nav">
        <Link to={"/Login"} ><li><a href="#home">Login</a></li></Link>
        <Link to={"/Register"}><li><a href="#about">Register</a></li></Link>
        <Link to={"/Contact"}><li><a href="#about">Contact</a></li></Link>
       
      </ul>
    </div>
  </nav>

  
  <section class="section-a">
    <div class="container">
      <div>
        <h1>la Solution Du Future.</h1>
        <p>
        Bienvenue sur la page d'accueil de agrowing, une plateforme dedié Ã l'innovation agricole. Notre mission est de reinventer la maniere dont les agriculteurs 
abordent les defis de la faune dans leurs cultures. Grace Ã une approche technologique avancée, nous avons developpé une solution intelligente et connectée pour contrer 
efficacement les oiseaux granivores et preserver l'équilibre environnemental.
        </p>
        <a href="/" class="btn">Read More</a>
      </div>
      <img style={{width:"700px",margin:"0"}} src="https://www.wallpaperflare.com/static/891/253/69/technology-robot-white-illustration-wallpaper.jpg" alt="photo1" />
    </div>
  </section>

  
  <section id="about" class="section-b">
    <div class="overlay">
      <div class="section-b-inner py-5">
        <h3 class="text-2">Precise et Efficace </h3>
        <h2 class="text-5 mt-1">les agriculteurs n'ont plus à s'inquiéter</h2>
        <p class="mt-1">
        Notre équipe d'experts en agriculture et en technologie a crée une solution révolutionnaire qui combine des capteurs de pointe, une analyse d'images précise et 
l'intelligence artificielle. Cette solution détecte rapidement la présence des oiseaux nuisibles et déclenche des actions de dissuasion ciblées pour protéger vos cultures. 
        </p>
      </div>
    </div>
  </section>

  
  <section class="section-c">
    <div class="gallery">
      <a href="https://i.ibb.co/CHLBZnp/gal2323.jpg" class="big"
        ><img src="https://images3.alphacoders.com/208/208599.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/S6FVFNt/gal74744.jpg" class="big"
        ><img src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-robot-white-cute-robot-blue-light-background-image_2199825.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/4pBbhfY/gal39834.jpg" class="big"
        ><img src="https://i.pinimg.com/736x/79/f6/b9/79f6b9d8ca7bcb84fd30c18b7f0f1176.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/QN6Bnrb/gal4958.jpg" class="big"
        ><img src="https://t4.ftcdn.net/jpg/01/36/64/63/360_F_136646326_MFVtW1lRgo14MTvSgBZIGtCAu5nGnOIz.jpg" alt=""
      /></a>
      <a href="https://i.ibb.co/xSnHP7g/gal43884.jpg" class="big"
        ><img src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-hand-future-robot-mechanical-image_38475.jpg" alt=""
      /></a>
      
      <a href="https://i.ibb.co/dGZvj75/gal4545.jpg" class="big">
        <img src="https://previews.123rf.com/images/foxaon/foxaon1208/foxaon120800129/14923516-abstract-robot-eye-background.jpg" alt=""
      /></a>
      
    </div>
  </section>

 
  <footer class="section-footer py-4 bg-primary">
    <div class="container">
      <div>
        <h2 class="text-2 mb-1">Contactez-nous pour decouvrir notre produit</h2>
        <a href="http://twitter.com">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="http://facebook.com">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href="http://youtube.com">
          <i class="fab fa-youtube fa-2x"></i>
        </a>
      </div>
      <div>
        <h3>Company Info</h3>
        <ul>
          <li><a href="/">All Products</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms of Service</a></li>
        </ul>
      </div>
      
      <div>
        <h3>Subscribe</h3>
        
        <form
          class="mt-1"
          name="email-form"
          method="POST"
          data-netlify="true"
        >
          <div class="email-form">
            <span class="form-control-wrap"
              ><input
                type="email"
                name="email"
                id="email"
                size="40"
                class="form-control"
                placeholder="E-mail"/></span>
            <button type="submit" value="Submit" class="form-control submit">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </footer></div>
  )
}

export default Home