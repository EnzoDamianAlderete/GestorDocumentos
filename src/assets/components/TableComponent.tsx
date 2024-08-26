import { useEffect, useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";
import AddDocumentButton from "./buttons/AddDocumentButton";
import { fetchDocuments } from "../../lib/api";
import { TextInput } from "flowbite-react";
import { InputFilter } from "./InputFilter";

const TableComponent =()=>{
    type Document = {
        id: number|null|undefined;
        name: string;
        fecha: string;
        tipo: string;
        owner: string;
        descripcion: string;
        file: string;
      };
      
      const [data, setData] = useState<Document[]>([]);
      const [filterText, setFilterText] = useState("");
      useEffect(() => {
        const getData = async () => {
          try {
            const documents = await fetchDocuments();
            setData(documents);
          } catch (error) {
            console.error('Error al obtener los documentos:', error);
          }
        };
    
        getData();
      }, []);

      const handleFilterChange = (text) => {
        setFilterText(text);
      };
    
    
      const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.owner.toLowerCase().includes(filterText.toLowerCase())
      );
    return(
      <>
        <div className="flex w-full justify-between flex-row-reverse">
          <AddDocumentButton data={data} setData={setData}/>
          <InputFilter filterText={filterText} onFilterChange={handleFilterChange}/>
        </div>
        { (filteredData.length > 0) ? 
        <table style={{ width: '100%', borderCollapse: 'collapse' }} className="">
        <thead>
            <tr className="bg-violet-200">
            <th className="border border-gray-300 font-semibold">Nombre del documento</th>
            <th className="border border-gray-300 font-semibold">Fecha de subida</th>
            <th className="border border-gray-300 font-semibold">Tipo documento</th>
            <th className="border border-gray-300 font-semibold">Owner</th>
            <th className="border border-gray-300 font-semibold">Descripción</th>
            <th className="border border-gray-300 font-semibold">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
            filteredData?.map((doc, index) => (
            <tr key={index}>
                <td className="border border-gray-300">
                <a href={doc.file} download="documento.pdf">
                  {doc.name}
                  </a>
                  </td>
                <td className="border border-gray-300">{doc.fecha}</td>
                <td className="border border-gray-300">{doc.tipo}</td>
                <td className="border border-gray-300">{doc.owner}</td>
                <td className="border border-gray-300">{doc.descripcion ? doc.descripcion :"Sin descripción"}</td>
                <td className="border border-gray-300"><DeleteButton data={data} setData={setData} idDoc={doc.id}/> <EditButton data={data} setData={setData} idDoc={doc.id}/></td>
            </tr>
            ))}
        </tbody>
        </table>
        :
         <h2 className="mt-10">Sin datos</h2>
      }

      </>
    )
}

export default TableComponent;