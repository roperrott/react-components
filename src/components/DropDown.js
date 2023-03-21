import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }){
    const [isOpened, setOpened] = useState(false);
    //const [selectedOption, setSelectedOption] = useState('Select...');
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current){
                return;
            }
            if(!divEl.current.contains(event.target)){
                setOpened(false);
            }
        }
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };

    }, []);


    const handleClick = () => {
        setOpened(!isOpened);
    }

    const handleOptionSelected = (op) => {
        setOpened(false);
        onChange(op);
    }
    const renderedOptions = options.map((op) => {
       return <div className="hover:bg-sky-100 rounder cursor-pointer p-1" key={op.value} onClick={() => handleOptionSelected(op)}> {op.label} </div>
    })

    return <div className="w-48 relative" ref={divEl}>
        <Panel>
            <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </div>
        </Panel>
        
        {isOpened && <Panel className="absolute top-full"><div>{renderedOptions}</div></Panel>}
    </div>
}

export default DropDown;