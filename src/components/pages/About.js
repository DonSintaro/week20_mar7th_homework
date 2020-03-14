import React from "react";

function About() {
    return (
        <section  class="container requiredSize myContent" >
        <div id="contentHead">
            <h1>
                About Me
            </h1>
            <br/>
        </div>
        <div class="row" >
            <div class="col">
                <div id="contentBody">

                    <div id="myImage">
                        <img id="profilePic" src="assets/images/myImage.jpg" alt="Image of Dev" />
                    </div>
            
                    <div id="aboutText">
                        <p>
                            Jeffrey Arriaga is a graduate of the University of Texas Medical Branch with a degree in clinical laboratory sciences.  He decided to switch careers in 2017 and is currently enrolled to school at Austin Community College in pursuit of an eventual dual bachelor/masters degree in computer science.
                        </p>
    
                        <p>
                            Although he plans to leave the clinical setting, he hopes to continue to help people through technology and devlopment that will one day make our lives easier in the medical field.  Using his past experiences, he hopes to make tools used by the professionals in the field that are tailored and designed by a laboratory technologist, for a laboratory technologist.
                        </p>
    
                        <p>
                            In addition to his bachelors degree pursuits, he is currently enrolled in the UT Coding Bootcamp to speed up and develop his talents.  Jeffrey is also an artist, gamer, and musician and hopes to combine all of his passions into his future.
                        </p>
                    </div>
                
                
                </div>
            </div>

        </div>
    
    
       
    
    </section>
    );
  }
  
  export default About;