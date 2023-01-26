export default function RadioInput(question) {
  return (
    <div>
      {question.choices.map((choice) => (
        <div
          className="flex gap-3 my-2 items-center p-2 px-3 border-2 border-accent rounded-md"
          key={choice.id}
        >
          <input
            className="radio"
            type="radio"
            id={choice.id + "__input__radio"}
            name={question.question_text}
            value={choice.choice_text}
          />
          <label className="label" htmlFor={choice.id + "__input__radio"}>
            {choice.choice_text}
          </label>
        </div>
      ))}
    </div>
  );
}
