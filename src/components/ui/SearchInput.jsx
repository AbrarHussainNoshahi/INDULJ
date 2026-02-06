import { TextInput } from "flowbite-react";
import { HiSearchCircle } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";
import './SearchInput.css';

<style>
  
</style>

function SearchInput({ icon, placeholder, buttonTxt }) {
  return (
    <div className="flex items-center">
      <TextInput icon={icon} type="text" placeholder={placeholder} className="w-56 custom-input" />
      <Button size="sm" variant="danger" className='focus:ring-0! h-10 z-10 -ml-2.5' >{buttonTxt}</Button>
    </div>
  );
}

export default SearchInput;
