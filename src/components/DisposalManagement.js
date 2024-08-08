import React, { useState } from 'react';

function DisposalManagement() {
  const [disposals, setDisposals] = useState([]);

  const handleAddDisposal = () => {
    const newDisposal = {
      patrimonio: '',
      motivo: '',
      dataDescarte: '',
      destino: ''
    };
    setDisposals([...disposals, newDisposal]);
  };

  return (
    <div>
      <h2>Gestão de Descarte</h2>
      <button onClick={handleAddDisposal}>Adicionar Descarte</button>
      <table>
        <thead>
          <tr>
            <th>Patrimônio</th>
            <th>Motivo</th>
            <th>Data de Descarte</th>
            <th>Destino</th>
          </tr>
        </thead>
        <tbody>
          {disposals.map((disposal, index) => (
            <tr key={index}>
              <td><input type="text" value={disposal.patrimonio} /></td>
              <td><input type="text" value={disposal.motivo} /></td>
              <td><input type="date" value={disposal.dataDescarte} /></td>
              <td><input type="text" value={disposal.destino} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisposalManagement;
