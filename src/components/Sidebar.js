import React from 'react';
import classNames from 'classnames'

const Sidebar = (props) => {


    const classes = classNames(
        'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating', 'thin',
        {'visible' : props.toggleMenu }
    )

    const cn = classNames(
        'ui', 'bottom', 'attached', 'segment', {'visible' : props.toggleMenu },
    )

    const cx = classNames(
        'ui', 'inverted', 'labeled', 'icon', 'left', 'inline', 'vertical', 'sidebar', 'menu', 'animating', 'overlay',
        {'visible': props.toggleMenu}
    )

    return (
        // <div className={classes}>

            
        //     <ul>
        //         <li className='item link'>Profile</li>
        //         <li className='item link'>Weekly Spending</li>
        //         <li className='item link'>Monthly Spending</li>
        //         <li className='item link'>Cryptocurrencies</li>
        //     </ul>
        // </div>

        <div >
            <div className={cx}>
                <a className='item'>
                    <i className='home icon'></i>
                    Profile
                </a>
                <a className='item'>
                    <i className='block layout icon'></i>
                    Weekly Spending
                </a>
                <a className='item'>
                    <i className='smile icon'></i>
                    placeholder
                </a>
                <a className='item'>
                    <i className='calendar icon'></i>
                    Monthly Spending
                </a>
                <a className='item'>
                    <i className='home icon'></i>
                    Placeholder
                </a>

            </div>

        </div>
    )
}

export default Sidebar