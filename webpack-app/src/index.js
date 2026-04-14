import "./style.css";
import { sum, multiply } from "./math";

const app = document.getElementById("app");

const result1 = sum(10, 5);
const result2 = multiply(4, 6);

app.innerHTML = `
  <div class="card">
    <h1>Webpack Mini App</h1>
    <p class="result">10 + 5 = ${result1}</p>
    <p class="result">4 × 6 = ${result2}</p>
  </div>
`;