import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InventoryManagement from './components/InventoryManagement';
import DisposalManagement from './components/DisposalManagement';
import BackupManagement from './components/BackupManagement';
import DocumentManagement from './components/DocumentManagement';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/inventory">Gestão de Estoque</Link></li>
            <li><Link to="/disposal">Gestão de Descarte</Link></li>
            <li><Link to="/backup">Gestão de Backups</Link></li>
            <li><Link to="/documents">Gestão de POPs e Tutoriais</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/disposal" element={<DisposalManagement />} />
          <Route path="/backup" element={<BackupManagement />} />
          <Route path="/documents" element={<DocumentManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
