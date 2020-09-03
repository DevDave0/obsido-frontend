import React from 'react';
import classNames from 'classnames'

const Sidebar = (props) => {


    const classes = classNames(
        'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating', 'thin',
        {'visible' : props.toggleMenu }
    )

    return (
        <div className={classes}>

            
            <ul>
                <li className='item link'>Profile</li>
                <li className='item link'>Weekly Spending</li>
                <li className='item link'>Monthly Spending</li>
                <li className='item link'>Cryptocurrencies</li>
            </ul>
        </div>
    )
}

export default Sidebar