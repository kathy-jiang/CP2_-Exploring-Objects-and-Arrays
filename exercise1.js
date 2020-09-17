function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  var people = [
  {
    name: "J.D. Zamfirescu",
    food: "宫保鸡丁",
    color: "blue"
  },
  {
    name: "Adam Smith",
    food: "小笼包",
    color: "red"
  },
   {
    name: "Kathy Jiang",
    food: "Sushi",
    color: "green"
  },
    {
    name: "Orange",
    food: "Orange",
    color: "orange"
  },
]

textAlign(CENTER);

for (var i = 0; i < people.length; i += 1) {
  fill(0);
  textSize(10);
  text("❤️", width/2, height/2-10);
  textSize(20);
  
  text(people[i].name, width/2, height/2-i*40);
  
  fill(people[i].color);
  
  text(people[i].food, width/2, height/2+40+i*40);
}

}
