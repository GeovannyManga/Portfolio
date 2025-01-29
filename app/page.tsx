import NavBar from "./components/NavBar";
import Portada from "./components/welcome/Portada";
import Luna from "./components/welcome/Luna";
export default function Home() {
  return (
    <div className="w-full h-content
">
      <NavBar/>
      <Portada/>
      <Luna/>
    </div>
  );
}