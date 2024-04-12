import './App.css';
import Contador from './componentes/Contador';
import Nombre from './componentes/Nombre';
import Calculadora from './componentes/Calculadora';
import Modal from './componentes/Modal';




function App() {
  return (
    <div className="App">
      <Contador/>
      <Nombre/>
      <Modal/>
      <Calculadora/>
     
      
    </div>
  );
}

export default App;