import { TextInput } from "flowbite-react"

export const InputFilter =({ filterText, onFilterChange }:any)=>{

    return(
            <div className="w-[300px]">
                <TextInput id="nombre"
                type="text"
                placeholder="Filtrar por Owner o Nombre de documento"
                value={filterText}
                onChange={(e) => onFilterChange(e.target.value)}/>
            </div>
    )
}