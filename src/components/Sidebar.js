import React, { useEffect } from 'react';
import classNames from 'classnames'

const Sidebar = (props) => {

    useEffect(() => {
        console.log(props.toggleMenu)
    })

    const classes = classNames(
        'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating',
        {'visible' : props.toggleMenu }
    )

    return (
        <div className={classes}>
            <ul>
                <li className='item link'>item</li>
                <li className='item link'>item</li>
                <li className='item link'>item</li>
                <li className='item link'>item</li>
            </ul>
        </div>
    )
}

export default Sidebar