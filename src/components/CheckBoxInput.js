export default function CheckBoxInput(question) {
  return (
    <div>
      {question.choices.map((choice) => (
        <div
          className="flex gap-3 my-2 items-center p-2 px-3 border-2 border-accent rounded-md"
          key={choice.id}
        >
          <input
            className="checkbox "
            type="checkbox"
            id={choice.id + "__input__checkbox"}
            name={question.question_text}
            value={choice.choice_text}
          />
          <label className="label" htmlFor={choice.id + "__input__checkbox"}>
            {choice.choice_text}
          </label>
        </div>
      ))}
    </div>
  );
}
