import NavBar from "./components/NavBar";
import Portada from "./components/welcome/Portada";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <NavBar/>
      <Portada/>
    </div>
  );
}