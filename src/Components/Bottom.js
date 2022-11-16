import { useState } from "react";
import Bar from "./Bar";

function Bottom({data, balance}) {

  return (
    <div className="bottom">
      <div className="bottom-container">
        <div className="spent">Spending - Last 7 days</div>
        <div className="graph">
          {data.map(datum => (<Bar height={datum.amount / balance * 175} amount={datum.amount} day={datum.day} />))}
        </div>
        <div className="footer">
          <div className="inner-footer">
            <div className="this-month">
              <div>Total this month</div>
              <div className="cash">$478.33</div>
            </div>
            <div className="last-month">
              <div style={{color: "hsl(25, 47%, 15%)", fontWeight: "700"}}>+2.4%</div>
              <div>from last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom;