function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  var people = [
  {
    name: "J.D. Zamfirescu",
    food: "宫保鸡丁",
    color: "blue",
    textSize: (8) 
  },
  {
    name: "Adam Smith",
    food: "小笼包",
    color: "red",
    textSize: (10) 
  },
   {
    name: "Kathy Jiang",
    food: "Sushi",
    color: "green",
   textSize: (15) 
  },
    {
    name: "Orange",
    food: "orange",
    color: "orange",
    textSize: (20) 
  },
]

textAlign(CENTER);

for (var i = 0; i < people.length; i += 1) {
  fill(0);
  textSize(20);
  text("❤️", width/2, height/2+20);
  textSize(20);
  
  text(people[i].name, width/2, height/2-i*40);
  
  fill(people[i].color);
  
  textSize(people[i].textSize+i*5);
 
  text(people[i].food, width/2, height/2+40+i*40);
  
}


}
