import React, {useState} from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { DivF } from "./style";

const Cadastro = () => {

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nickname, setNickname] = useState("");
  const [confirmPassword,  setConfirmPassword] = useState("");

  const DefaultSubmit = (c) => {
    c.preventDefault();

    const data = {
      name: name,
      nickname: nickname,
      email: email,
      birthday: birthday,
      image: image,
      password: password,
      confirmpassword: confirmPassword,
    };

    axios
      .post("/users", data)
      .then((res) => {
        alert("Cadastro Efetuado com sucesso!!");
        navigate("/Login");
      })
      .catch((error) => {
        const { data } = error.response;
        alert(data.message);
      });
  };

  return (
    <div>
       <div>
        <form onSubmit={DefaultSubmit}>
          <DivF>
            <p>Nome</p>
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(c) => setName(c.target.value)}
            />
            <p>Email</p>
            <input
              type="email"
              placeholder="Exemple@Exempre.com"
              onChange={(c) => setEmail(c.target.value)}
            />
            <p>Perfil Url</p>
            <input
              type="url"
              placeholder="adicione uma imagem url"
              onChange={(c) => setImage(c.target.value)}
            />
            <p>NickName</p>
            <input
              type="text"
              placeholder="Nick Name"
              onChange={(c) => setNickname(c.target.value)}
            />
            <p>Senha</p>
            <input
              type="password"
              placeholder="Use senhas forte"
              onChange={(c) => setPassword(c.target.value)}
            />
            <p>Confirme a senha</p>
            <input
              type="password"
              placeholder="Confirme a senha"
              onChange={(c) => setConfirmPassword(c.target.value)}
            />
            <p>Data de aniversario</p>
            <input
              type="date"
              placeholder="Use senhas forte"
              onChange={(c) => setBirthday(c.target.value)}
            />

            <button type="submit">Entrar</button>
          </DivF>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
