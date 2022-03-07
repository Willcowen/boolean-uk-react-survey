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

  const displayAnswers = (answer) => {
    return (
      <li>
      <h4>Duck Colour Rating: {answer.duckColourRating}</h4>
      <h4>Time Spent with Your Rubber duck: {answer.duckTimeSpent}</h4>
      <h4>Additional comments: {answer.duckAdditionalComments}</h4>
      <h4>Your Name: {answer.name}</h4>
      <h4>Your Email: {answer.email}</h4>
      </li>
    )
  }

  console.log("loading form...", formData)
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <button onClick={() => setAnswersList([])}>CLEAR LIST</button>
        <ul>
        {answersList.map((answer) => displayAnswers(answer))}
        </ul>
      </section>
      <section className="main__form">
        <Form formData={formData} setFormData={setFormData} initialFormState={initialFormState} answersList={answersList} />
      </section>
    </main>
  );
}

export default Main;
