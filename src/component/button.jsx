import { useState } from 'react';
import './button.css'
export function Button (pros) {
    return (
        <button className='button' onClick={() => pros.onclick()}>
            change
        </button>
    )

}