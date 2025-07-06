import React, { useState } from 'react';
import ToggleHabilidades from './components/ToggleHabilidades';
import Habilidades from './components/Habilidades';
import { cvData } from './data/cvData';
import StackTecnologias from './components/StackTecnologias';
import FormularioTecnologia from './components/FormularioTecnologia';



function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const toggleMostrar = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  return (
    <div>
      <ToggleHabilidades mostrar={mostrarHabilidades} toggleMostrar={toggleMostrar} />
      <FormularioTecnologia onAgregar={agregarTecnologia} />
      <StackTecnologias tecnologias={tecnologias} />
      {mostrarHabilidades && <Habilidades habilidades={cvData.habilidades} />}
    </div>
  );
}

const [tecnologias, setTecnologias] = useState(cvData.tecnologias);

const agregarTecnologia = (tecno) => {
  setTecnologias([...tecnologias, tecno]);
};
export default App