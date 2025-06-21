import {cn} from "@lib/utils";

export const FilterButton = ({
    setFilter,
    filter,
    gfilter
}) => {
    return (
        <div onClick={()=>{setFilter(filter)}} className={cn("text-sm hover:cursor-pointer px-2 py-1 rounded-md font-semibold", (gfilter === filter) ? "bg-primary text-white" : "bg-gray-200 text-gray-700")}>{(filter === "")? "all": filter}</div>
    )
}