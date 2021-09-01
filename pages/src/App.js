import logo from './logo.svg';
import './App.css';
import AppMeny from "./meny/AppMeny";
import Header from "./header/header";
import About from "./about/about";
import Project from "./project/project";

function App() {
  return (
    <div className='app'>
        <AppMeny/>
        <Header/>
        <About/>
        <Project/>
    </div>
  );
}

export default App;
