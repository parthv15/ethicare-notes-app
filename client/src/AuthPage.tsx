import React from "react";
import "./index.css"


export default function AuthPage(){

    const [Sign, setSign] = React.useState(false)

    function ChangeSign(){
        setSign(!Sign);
    }

    function SignUp(){
        console.log("Signed In")
    }

    return (
        <div className="AuthPageMainDiv">
            <div className="LoginContents">
            <div className="LoginTitle">ETHICARE Financial Planner</div>
                {!Sign && (<div className="LoginBox">
                    <p className="textAuthPage">Email</p>
                    <input type="text" className="inputAuthPage"></input>
                    <p className="textAuthPagePass">Password</p>
                    <input type="password" className="inputAuthPage"></input>
                    <button className="buttonAuthPage1">Log In</button>
                    <button className="buttonAuthPage2" onClick={ChangeSign}>Sign Up</button>
                </div>)}
                {Sign && (
                <div className="LoginBox">
                    <p className="AuthPageName">Name</p>
                    <input type="text" className="inputAuthPage"></input>
                    <p className="textAuthPageSign">Email</p>
                    <input type="text" className="inputAuthPage"></input>
                    <p className="textAuthPageSign">Password</p>
                    <input type="password" className="inputAuthPage"></input>
                    <p className="textAuthPageSign">Confirm Password</p>
                    <input type="password" className="inputAuthPage"></input>
                    <button className="buttonAuthPage3" onClick={SignUp}>Sign Up</button>
                    <button className="buttonAuthPage2" onClick={ChangeSign}>Back</button>
                </div>)
                }
            </div>
            <div className="ImgLogin">
                <img src="../img/title_img1.jpg"></img>
            </div>
        </div>
    );
}

