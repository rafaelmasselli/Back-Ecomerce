import axios from "axios";
import { useEffect, useState } from "react";
import { Geral, Container, Icon, Logo } from "./style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [montado, SetMontado] = useState(false);

  useEffect(() => {
    SetMontado(true);
    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios.get("/auth/profile", config).then((res) => {
        setUser(res.data);
        setLogged(true);
      });
    }
  }, [montado]);

  const handleLogoOff = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Geral>
      <Container>
        {logged ? (
          <>
            <figure>
              <Logo src={user.image} />
            </figure>
            <p>{user.nickname}</p>
            <div>
              <h2>Configurações de usuário</h2>
              <h3>{"Nome: " + user.name}</h3>
              <h3>{"Email: " + user.email}</h3>
            </div>
            <div>
              <h3>Carrinho de compras</h3>
              <figure>
                <Link to="/compras">
                  <Icon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0y9cR5sjyiBzghzstYD6VrecPGoT1TJQMQ&usqp=CAU" />
                </Link>
              </figure>
            </div>
            <button onClick={handleLogoOff}>Sair</button>
          </>
        ) : (
          <>
            <h1>Nenhum perfil logado</h1>
            <figure>
              <Logo src="https://www.thementes.com.br/blog/wp-content/uploads/2012/01/zelda_puzzle.jpg" />
            </figure>
            <Link to="/register">
              <h2>Deseja se cadastrar?</h2>
            </Link>
          </>
        )}
      </Container>
    </Geral>
  );
};

export default Profile;
