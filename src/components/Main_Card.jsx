import "./main_style.css";
const MainCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="img_container b_col">
              <img
                src={props.img}
                alt=""
                className="img-fluid object-fit-cover"
                srcset=""
              />
            </div>
            <div className="text_container">
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
