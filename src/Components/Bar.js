import { useState } from "react";

function Bar({height, amount, day}) {

  const [hovering, isHovering] = useState(false);

  
  return (
  <div className="day">
    {hovering && <div className="bar-amount">${amount}</div>}
    <div className="bar" style={{height: `${height}mm`}} onMouseEnter={(() => {isHovering(true)})} onMouseLeave={() => {isHovering(false)}}></div>
    <div>{day}</div>

    {/* <style>{`
      .bar {
        animation: copy 500ms ease-in;
      }

      @keyframes copy {
        0% {
          height: 0;
        }
      
        100% {
          height: 100% !important;
        }
      }
    `}</style> */}
  </div>)
}

export default Bar;