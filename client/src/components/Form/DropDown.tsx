type DropDown = {
  question: string;
  name: string;
  options: string[];
};

const DropDown = ({ question, name, options }: DropDown) => (
  <form className="bg-white justify-center px-8 mt-10">
    <label className="content-center">{question}</label>
    <br />
    <select name={name}>
      <option value="" disabled selected hidden>
        Select Option
      </option>
      {options.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  </form>
);

export default DropDown;
