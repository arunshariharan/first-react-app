import React from 'react';

const minCharLength = 5;

const validation = (props) => {
    
    let charCountValidation = (
        <p>
            Length Too short!
        </p>
    );

    if(props.charLength > minCharLength)
    {
        charCountValidation = (
            <p>
                The character count : {props.charLength}
            </p>
        );
    }

    return ( charCountValidation );
}

export default validation;
