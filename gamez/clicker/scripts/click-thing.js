import { score, setScore } from "./init.js";

const click_thing = document.getElementById("click-thing");
const score_label = document.getElementById("score-label");

click_thing.addEventListener("click", () => {
    onClick_thingClicked();
    
});

function onClick_thingClicked() {
    setScore(score + 1);
    score_label.textContent = `score: ${score}`;
}