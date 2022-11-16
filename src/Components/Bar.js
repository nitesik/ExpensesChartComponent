import { useState } from "react";

function Bar({height, amount, day}) {

  const [hovering, isHovering] = useState(false);

  
  return (
  <div className="day">
    {hovering && <div className="bar-amount">${amount}</div>}
    <div className="bar" style={{height: `${height}mm`}} onMouseEnter={(() => {isHovering(true)})} onMouseLeave={() => {isHovering(false)}}></div>
    <div>{day}</div>
  </div>)
}

export default Bar;