import useSort from "../hooks/use-sort";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import Table from "./Table";

function SortableTable(props){
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort({data, config});

    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        };

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {column.label}
                        {getIcons(column.label, sortBy, sortOrder)}
                    </div>
                </th>
            )
        };
    });
   
    return  <Table {...props} config={updatedConfig} data={sortedData} />
}

function getIcons(label, sortBy, sortOrder){
    if (label !== sortBy){
        return <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>;
    };
    if(sortOrder === null){
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>;
    }else if(sortOrder === 'asc'){
        return <GoArrowSmallUp/>
    }else if(sortOrder === 'desc'){
        return <GoArrowSmallDown/>
    }
}

export default SortableTable;