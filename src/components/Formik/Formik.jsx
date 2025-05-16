
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from "../Formik/FeedbackForm.module.css";
import * as Yup from "yup";


// Використовуэмо хук useId для створення унікальних ідентифікаторів полів.
import { useId } from 'react';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});
// Виносимо об'єкт початкових значень полів в зовнішню змінну.
const initialValues = {
  username: "",
	email: "",
	message: "",
  level: "good"
};
const FeedbackForm = () => {
	// Створюэмо унікальні ідентифікатори полів за домопомогою useId
	const nameFieldId = useId();
	const emailFieldId = useId();
	const msgFieldId = useId();
	const levelFieldId = useId();
	// Робимо колбек-функцію, яку ми передаємо потім пропсом в onSubmit, іменованою, і виносимо її сюди
	const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};
  return (
	  <Formik
		//   Звертаємось до цієї змінної через пропс
		  initialValues={{ initialValues }} 
		//   Передаємо нашу колбек=функцію handleSubmit сюди в onSubmit як пропс
		  onSubmit={handleSubmit}
		//   Передаємо схему валідації Yup як третій пропс 
		  validationSchema={FeedbackSchema}
	  >
		  
		  <Form className={css.form}>
			  <div>
				<label htmlFor={nameFieldId}>Username</label>
				<Field className={css.field} type="text" name="username" id={nameFieldId} />
				<ErrorMessage name="username" component="span" />
			  </div>

			  <div>
				<label htmlFor={emailFieldId}>Email</label>
				<Field className={css.field} type="email" name="email" id={emailFieldId} />
				<ErrorMessage name="email" component="span" />
			  </div>
			  
<div>
	<label htmlFor={msgFieldId}>Message</label>
				  <Field as="textarea" name="message" id={msgFieldId} rows="5" />
				   <ErrorMessage name="message" component="span" />
</div>
			  
			  <div>
				<label htmlFor={levelFieldId}>Service satisfaction level</label>
						<Field as="select" name="level" id={levelFieldId}>
						  <option value="good">Good</option>
						  <option value="neutral">Neutral</option>
						  <option value="bad">Bad</option>
						</Field>
						  <ErrorMessage name="level" component="span" />
			  </div>
				<button className={css.btn} type="submit">Submit</button>
			</Form>
    </Formik>
  );
};
export default FeedbackForm;