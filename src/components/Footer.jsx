import React from "react";


const date = new Date();

function Footer(){
    return(
        <footer>
            {/* {console.log(date)} */}
            <p>Created by Prasanth with the help of Udemy Course {date.getFullYear()}</p>
        </footer>
    )
}


export default Footer;