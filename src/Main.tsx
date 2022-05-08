import React from "react";


const Col1 = ():JSX.Element => {
    return (
        <div>
            <div className="col"><h1>About</h1></div>
            <div className="maintext">
                Staff of <a href="https://dsc.gg/scratchjp">Scratch(JP)</a> <br />
                Student/Scratcher
            </div>
        </div>
    );
};

const Col2 = ():JSX.Element => {
    return (
        <div>
            <div className="col"><h1>Skills</h1></div>
            <div className="icons">
               <i className="fa-brands fa-node-js fa-4x" />
               <i className="fa-brands fa-js fa-4x" />
               <i className="fa-brands fa-css3-alt fa-4x" />
               <i className="fa-brands fa-linux fa-4x" />
               <p>Other: TypeScript</p>
            </div>
        </div>
    );
}

const Col3 = ():JSX.Element => {
    return (
        <div>
            <div className="col"><h1>Contact</h1></div>
            <div className="icons">
                <a href="https://twitter.com/developermodoki"><i className="fa-brands fa-twitter fa-3x iconLink"/></a>
                <a href="https://github.com/developermodoki"><i className="fa-brands fa-github fa-3x iconLink"/></a>
                <a href="https://dsc.gg/Scratchjp"><i className="fa-brands fa-discord fa-3x iconLink"/></a>
                <p>Other: <a href="https://scratch.mit.edu/users/Windows1000000_2">Scratch</a></p>
            </div>
        </div>
    );
}
const Main = ():JSX.Element => {
    return (
        <div className="main">
            <Col1 />
            <Col2 />
            <Col3 />
        </div>
    );
};

export default Main;