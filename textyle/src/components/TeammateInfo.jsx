const TeammateInfo = (props) => {
  return (
      <div className="TeammateCard">
          <a className="TeammateLink" href={"https://t.me/" + props.tg}>
              <img src={props.photo} alt={props.name}/>
              <h2>{props.name}</h2>
              <div>{props.desc}</div>
              <div>{"@" + props.tg}</div>
          </a>
      </div>
  )
}

export default TeammateInfo;
