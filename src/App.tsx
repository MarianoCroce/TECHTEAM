import './App.css';

interface MiBotonProps{
  contenido:string
}

function MiBoton(props:MiBotonProps){
  return (
    <button className="font-medium bg-red-900 p-3 rounded uppercase " type="button">
      {props.contenido}
    </button>
  )
}

export default function App() {
  return (
    <div className="App flex justify-center items-center h-screen">
      <MiBoton contenido={"Hello there!"} />
    </div>
  );
}