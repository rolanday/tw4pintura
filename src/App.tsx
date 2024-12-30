import { getEditorDefaults } from "@pqina/pintura";
import { PinturaEditor } from "@pqina/react-pintura";
import "./App.css";
import '@pqina/pintura/pintura.css';

function App() {
  return (<div className="w-screen h-screen bg-green-300">
    <PinturaEditor
      {...getEditorDefaults()}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/2560px-Cat_August_2010-4.jpg"
    ></PinturaEditor>
  </div>);
}

export default App;
