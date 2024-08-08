import React, { useState } from 'react';

function InventoryManagement() {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = {
      patrimonio: '',
      modelo: '',
      tipo: '',
      status: '',
      localizacao: '',
      dataAquisicao: ''
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h2>Gestão de Estoque</h2>
      <button onClick={handleAddItem}>Adicionar Item</button>
      <table>
        <thead>
          <tr>
            <th>Patrimônio</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Status</th>
            <th>Localização</th>
            <th>Data de Aquisição</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td><input type="text" value={item.patrimonio} /></td>
              <td><input type="text" value={item.modelo} /></td>
              <td><input type="text" value={item.tipo} /></td>
              <td><input type="text" value={item.status} /></td>
              <td><input type="text" value={item.localizacao} /></td>
              <td><input type="date" value={item.dataAquisicao} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryManagement;
