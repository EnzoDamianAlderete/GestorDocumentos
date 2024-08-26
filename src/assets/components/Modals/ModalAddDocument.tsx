import { Datepicker, Label, TextInput } from "flowbite-react";
import { SelectInput } from "../FormsComponents/SelectInput";
import { FileInputComponent } from "../FormsComponents/FileInputComponent";
import { useState } from "react";

const ModalAddDocument = ({ isOpen, onClose,data,setData,documentoToEdit }:any) => {
  interface DocumentType {
    id: number;
    name: string;
  }
const typesDocuments:DocumentType[] =[
    {
        id:1,
        name:"Público",
    },
    {
        id:2,
        name:"Privado",
    },
    {
        id:3,
        name:"Dart",
    },
]

const owners:any[] =[
    {
        id:1,
        name:"Julio Perez",
    },
    {
        id:2,
        name:"Leo Messi",
    },
    {
        id:3,
        name:"Emiliano Martinez",
    },
    {
        id:4,
        name:"Florencia Romero",
    },
]
  if (!isOpen) return null;
  const [selectedType, setSelectedType] = useState('');
  const [selectedOwner, setSelectedOwner] = useState('');
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
  const [formValues, setFormValues] = useState({
    id:generateUniqueId,
      name: '', 
      fecha: "", 
      tipo: selectedType,
      owner: selectedOwner,
      file: '',
      descripcion:"",
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
        tipo: selectedType,
        owner: selectedOwner,
      });
    };
    const [errorMsg,setErrorMsg]= useState("")
    const addDocument = (doc: Document) => {
      if (!formValues.name) {
        setErrorMsg("El campo 'Nombre del documento' es requerido.");
        return;
      }
    
      if (!selectedType) {
        setErrorMsg("El campo 'tipo' es requerido.");
        return;
      }
    
      if (!selectedOwner) {
        setErrorMsg("El campo 'owners' es requerido.");
        return;
      }
    
      // if (!formValues.file) {
      //   setErrorMsg("El campo documento es requerido.");
      //   return;
      // }
      setData([...data, doc]);
      onClose()
    };

    const updateDocumentById = (id, newValues) => {
      setData((prevData) => 
        prevData.map((doc) => 
          doc.id === id ? { ...doc, ...newValues } : doc
        )
      );
    };

    const handleUpdate = () => {
      updateDocumentById(documentoToEdit?.id, formValues);
    };
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
          <h2 className="text-xl font-semibold mb-4">{documentoToEdit?.id ? "Editar documento" : "Agregar documento"}</h2>
          <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <div className="flex-grow">
                <div className="mb-2">
                <Label htmlFor="name" value="Nombre del documento" />
                </div>
                <TextInput id="name" name="name" type="text" sizing="md" className="w-full" onChange={handleInputChange} value={documentoToEdit?.name}/>
            </div>
            <div className="flex-grow">
                <div className="mb-2">
                <Label htmlFor="fecha" value="Fecha de subida" />
                </div>
                <Datepicker className="w-full" id="fecha" name="fecha"  onChange={handleInputChange}/>
            </div>
            </div>

            <div className="flex w-full justify-between gap-4">
                <div className="flex-grow">
                    <div className="mb-2 block">
                    <Label htmlFor="base" value="Tipo de documento" />
                    </div>
                    <SelectInput data={typesDocuments} selectedValue={selectedType} setSelectedValue={setSelectedType} />
                </div>

                <div className="flex-grow">
                    <div className="mb-2 block">
                    <Label htmlFor="base" value="Owners" />
                    </div>
                    <SelectInput data={owners} selectedValue={selectedOwner} setSelectedValue={setSelectedOwner} value={documentoToEdit?.owner}/>
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="descripcion" value="Descripción" />
                </div>
                <TextInput id="descripcion" name="descripcion" multiple={true} type="text" sizing="lg" onChange={handleInputChange} value={documentoToEdit?.descripcion}/>
            </div>
            <FileInputComponent/>
            </div>
            <p>{errorMsg}</p>
          <div className='flex justify-between items-center mt-4'>
              <button
              onClick={documentoToEdit?.id ? handleUpdate : ()=>addDocument(formValues)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
              {documentoToEdit?.id ? "Editar" : "Agregar"}
              </button>
              <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
              Cancelar
              </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalAddDocument;
  