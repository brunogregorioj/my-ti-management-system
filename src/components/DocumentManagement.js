import React, { useState } from 'react';

function DocumentManagement() {
  const [documents, setDocuments] = useState([]);

  const handleAddDocument = () => {
    const newDocument = {
      titulo: '',
      conteudo: ''
    };
    setDocuments([...documents, newDocument]);
  };

  return (
    <div>
      <h2>Gestão de POPs e Tutoriais</h2>
      <button onClick={handleAddDocument}>Adicionar Documento</button>
      {documents.map((document, index) => (
        <div key={index} className="document">
          <input type="text" value={document.titulo} placeholder="Título" />
          <textarea value={document.conteudo} placeholder="Conteúdo"></textarea>
        </div>
      ))}
    </div>
  );
}

export default DocumentManagement;
