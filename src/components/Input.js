import CheckBoxInput from "./CheckBoxInput";
import DropDownInput from "./DropDownInput";
import FileInput from "./FileInput";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";

const INPUT_TYPES = {
  1: RadioInput,
  2: DropDownInput,
  3: CheckBoxInput,
  4: TextInput,
  5: FileInput,
};

export default function Input(question) {
  const InputComponent = INPUT_TYPES[question.question_type || 1];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">{question.question_text}</h2>
      <InputComponent {...question} />
    </div>
  );
}
