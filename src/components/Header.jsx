import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight'; //this import line name has changed in actual site, bcz thier site name has changed so tis line is earlier one this is working and showing icon

function Header() {
    return(
        <header>
            <h1>
                <HighlightIcon />
                ToDo List
            </h1>
        </header>
    );
}
export default Header;