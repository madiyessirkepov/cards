import { h } from "preact";
import style from "./style";

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

let R = 800;
let S = 30;
let phi = 0;
let phi2 = 0;
let i = 0;
let angles = [];
let X = [];
let segments = 320;
let numCards = 10;
const cards = [];
for (let j = 0; j < numCards; ++j) cards.push(j);

for (let j = 0; j < segments; ++j) {
  X[j] = {
    x: R * Math.sin((getIndex(j) / segments) * 2 * Math.PI),
    y: -R * Math.cos((getIndex(j) / segments) * 2 * Math.PI),
  };
}

function getIndex(i) {
  return 2 * (i - Math.floor(numCards / 2)) + 1 - (numCards % 2);
}

console.log(X);
while (phi < 2 * Math.PI) {
  angles[i] = phi;
  phi += 2 * Math.asin(S / 2 / R);
  i++;
}

const Home = () => (
  <div class={style.home}>
    {cards.map((card, index) => (
      <div
        class={style.card}
        style={{
          position: "absolute",
          top: "800px",
          left: "800px",
          transform: `translate(${X[index].x}px,${X[index].y}px) 
             rotate(${(getIndex(index) / segments) * 2 * Math.PI}rad) `,
          marginRight: -20 + "px",
          color: "white",
          //marginTop: 2 * Math.abs(cardRotations[index + 1]) + "px",
          backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
        }}
      >
        {card}
      </div>
    ))}
  </div>
);

export default Home;
