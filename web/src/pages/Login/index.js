import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, Formulario, Flex, RegisterLink } from "./style";

const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const DefaultSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("/auth/login", data)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        alert("Bem vindo");
        navigate("/");
      })
      .catch((error) => {
        const { data } = error.response;
        alert(data.message);
      });
  };

  return (
    <div>
      <Container>
        <Formulario onSubmit={DefaultSubmit}>
          <Flex>
            <p>Email</p>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Flex>
          <Flex>
            <p>Senha</p>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Flex>

          <button type="submit">Entrar</button>

          <RegisterLink to="/register">Novo por aqui cadastra-se</RegisterLink>
        </Formulario>
      </Container>
    </div>
  );
};

export default Register;
