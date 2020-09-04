import React from 'react';
import classNames from 'classnames'

const Sidebar = (props) => {

    const cx = classNames(
        'ui', 'inverted', 'labeled', 'icon', 'left', 'inline', 'vertical', 'sidebar', 'menu', 'animating', 'overlay',
        {'visible': props.toggleMenu}
    )

    return (

        <div >
            <div className={cx}>
                <a className='item' href='example.com'>
                    <i className='home icon'></i>
                    Profile
                </a>
                <a className='item' href='example.com'>
                    <i className='block layout icon'></i>
                    Weekly Spending
                </a>
                <a className='item' href='example.com'>
                    <i className='smile icon'></i>
                    placeholder
                </a>
                <a className='item' href='example.com'>
                    <i className='calendar icon'></i>
                    Monthly Spending
                </a>
                <a className='item' href='example.com'>
                    <i className='home icon'></i>
                    Placeholder
                </a>

            </div>

        </div>
    )
}

export default Sidebar