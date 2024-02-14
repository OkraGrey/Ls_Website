import "./CardEvent.css";

const CardEvent = (props) => {
  return (
    <>
      <div className="b_col mb-3 mt-5">
        <div class="card img_spec">
          <img src={props.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 className="text-center alert alert-danger">
              Event Date 23/2/2024 (tobecorrected)
            </h4>
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
            {/* <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p> */}
            {props.buttons == "1" && (
              <a
                href={props.link}
                target="_blank"
                class="btn btn-outline-warning register_button"
              >
                Register Now
              </a>
            )}

            {props.buttons == "2" && (
              <>
                <a
                  href={props.link_1}
                  target="_blank"
                  class="btn btn-outline-warning register_button_2"
                >
                  Register Now
                </a>
                <a
                  href={props.link_2}
                  target="_blank"
                  class="btn btn-outline-warning register_button_2"
                >
                  Submission Link
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardEvent;
