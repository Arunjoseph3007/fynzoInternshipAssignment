export default function DropDownInput(question) {
  return (
    <select
      className="select select-bordered w-full"
      name={question.question_text}
      id={question.id + "__input__dropdown"}
    >
      {question.choices.map((choice) => (
        <option key={choice.id} value={choice.choice_text}>
          {choice.choice_text}
        </option>
      ))}
    </select>
  );
}
