const EnterField = (props) => {
  return (
      <div>
          <p>{props.title}</p>
          <input
              className="EnterFieldClass"
              onChange={(e) => props.setValue(e.target.value)}/>
      </div>
  )
}

export default EnterField;