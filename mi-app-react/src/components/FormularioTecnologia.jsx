// FormularioTecnologia.jsx
import React, { useState } from 'react';

function FormularioTecnologia({ onAgregar }) {
  const [nuevaTecno, setNuevaTecno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaTecno.trim()) {
      onAgregar(nuevaTecno);
      setNuevaTecno('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar tecnología"
        value={nuevaTecno}
        onChange={(e) => setNuevaTecno(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTecnologia;
