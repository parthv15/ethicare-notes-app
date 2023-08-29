import cover from "../../img/img1.jpg";
import logo from "../../img/logo.png";

const LeftImageDiv = () => {
  return (
    <div className="relative w-1/2 h-full flex flex-col">
      <div className="absolute top-[10%] left-[10%] flex flex-col">
        <img src={logo} className="h-24 w-24"/>
        <p className="text-sm text-white font-normal w-50 my-4">
          some text here example this text more text and text
        </p>
      </div>
      <img src={cover} className="w-full h-full object-cover" />
    </div>
  );
};

export default LeftImageDiv;
