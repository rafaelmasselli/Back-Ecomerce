import React from "react";
import { Link } from "react-router-dom";
import { Image, Background, Icone, Fonte } from "./style";

const Card = (props) => {
  return (
    <>
      <Background>
        <Fonte>{props.title}</Fonte>
        <Link to={`/detalhes/${props.id}`}>
          <Image src={props.image} alt={props.title} />
        </Link>
      </Background>
    </>
  );
};

export default Card;
