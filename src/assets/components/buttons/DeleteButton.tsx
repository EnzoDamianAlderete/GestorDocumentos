import { useState } from "react";
import ModalDelete from "../Modals/ModalDelete";

const DeleteButton =({data,setData,idDoc})=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
        <>
        <button
            onClick={openModal}
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2v12ZM9 4h6v2H9V4ZM8 8h9v12H7V8h1Z"></path>
                <path d="M9 10h2v8H9v-8Zm4 0h2v8h-2v-8Z"></path>
            </svg>
        </button>
        <ModalDelete isOpen={isModalOpen} onClose={closeModal} data={data} setData={setData} idDoc={idDoc}/>
        </>
    )
}

export default DeleteButton;