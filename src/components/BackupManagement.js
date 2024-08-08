import React, { useState } from 'react';

function BackupManagement() {
  const [backups, setBackups] = useState([]);

  const handleAddBackup = () => {
    const newBackup = {
      tipo: '',
      data: '',
      localizacao: '',
      status: ''
    };
    setBackups([...backups, newBackup]);
  };

  return (
    <div>
      <h2>Gestão de Backups</h2>
      <button onClick={handleAddBackup}>Adicionar Backup</button>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Data</th>
            <th>Localização</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {backups.map((backup, index) => (
            <tr key={index}>
              <td><input type="text" value={backup.tipo} /></td>
              <td><input type="date" value={backup.data} /></td>
              <td><input type="text" value={backup.localizacao} /></td>
              <td><input type="text" value={backup.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BackupManagement;
