import React, { useState } from 'react';

// ? SCSS
import '../Styling/RoundIcon.scss';

const RoundIcon = ({children, hoverColor, iconColor, dimension}) => {

    const [hover, setHover] = useState(false);

    return(
        <div 
            className='round'
            onMouseEnter={() => setHover(() => true)}
            onMouseLeave={() => setHover(() => false)}
            style={{
                backgroundColor: (hover) ? hoverColor : '#FFFFFF',
                boxShadow: `0px 0px 10px 0px ${(hover) ? hoverColor : '#B7B7B6'}`,
                color: (hover) ? iconColor : '#000000',
                width: dimension,
                height: dimension,
            }}
        >
            {
                children
            }
        </div>
    )

};

export default RoundIcon;