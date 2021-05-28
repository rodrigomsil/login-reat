import { AuthProvider } from "./auth";

function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;