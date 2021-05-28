import './App.css';
import AppProvider from "./hooks";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <AppProvider><Login></Login></AppProvider>
    </>
  );
}

export default App;