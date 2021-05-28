import { Dashboard } from "../../components/Dashboard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { useAuth } from "../../hooks/auth";
import "../../App.css";

export function Login() {

  const { emailUser, loading } = useAuth();

 console.log("loading", loading)
  return (
    <div id="pagina-body">
      <Header />
      {loading && <div style={{minHeight: 'calc(100vh - 8rem)', padding: '10rem'}}> Carregando...</div>}
      {emailUser && !loading  && <Dashboard />}
      {!emailUser && !loading  && <Main /> }
      <Footer />
    </div>
  );
}