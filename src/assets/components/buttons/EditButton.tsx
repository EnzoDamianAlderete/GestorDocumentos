import { useState } from "react";
import ModalAddDocument from "../Modals/ModalAddDocument";

const EditButton =({data,setData,idDoc}:any)=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const documentoToEdit = data.find(documento => documento.id === idDoc);
    return(
    <>
        <button
            onClick={openModal}
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            >
           <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 19.5h-21V21h21v-1.5Z"></path>
                <path d="M19.05 6.75c.6-.6.6-1.5 0-2.1l-2.7-2.7c-.6-.6-1.5-.6-2.1 0L3 13.2V18h4.8L19.05 6.75ZM15.3 3 18 5.7l-2.25 2.25-2.7-2.7L15.3 3ZM4.5 16.5v-2.7L12 6.3 14.7 9l-7.5 7.5H4.5Z"></path>
            </svg>
        </button>

        <ModalAddDocument isOpen={isModalOpen} onClose={closeModal} data={data} setData={setData} documentoToEdit={documentoToEdit}/>
        </>
    )
}

export default EditButton;