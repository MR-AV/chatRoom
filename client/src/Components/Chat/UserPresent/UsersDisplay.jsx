import React from "react";
import LensIcon from '@material-ui/icons/Lens';
// import './style.css';

const UsersDisplay = ({userName}) => {

    return(
            <>
                <div>
                <LensIcon className = "active"/>
                {userName}
                </div>
        </>
    )

}

export default UsersDisplay;