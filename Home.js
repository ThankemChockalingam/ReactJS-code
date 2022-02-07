import React from "react";
import ReactDOM from "react-dom";

import{
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from "React-router.com";
class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <body>
            <div class = "heading">
            <div class ="jumbotron text.center" id = "heading">

            <h1 class="Myname"> Thangam </h1>
            <p class = "Myoccupation">Developer and Professor</p>
            <ul class = "nav nav-pills nav-justified" id = "navigation">
                <li class = "nav-item">
                    <a class = "nav-link active" href="/Home">
                        Home
                    </a>
                </li>
                <li class = "nav-item">
                    <a class = "nav-link active" href="/project">
                        Project
                    </a>
                </li>
                <li class = "nav-item">
                    <a class = "nav-link active" href="/YouTube">
                        YouTube
                    </a>
                </li>
                <li class = "nav-item">
                    <a class = "nav-link active" href="/Contact">
                        Contact
                    </a>
                </li>
            </ul>
            </div>

            <div class = "container">
                <div class = "row">
                    <div class = "col-sm-4">
                        <div class = "rounded-circle">
                            <img
                                src = "pict1.jpg"
                                width = "130px"
                                height = "150px" />
                        </div>
                        <br />
                    </div>
                    <div class = "col-sm-8">
                        <h2 class = "myskills"> Carrier Objective</h2>
                        <br />
                        <p class = "skills">
                        Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings. To get an opportunity where I can make the best of my potential and contribute to the organization's growth.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div class = "container">
                <div class = "row">
                    <div class = "col-sm-6">
                        <h2 class = "myskills">Technical Skills</h2>
                        <br />
                        <ul class = "skills">
                            <li>
                                Front end Languages : HTML, CSS, Javascript
                            </li>
                            <li>
                                Backend Languages : C, C++, Java, VB
                            </li>
                        </ul>
                    </div>
                    <br />
                    
                    <div class = "col-sm-10">
                    <h2 class = "myskills"> My Projects</h2>
                        <br />
                        <table class = "table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Project Domain</th> 
                                    <th> Programming Language</th>
                                    <th> Project link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Web Development</td>
                                    <td> HTML, Java</td>
                                    <td> 
                                        <a href = {"https://github.com/"}/> Banking System

                                    </td>
                                </tr>
                                <tr>
                                    <td>Low Power VLSI</td>
                                    <td>VHDL Verilog </td>
                                    <td> 
                                        <a href = {"https://github.com/"}/> Accumulator Cell

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class = "col-sm-10">
                        <h2 class = "myskills"> Educational Qualification</h2>
                        <br />
                        <table class = "table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Degree</th> 
                                    <th> School/College</th>
                                    <th> Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> BE (ECE)</td>
                                    <td> Dr.Sivanthi Aditanar College of Engineering</td>
                                    <td> 83% </td>                                                           
                                </tr>
                                <tr>
                                    <td> DCT (Computer Tech)</td>
                                    <td> IRT Polytechnic</td>
                                    <td> 88% </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
            <div class ="jumbotron text.center" id = "footer">
                <ul class = "nav justify-content-center">
                    <li class = "nav-item">
                        <a href = "https://www.linkedin.com/"
                        class = "fa fa-linkedin nav-link"
                        style = {{color:"blue"}}/>
                    </li>
                    <li class = "nav-item">
                        <a href = "https://www.Youtube.com/"
                        class = "fa fa-YouTube nav-link"
                        style = {{color:"blue"}}/>
                    </li>
                </ul>
            </div>
            </body>
        );
    }
}

export default Home;