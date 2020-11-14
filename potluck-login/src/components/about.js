import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledH1 =styled.h1`
text-align: center;
 margin-bottom: 30px
`;
class About extends React.Component{
    render(){

        return (
            <div className="About">
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
    <section className="about_container">
        <h1>About Us</h1>
        <p>Plan-A-Potluck is here to help with all your planning for your next potluck for an office meeting, family or church events, or just a good time with good food. Plan-A-Potluck will provide a social media invitation strategy by providing and creating
            a personal page for your party. Guest will be able to RSVP via the invitation. Plan-A-Potluck will create a menu by implementing a list of food items from each guest, that will be providing a dish.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora nam dolor consequatur vero ipsam voluptates tempore, recusandae maiores officiis dignissimos reprehenderit eaque cumque omnis eius asperiores itaque nulla perferendis.</p>
    </section>
    <section id="contact">
        <div>
            <div>
                <h2>Contact Us</h2>
                <p>Sign Up or Leave a message:</p>
            </div>
            <div>
                <form>
                    <input name="Name" type="text" placeholder="Name" />
                    <input name="E-mail" type="text" placeholder="E-mail" />
                    <textarea name="text" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                    <input type="submit" value="SUBMIT"/>
                </form>
            </div>

        </div>

    </section>
    <section>
        <StyledH1>Meet Our Team</StyledH1>
    </section>
    <section className="team_container">
    <div>
            <img src="https://ca.slack-edge.com/ESZCHB482-W013WQL6T4N-097884fad5ca-512" alt="Lakendria McCullough" />
            <h3>Lakendria McCullough</h3>
            <p>UI/Front-End Developer</p>
        </div>
        <div>
            <img src="https://ca.slack-edge.com/ESZCHB482-W012QNY2Z9S-eb289f841a98-512" alt="Nandy " />
            <h3>Nandhini Devi Madan</h3>
            <p>Back-End Developer</p>
        </div>

    </section>
   
    <footer>
        <p>Plan-A-Potluck, Copyright &copy; 2020</p>

    </footer>

</div>
        );
    }
}

export default About;