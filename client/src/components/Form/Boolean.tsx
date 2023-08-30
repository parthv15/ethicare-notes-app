type Boolean = {
  question: string;
  name: string;
};

const Boolean = ({ question, name }: Boolean) => (
  <form className="bg-white justify-center px-8 mt-10">
    <label className="content-center">{question}</label>
    <br />
    <div>
      <input type="radio" className="mx-2" name={name} />
      <label>Yes</label>
    </div>
    <div>
      <input type="radio" className="mx-2" name={name} />
      <label>No</label>
    </div>
  </form>
);

export default Boolean;
