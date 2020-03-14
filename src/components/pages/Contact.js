import React from "react";

function Contact() {
    return (

        <section  className="container requiredSize myContent" >
        <div id="contentHead">
            <h1>
                Contact
            </h1>
            <br/>
        </div>
        <div className="row" >
            <div className="col">
                <div id="contentBody">

                    <form action="mailto:jarriaga.important@gmail.com" method="get" enctype="text/plain">

                        <div className="formContent"><p>Name: <br /><input className="inputFields" type="text" name="name"  /></p></div>
                        <div className="formContent"><p>Email:<br /> <input className="inputFields" type="text" name="email" /></p></div>
                        <div className="formContent"><p id="textAreaP">Comments: <br /> <textarea id="inputFieldA" name="comments" rows="9" maxlength="500"></textarea></p></div>
                        <br/>
                        <p id="buttonP">
                            <input id="buttonSub" type="submit" name="submit" value="Submit" />
                        </p>

                    </form>
            
                
                </div>
            </div>

        </div>
            
    </section>

    );
      
  };
  
  export default Contact;