function FormCheckboxes(props) {
function handleCheckBoxes (event) {
    props.setFormData({...props.formData, duckTimeSpent: event.target.value});
}
  return (
    <ul>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="swimming" onChange={handleCheckBoxes} checked={props.formData.duckTimeSpent === "swimming"}/>
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="bathing" onChange={handleCheckBoxes} checked={props.formData.duckTimeSpent === "bathing"}/>
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="chatting" onChange={handleCheckBoxes} checked={props.formData.duckTimeSpent === "chatting"}/>
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="noTime" onChange={handleCheckBoxes} checked={props.formData.duckTimeSpent === "noTime"}/>I don't like
          to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default FormCheckboxes
