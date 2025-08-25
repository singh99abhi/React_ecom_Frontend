import { createContext,use,useContext,useState,type ReactNode } from "react";

interface FilterContexttype{
    searchQuery:string,
    setSearchQuery:(query:string)=>void;
    selectedCategory:string,
    setSelectedCategory:(category:string)=>void,
    minPrice:number|undefined,
    setMinPrice:(price:number |undefined)=>void,
    maxPrice:number | undefined,
    setMaxprice:(price:number | undefined)=>void,
    keyword:string,
    setKeyword:(keyword:string)=>void
}

const FilterContext= createContext<FilterContexttype |undefined>(undefined)


export const FilterProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [searchQuery,setSearchQuery]=useState<string>("")
    const [selectedCategory,setSelectedCategory]=useState<string>("")
    const [minPrice,setMinPrice]=useState<number|undefined>(undefined)
    const [maxPrice,setMaxprice]=useState<number|undefined>(undefined)
    const [keyword,setKeyword]=useState<string>('')

    return <FilterContext.Provider value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxprice,
        keyword,
        setKeyword
    }}>
        {children}
    </FilterContext.Provider>
}


export const useFilter=()=>{
    const context=useContext(FilterContext)
    if(context===undefined){
        throw new Error('use filter must always be used in context Provider')
    }
    return context
}