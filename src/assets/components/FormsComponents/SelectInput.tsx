import { Select } from "flowbite-react";

export function SelectInput({ data, selectedValue, setSelectedValue }) {
  const handleChange = (e) => {
    setSelectedValue(e.target.value);  // Actualiza el valor seleccionado en el padre
  };

  return (
    <div className="max-w-md">
      <Select id="tipo" name="tipo" required value={selectedValue} onChange={handleChange}>
        {
            data.map((item:any) => {
                return(
                    <option  key={item.id} value={item.name}>{item.name}</option>
                )
            })
        }
      </Select>
    </div>
  );
}