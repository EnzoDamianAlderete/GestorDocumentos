import { useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";
import AddDocumentButton from "./buttons/AddDocumentButton";

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
      
      const [data, setData] = useState<Document[]>([
        { 
          id: 1,
          name: 'Documento 1', 
          fecha: "20/10/2020", 
          tipo: 'privado',
          owner: 'julio',
          descripcion:"descripcion1",
          file: "/TestDocumento 1.pdf",
        },
        { 
          id: 2,
          name: 'Documento 2', 
          fecha: "20/10/2022", 
          tipo: 'publico',
          owner: 'juan',
          descripcion:"descripcion2",
          file: "/TestDocumento 2.pdf",
        },
        { 
          id: 3,
          name: 'Documento 3', 
          fecha: "10/10/2023", 
          tipo: 'publico',
          owner: 'juan',
          descripcion:"",
          file: "/TestDocumento 3.pdf",
        },
        { 
          id: 4,
          name: 'Documento 4', 
          fecha: "20/11/2023", 
          tipo: 'publico',
          owner: 'juan',
          descripcion:"descripcion4",
          file: "/TestDocumento 4.pdf",
        },
      ]);
  
    return(
      <>
      
        <AddDocumentButton data={data} setData={setData}/>

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
              {data.map((doc, index) => (
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
      </>
    )
}

export default TableComponent;