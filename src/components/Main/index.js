import { useState } from "react";
 
import { api } from "../../services/api";
 

import "./styles.css";
import { useAuth } from "../../hooks/auth";

export function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { signIn, setLoading } = useAuth();

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      if (!email || !password) {
        alert("Digite O email ou  a senha");
        return;
      }

      const { data } = await api.post(`auth/login`, {
        password,
        email,
      });
      setLoading(true)
      await signIn({ email, password });
      setLoading(false)
      alert("Usuario Logado com sucesso");

    

      console.log("data: ", data);
    } catch (error) {
      setLoading(false)
      console.log("error: ", error);
      alert("Usuario ou senha invalidos")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container-main">
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="button" type="submit">
        Logar
      </button>
    </form>
  );
}