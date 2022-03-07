import { useState } from "react";
import Form from './Form'
function Main() {

  const initialFormState = {
    duckColourRating: '',
    duckTimeSpent: '',
    duckAdditionalComments: '',
    name: '',
    email: ''
  }

  const [open, setOpen] = useState(false); 
  const [formData, setFormData] = useState(initialFormState)
  const [answersList, setAnswersList] = useState([])

  console.log("loading form...", formData)
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <h3>Duck Colour Rating: {answersList.duckColourRating}</h3>
        <h3>Time spent with your rubber duck: {answersList.duckTimeSpent}</h3>
        <h3>Additional comments: {answersList.duckAdditionalComments}</h3>
        <h3>Your Name: {answersList.name}</h3>
        <h3>Your Email: {answersList.email}</h3>
      </section>
      <section className="main__form">
        <Form formData={formData} setFormData={setFormData} initialFormState={initialFormState} answersList={answersList} setAnswersList={setAnswersList}/>
      </section>
    </main>
  );
}

export default Main;
