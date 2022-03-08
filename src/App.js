import NavBar from "./components/navBar";
import Header from "./components/header";
import Capitulo from "./components/capitulo";



function App() {

  var titulo= "capi 1"
  return (
    <div>
      <NavBar />
      <Header />
      <Capitulo
        paragraph1="Capitulo 1"
        subtitle="Modelo Operativo"
        imgUrl="cap1"
        videoUrl="https://www.youtube.com/embed/ASjXTS4dKq0"
       />
    </div>
  );
}

export default App;
