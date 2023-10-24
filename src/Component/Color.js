import React from 'react'
import './Color.css';

const Color = (props) => {
  return (
    <div>
      <div className="color" style={{backgroundColor: props.colour}} onClick={()=>props.changeColor(props.colour)} ></div>
    </div>
  )
}

export default Color
