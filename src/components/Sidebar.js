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
                <a className='item' href='home'>
                    <i className='home icon'></i>
                    Home
                </a>
                <a className='item' href='log'>
                    <i className='block layout icon'></i>
                    Spending Log
                </a>
                <a className='item' href='user_info'>
                    <i className='user icon'></i>
                    User Information
                </a>
                <a className='item' href='daily'>
                    <i className='calendar icon'></i>
                    Daily Spending
                </a>
                {/* <a className='item' href='stock_search'>
                    <i className='search icon'></i>
                    Stock Search
                </a> */}

            </div>

        </div>
    )
}

export default Sidebar