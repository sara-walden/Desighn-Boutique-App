import React from 'react';
import img28 from "../images/Summer setting.jpg"
import img18 from "../images/Grand set Up.jpg"

const About= ()=>{
    return(
        <>
          <b><div className="about-div">
            <div className= "text">
            <div>
            <h3><b> Tablecloths, napkins, hugs and jewelry for the home</b></h3>
            <p>With the stunning Casa Bella team, we started creating diverse and colorful collections, oozing style 4 times a year according to seasons and dates, fashion trends and subsequent demand 😍 It was important to us that the quality does not fall from the beauty. Our products are made of high-quality raw materials, which do not wrinkle and are preserved even after washing and hand stains and Kiddush wine because we understand what it is.</p>
          
            </div>
            <div>
            <b><h3>The uniqueness of Casa Bella lies in the combinations</h3></b>
            <p>The collections consist of items that complement each other and allow original connections for dressing a table. Each and every one will be able to find items and through them define themselves and the nature of the hospitality, and change from time to time because it's the most fun 🌺</p>
            </div>
            </div>
            <div className= "text">
            <img className="img-about" src={img28}></img>
            <br></br>
            <img className="img-about" src={img18}></img>
            </div>
          </div></b>
          
        </>
    );
};

export default About;