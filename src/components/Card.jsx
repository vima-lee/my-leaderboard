/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* <p>{props.id}</p> */}
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div> 

      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
        <Detail learning={props.learning} />
      </div>
    </div>
  );
}

export default Card;