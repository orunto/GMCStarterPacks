import React from 'react';

import '../css/PackNav.css';

const PackNav = (props) => {
    return (
        <div className='PackNav'>
            {props.children}
        </div>
    )
}

export default PackNav;