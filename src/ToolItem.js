import React from 'react'

const ToolItem = (props) => {
    return (
        <div className='d-flex f-column gap-1 p-2 con-center align-center tool-button'>
            {props.icon}
            <p className='text-center'>{props.toolName}</p>
        </div>
    )
}

export default ToolItem
