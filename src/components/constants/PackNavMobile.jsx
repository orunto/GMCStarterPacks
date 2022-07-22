import React from 'react';

import '../css/PackNav.css';

const PackNavMobile = (props) => {
    return (
        <div className='PackNavMobile'>
            {props.children}
        </div>
    )
}

export default PackNavMobile;