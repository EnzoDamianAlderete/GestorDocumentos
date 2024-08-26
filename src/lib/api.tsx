export const fetchDocuments = async () => {
    try {
      const response = await fetch('/documentos.json');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.documents; // Retornamos el array de documentos
    } catch (error) {
      console.error('Error en el fetch:', error);
      throw error;
    }
  };