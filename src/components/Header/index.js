import { useAuth } from "../../hooks/auth";
import "./styles.css";

export function Header() {
  const { emailUser } = useAuth();

  return (
    <header className="container-header">
      <div className="container-wrapper">
        <h1>{emailUser ? `Logado` : "login "}</h1>
      </div>
    </header>
  );
}