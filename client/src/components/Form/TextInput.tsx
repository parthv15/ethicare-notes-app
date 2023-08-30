type TextInputProps = {
  question: string;
};

const TextInput = ({ question }: TextInputProps) => (
  <form className="bg-white justify-center px-8 mt-10">
    <label className="content-center">{question}</label>
    <br />
    <input
      type="text"
      className="w-1/2 bg-gray-30 border border-gray-300 text-gray-900 rounded-lg block p-2.5 dark:bg-gray-700 h-3/4"
    />
  </form>
);

export default TextInput;
