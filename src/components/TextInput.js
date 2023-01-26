export default function TextInput(question) {
  return (
    <input
      className="input input-bordered focus:invalid:border-red-600 w-full"
      type="text"
      placeholder="Your response..."
      required={Boolean(question.required)}
    />
  );
}
