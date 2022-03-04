import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import Frase2 from './components/Frase2';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';




function App() {
  return (
    <div className="App">
      <h1>ola react</h1>
      <p>meu primeiro app</p>
      
      <Frase/>
      <Frase2/>
      <SayMyName nome="souza"/>
      <SayMyName nome="aline"/>
      <SayMyName nome="lavinia"/>
      <SayMyName nome="laurinha"/>
      <Pessoa 
      foto="https://via.placeholder.com/100"
      nome="souza" 
      idade="44" 
      profissao="programador"/>
      
      
    
    </div>
  )
}

export default App
