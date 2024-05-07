function TextOverlay(props) {
  const defaultHeight = '200px';
  
  const textstyle = {
    position: 'absolute',
    left: '15px',
    top: '30%',
    fontSize: '30px'
  };
  
  const { height = defaultHeight } = props;
  
  const cardStyle = {
    position: 'relative',
    height: height, 
  };

  const combinedTextStyle = { ...textstyle, ...props.color };

  return (
    <div className="container-fluid mb-5 centered">
      <div className="card w-40 d-block mx-auto" style={cardStyle}>
        <img className="card-img-top img-cover" src={props.image} alt="" />
        <div className="card-img-overlay" style={combinedTextStyle}>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default TextOverlay;