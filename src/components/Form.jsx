import FormRadioInputs from './FormRadioInputs';
import FormCheckboxes from './FormCheckboxes'
function Form(props) {

function handleAdditionalComments (event) {
    props.setFormData({...props.formData, duckAdditionalComments: event.target.value})
}

function handleName (event) {
    props.setFormData({...props.formData, name: event.target.value})
}

function handleEmail (event) {
    props.setFormData({...props.formData, email: event.target.value})
}

function handleSubmit (event) {
    event.preventDefault()
    console.log("submitted!", props.formData)
    props.answersList.push(props.formData)
    console.log(props.answersList)
    props.setFormData(props.initialFormState)
}
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <FormRadioInputs formData={props.formData} setFormData={props.setFormData}/>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck?</h3>
        <FormCheckboxes formData={props.formData} setFormData={props.setFormData} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10" onChange={handleAdditionalComments} value={props.formData.duckAdditionalComments}></textarea>
      </label>
      <label>
        Put your name here (if you feel like it)..
        <input type="text" name="username" onChange={handleName} value={props.formData.name}/>
      </label>
      <label>
        Leave us your email pretty please?
        <input type="email" name="email" onChange={handleEmail} value={props.formData.email}/>
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
