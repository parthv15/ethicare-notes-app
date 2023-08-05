import cover from "../../img/img1.jpg";

const LeftImageDiv = () => {
  return (
    <div className="relative w-1/2 h-full flex flex-col">
      <div className="absolute top-[10%] left-[10%] flex flex-col">
        <h1 className="text-4xl text-white font-bold my-4">
          Ethicare logo here
        </h1>
        <p className="text-xl text-white font-normal">
          some text here example this text more text and text
        </p>
      </div>
      <img src={cover} className="w-full h-full object-cover" />
    </div>
  );
};

export default LeftImageDiv;
