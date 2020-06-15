import { h } from "preact";
import style from "./style";

const colors = [
  "#5c1798",
  "#b440a3",
  "#fc9d6d",
  "#bb32e7",
  "#96e1d5",
  "#ec308c",
  "#fc9d6d",
  "#eef399",
  "#3f9399",
  "#60fecb",
];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rate = 0.5 * cards.length;

const firstElementDegree = -(cards.length % 2 == 0
  ? rate / 2 + rate * (cards.length / 2 - 1)
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
            transform: `rotate(${cardRotations[index]}deg) translate(0, ${Math.abs(
              cardRotations[index] * (index == 0 || index == cards.length - 1 ? 1.25 : 1)
            )}px)`,

            backgroundColor: colors[index],
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

export default Home;
