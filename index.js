const billboard = document.querySelector("#billboard>span");
let content = 0;

const count = (upToNum, interval) => {
  const id = setInterval(() => {
    content += 1;
    billboard.textContent = content;

    if (content == upToNum) {
      clearInterval(id);
    }
  }, interval);
};

const root = document.querySelector("#root");

function Timer(num, inter, name) {
  this.div = document.createElement("div");
  this.num = num;
  this.name = name;
  this.inter = inter;
  this.init = 0;
  this.set = setInterval(() => {
    this.init++;
    this.div.textContent = "" + this.name + this.init;

    if (this.init == this.num) {
      clearInterval(this.set);
    }
  }, this.inter);
}

//generating obj
const one = new Timer(300, 15, "timer1 : ");
const two = new Timer(60, 50, "timer2 : ");
const three = new Timer(80, 28, "timer3 : ");
const four = new Timer(200, 20, "timer4 : ");
const five = new Timer(150, 31, "timer5 : ");
root.appendChild(one.div);
root.appendChild(two.div);
root.appendChild(three.div);
root.appendChild(four.div);
root.appendChild(five.div);

window.addEventListener("DOMContentLoaded", () => count(200, 5));
