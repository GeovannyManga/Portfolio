import NavBar from "./components/NavBar";
import Portada from "./components/welcome/Portada";
export default function Home() {
  return (
    <div className="h-screen w-full h-screen">
      <NavBar/>
      <Portada></Portada>
    </div>
  );
}