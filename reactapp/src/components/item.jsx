import * as React from 'react';

export default function item(props) {

    if (!props.isVisible) {
        return null;
    }

    return (
        <div className='item'>
            <div className='img-content'>
                <img alt='Item' src={props.link}/>
            </div>
        
            <div className='text-content'>
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.desc}
                </p>
                <p>
                    Price: <span>
                    {props.price}
                    </span>
                </p>
            </div>
        </div>
    ) 
}