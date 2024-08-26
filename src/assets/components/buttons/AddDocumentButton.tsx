import { useState } from "react";
import ModalAddDocument from "../Modals/ModalAddDocument";

const AddDocumentButton =({data,setData}:any)=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    
    return(
        <>
        <button
            onClick={openModal}
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-green-800 px-4 py-2 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto"
            >
            Agregar Documento
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm4.5 10.5h-3.75v3.75h-1.5v-3.75H7.5v-1.5h3.75V7.5h1.5v3.75h3.75v1.5Z"></path>
            </svg>
        </button>

        <ModalAddDocument isOpen={isModalOpen} onClose={closeModal} data={data} setData={setData}/>
        </>
    )
}

export default AddDocumentButton;