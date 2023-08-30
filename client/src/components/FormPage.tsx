import TextInput from "./Form/TextInput.tsx";
import SingleOption from "./Form/SingleOption.tsx";
import DropDown from "./Form/DropDown.tsx";
import Boolean from "./Form/Boolean.tsx";

export default function FormPage(){
    let fruits: string[] = ['Apple', 'Orange', 'Banana'];
    return(
        <div className="flex flex-col w-screen items-center h-screen bg-stone-300">
            <div className="w-2/3 h-screen bg-white px-24">
                <TextInput question="What is your name?"/>
                <TextInput question="Email"/>
                <SingleOption question="Test Question 1" name="Test" options={fruits}/>
                <SingleOption question="Test Question 2" name="Test" options={fruits}/>
                <DropDown question="Select a Fruit" name="Test" options={fruits}/>
                <Boolean question="Select yes" name="test"/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10">Submit</button>
            </div>

        </div>
    );
}