import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./../../components/estruture/Card/index";
import { Container } from "./style";

const Carrinho = () => {
  const [wishList, setWishList] = useState([]);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
    if (localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("/users", config).then((res) => {
        setWishList(res.data.Games);
      });
    }
  });

  return (
    <div>
      <h1>Carrinho de compras</h1>
      <Container>
        {wishList.length > 0 ? (
          wishList.map((game) => (
            <Card
              key={game.id}
              image={game.image}
              name={game.name}
              price={game.price}
              id={game.id}
            />
          ))
        ) : (
          <h2>Lista vazia</h2>
        )}
      </Container>
    </div>
  );
};

export default Carrinho;
