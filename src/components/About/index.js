import React from "react"
import "./style.css"

function About() {
    return (
        <div className="container" id="aboutUs">
            <h1>Why Choose Us?</h1>
            <br/>
            <h3>Here at Down-the-Isle, we offer couples a simplistic, and stress-free way to create and send invitations for guests of their celebration of love.</h3>
            <br/>
            <div className="container" id="about">
                <ul><img className="rounded-circle image1" alt="img1" src="https://withjoy.com/blog/wp-content/uploads/2021/07/Photo-1-1170x781.jpg"/>
                    <p>Provide all the details of your special day in one place</p>
                    <img className="rounded-circle image1" alt="img1" src="https://media.snacksafely.com/wp-content/uploads/2015/09/airplane-flight-sunset-1068x668.jpg"/>
                    <p>Manage your Guest List</p>
                    <img className="rounded-circle image1" alt="img1" src="https://media.guestofaguest.com/t_article_content/wp-content/uploads/2013/10/wedding-gift-table.jpg"/>
                    <p>Share your invites</p>
                    <img className="rounded-circle image1" alt="img1" src="https://upload.oola.com/rola/uploads/2021/12/wedding-puzzledd1bdc-1.jpg"/>
                    <p>Manage your invitations</p>
                </ul>
            </div>
        </div>
    );
}

export default About