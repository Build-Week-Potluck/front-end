import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component{
    render(){
 
        return (
          <div className="Home">
           
           <header>
              <div className="header_container">
                  <div class="logo_container">
                      <h1> Plan-A-Potluck</h1>
                      <img src="images/potluck_logo.jpg" alt="logo"/>
                      <p>Good Times, Good Food</p>
                  </div>
                  <nav className="nav_container">
                      <ul>
                          <li><Link className="home" to="/">Home</Link></li>
                          <li><Link className="about" to="/about">About Us</Link></li>
                          <li><Link className="login" to ="/login">Login</Link></li>
                          <li><Link className="register" to ="/register">Register</Link></li>
      
                      </ul>
                  </nav>
              </div>
          </header>
      
          <section className="potato_salad">
              <h1><em>Want to know who made the potato salad?</em></h1>
          </section>
      
      
          <section className="container">
              <div className="s_container">
                  <div className="box">
                      <img src="images/potluck.jpg" alt=""/>
                      <h3>What We Do</h3>
                      <p>Plan-A-Potluck is here to help with all your planning for your next potluck for an office meeting, family or church events, or just a good time with good food.</p>
                  </div>
      
                  <div className="box">
                      <img src="images/potluck2.jpg" alt=""/>
                      <h3>Need Invitations?</h3>
                      <p>Plan-A-Potluck will provide a social media invitation strategy by providing and creating a personal page for your party. Guest will be able to RSVP via the invitation.</p>
                  </div>
      
                  <div className="box">
                      <img src="images/potluck1.jpg" alt=""/>
      
                      <h3>Need A Menu?</h3>
                      <p>Plan-A-Potluck will create a menu by implementing a list of food items from each guest, that will be providing a dish.</p>
                  </div>
              </div>
          </section>
          <section>
      
              <div className="blog_container">
                  <h1>Our Blog</h1>
                  <p>Check out new potluck ideas and recipes here!</p>
      
              </div>
              <div className="blog">
                  <div className="vegan_container">
                      <img src="images/vegan.jpg" alt="Vegan Options"/>
                      <h4>Vegan Options</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque temporibus facere earum eveniet nisi reprehenderit, sapiente iste a explicabo modi officiis fuga eos ad doloremque consequuntur ea laudantium maiores illo.</p>
                      <button>See More</button>
                  </div>
                  <div className="bbq_container">
                      <img src="images/bbq.jpg" alt="BBQ"/>
                      <h4>BBQ Tips</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque temporibus facere earum eveniet nisi reprehenderit, sapiente iste a explicabo modi officiis fuga eos ad doloremque consequuntur ea laudantium maiores illo.</p>
                      <button>See More</button>
                  </div>
              </div>
          </section>
      
          <footer>
              <p>Plan-A-Potluck, Copyright &copy; 2020</p>
      
          </footer>
          </div>
          );
          }

      
}


export default Home;