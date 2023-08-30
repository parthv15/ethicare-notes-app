type SingleOptionProps = {
  question: string;
  name: string;
  options: string[];
};

const SingleOptionProps = ({ question, name, options }: SingleOptionProps) => (
  <form className="bg-white justify-center px-8 mt-10">
    <label className="content-center">{question}</label>
    <br />
    {options.map((item) => (
      <div>
        <input type="checkbox" className="mx-2" name={name} />
        <label>{item}</label>
      </div>
    ))}
  </form>
);

export default SingleOptionProps;
