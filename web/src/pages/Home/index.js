import { useState, useEffect } from "react";
import { Display } from "./style";
import Banner from "./../../components/estruture/Banner";
import Card from "./../../components/estruture/Card";
import axios from "axios";

const Home = () => {
  const [games, setGames] = useState([]);

  const getAll = async () => {
    await axios.get("/games").then((res) => {
      setGames(res.data);
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div>
        <Banner />
      </div>
      <Display>
        {games.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            image={item.image}
            title={item.name}
            price={item.price}
          />
        ))}
      </Display>
    </>
  );
};

export default Home;
