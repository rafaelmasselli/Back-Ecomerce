import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Image,
  Interface,
  DetalhesX,
  PriceCarrinho,
  ImageDireta,
} from "./style";

const Detalhes = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [games, setGames] = useState({});
  const [montado, setMontado] = useState(false);

  const get = async () => {
    await axios
      .get(`/games/${id}`)
      .then((res) => {
        if (montado) {
          setGames(res.data);
          console.log(res.data);
        }
      })
      .catch(() => {
        alert("Erro jogo nao encontrado");
        navigate("/");
      });
  };
  useEffect(() => {
    setMontado(true);
    get();
  }, [montado]);

  const wishGame = async () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .patch(`/users/${id}`, "", config)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        navigate("/login");
        alert("Entre em uma conta antes de adicionar jogos no carrinho");
      });
  };

  return (
    <>
      <DetalhesX>
        <Interface>
          <h1>{games.name}</h1>
          <figure>
            <Image src={games.image} />
          </figure>
          <p>{"Ano de lancamneto: " + games.date}</p>
        </Interface>
        <PriceCarrinho>
          <div>
            <h3>Estudio</h3>
            <p>{games.studio}</p>
          </div>
          <div>
            <h3>Requisitos de processamento</h3>
            <p>{games.requirement}</p>
          </div>
          <h3>Adicionar ao carrinho</h3>
          <button onClick={wishGame}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6fbLmh5exOsj1oJIfoZPHxfeZcRo-XSbX4g&usqp=CAU" />
          </button>
        </PriceCarrinho>
      </DetalhesX>
    </>
  );
};

export default Detalhes;
