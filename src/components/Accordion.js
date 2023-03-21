import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
function Accordion({ items }){
    const [expandedIndex, setExpandedIndex] = useState(-1);
    //for functions with more than a line logic
    //it is called on the element like this onClick={() => handleClick(index)}
    const handleClick = (nextItem) => {
        setExpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === nextItem){
                return -1;
            }else{
                return nextItem;
            }
        })
        
        if(expandedIndex === nextItem){
            setExpandedIndex(-1);
        }else{
            setExpandedIndex(nextItem);
        }
    }

    //for functionalities with only one line of logic
    //() =>{setExpandedIndex(index)}
    const renderedItems = items.map((item, index)=> {
        const isExpanded = index === expandedIndex;
        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown/> : <GoChevronRight/>}
        </span>
        return(
            <div key={item.id} >
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
                    onClick={() =>handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });
    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;