const EnterField = (props) => {
  return (
      <div>
          <p>{props.title}</p>
          <input
              className="EnterFieldClass"
              onChange={(e) => props.setValue(e.target.value)}
              value={props.value}
          />
      </div>
  )
}

export default EnterField;