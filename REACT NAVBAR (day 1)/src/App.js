import { Link } from "./link";
import { Logo } from "./logo";
import {Button} from "./button"
import "./app.css"
export default function App() {
  return (
    <div className="nav">
      <Logo/>
      <Link/>      
      <Button/>
    </div>
  );
}
