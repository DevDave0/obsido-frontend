import React from 'react';

const Header = (props) => {

    return (
        <div className='ui top inverted attached menu'>
            <span className='item link grey' onClick={()=> props.toggleMenu()}>
                <i className='sidebar icon'></i>
                Menu
            </span>

            <span className='item link grey right' onClick={(e)=> props.logOut(e)}>
                <i className="power off icon"></i>
                Logout
            </span>

        </div>
    )
}



export default Header