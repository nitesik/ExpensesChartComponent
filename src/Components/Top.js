function Top(props) {

  const balance = props.balance;

  return (
    <div className="top">
      <div className="top-container">
        <div className="balance">
          <div style={{fontSize: "11px", color: "#ddd", fontWeight: "400"}}>My Balance</div>
          <div style={{fontSize: "20px"}}>$921.48</div>
        </div>
        <div className="logo">
          <div className="first-circle"></div>
          <div className="second-circle"></div>
        </div>
      </div>
    </div>
  )
}

export default Top;