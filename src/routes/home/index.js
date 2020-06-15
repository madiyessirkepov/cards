import { h } from "preact";
import style from "./style";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cardRotations = {
  1: -25,
  2: -20,
  3: -15,
  4: -10,
  5: -5,
  6: 5,
  7: 10,
  8: 15,
  9: 20,
  10: 25,
};

const Home = () => (
  <div class={style.home}>
    {cards.map((card, index) => (
      <div
        class={style.card}
        style={{
          transform: `rotate(${cardRotations[index + 1]}deg)`,
          transformOrigin: "center bottom",
          marginRight: -20 + "px",
          color: "white",
          marginTop: 2 * Math.abs(cardRotations[index + 1]) + "px",
          backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
        }}
      >
        {card}
      </div>
    ))}
  </div>
);

export default Home;
