import React, { useState } from 'react';
import './ColorPicker.css';
import Color from './Color';

const ColorPicker = () => {

  const [color, setColor] = useState('green')

  const changeColor = (msg) => {
    setColor(msg);
    hideList()
  }

  
  function hideList() {
    var element = document.getElementById("Hello");
    element.classList.add("hidden")
  }
  function showList() {
    var element = document.getElementById("Hello");
    element.classList.remove("hidden")
  }

  return (
    <div>
      <div className="container my-5">
        <div className="heading">
          <h3>Color Picker</h3>
        </div>
        <div className="color-content">
          <div id='Hello' className="color-list hidden">
            <Color colour={"green"} changeColor={changeColor} />
            <Color colour={"red"} changeColor={changeColor} />
            <Color colour={"orange"} changeColor={changeColor} />
            <Color colour={"yellow"} changeColor={changeColor} />
            <Color colour={"blue"} changeColor={changeColor} />
            <Color colour={"brown"} changeColor={changeColor} />
            <Color colour={"black"} changeColor={changeColor} />
            <Color colour={"pink"} changeColor={changeColor} />
            <Color colour={"grey"} changeColor={changeColor} />
            <Color colour={"white"} changeColor={changeColor} />
          </div>
          <div className="colorpic">
            <button className="btn" style={{ backgroundColor: color }}  onClick={showList} >Pick a color</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
