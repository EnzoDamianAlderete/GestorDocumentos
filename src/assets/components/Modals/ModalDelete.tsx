const ModalDelete = ({ isOpen, onClose,data,setData,idDoc }:any) => {
  if (!isOpen) return null;
  const removeDocument = (id: number) => {
    console.log(idDoc)
    setData(data.filter(document => document.id !== id));
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Eliminar documento</h2>
        <p className="mb-4">¿Esta seguro de que desra eliminar el documento?</p>
        <div className='flex gap-4 justify-center items-center'>
            <button
            onClick={()=>removeDocument(idDoc)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
            Eliminar
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

export default ModalDelete;
