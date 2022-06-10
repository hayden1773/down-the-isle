import React from "react"
import "./style.css"

function About() {
    return (
        <div className="container" id="aboutUs">
            <h1>About Us</h1>
            <br/>
            <h3>Here at Down-the-Isle, we offer couples a simplistic, and stress-free way to create and send invitations for guests of their celebration of love.</h3>
            <br/>
            <div className="container" id="about">
                <ul><img className="rounded-circle image1" alt="img1" src="https://cdn0.weddingwire.com/vendor/982580/3_2/960/jpg/details0012_51_85289-157895752845788.jpeg"/>
                    <p>	&#10084; Provide all the details of your special day in one place</p>
                    <img className="rounded-circle image1" alt="img1" src="https://i.etsystatic.com/7739037/r/il/cc1981/3025588238/il_794xN.3025588238_abjr.jpg"/>
                    <p> &#10084; Manage your Guest List</p>
                    <img className="rounded-circle image1" alt="img1" src="https://media.guestofaguest.com/t_article_content/wp-content/uploads/2013/10/wedding-gift-table.jpg"/>
                    <p>	&#10084; Share your invites</p>
                    <img className="rounded-circle image1" alt="img1" src="https://www.stylishwedd.com/media/catalog/product/cache/730028fce2d3fb3e70bdf76b1c05350a/r/o/romantic-pink-floral-layered-wedding-invitations-swpi075-1.jpg"/>
                    <p>	&#10084; Manage your invitations</p>
                </ul>
            </div>
        </div>
    );
}

export default About