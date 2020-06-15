import { h } from "preact";
import style from "./style";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// dynamic
const rate = 4;
const firstElementDegree = -(cards.length % 2 == 0
  ? 2.5 + rate * (cards.length / 2 - 1)
  : rate * Math.floor(cards.length / 2));

const cardRotations = cards.map((card, index) => firstElementDegree + index * rate);

console.log(firstElementDegree, cardRotations);
const Home = () => {
  return (
    <div class={style.home}>
      {cards.map((card, index) => (
        <div
          class={style.card}
          style={{
            transform: `rotate(${cardRotations[index]}deg)`,
            transformOrigin: "center bottom",
            marginRight: `${-30}px`, // dynamic
            color: "white",
            marginTop: `${Math.abs(cardRotations[index])}px`,
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

export default Home;
