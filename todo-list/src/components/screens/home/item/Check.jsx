import React from "react";
import {BsCheck} from "react-icons/bs";
import cn from "classnames";

const Check = ({isComPleted}) => {
    return(
        <div className={cn(`border-2 rounded-lg border-pink-400 w-6 h-6 mr-3
        flex items-center justify-center`, {
            'bg-pink-400' : isComPleted,
        })}>
           {isComPleted && <BsCheck size={22} className='text-white'/>}
        </div>
    )
}

export default Check;