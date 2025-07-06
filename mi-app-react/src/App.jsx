import React, { useState } from 'react';
import ToggleHabilidades from './components/ToggleHabilidades';
import Habilidades from './components/Habilidades';
import { cvData } from './data/cvData';

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const toggleMostrar = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  return (
    <div>
      <ToggleHabilidades mostrar={mostrarHabilidades} toggleMostrar={toggleMostrar} />
      {mostrarHabilidades && <Habilidades habilidades={cvData.habilidades} />}
    </div>
  );
}

const [tecnologias, setTecnologias] = useState(cvData.tecnologias);

const agregarTecnologia = (tecno) => {
  setTecnologias([...tecnologias, tecno]);
};
export default App