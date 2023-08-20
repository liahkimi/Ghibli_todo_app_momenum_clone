const images = ["보우.jpg","원령.png","총집합.jpg","총집합2.jpg","키키2.jpg","토토로.jpg","토토로2.jpg","포뇨.jpg","포뇨2.jpg","포뇨3.png","하울3.jpg","하울.jfif","보은.jpg","보은3.jpg"]
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.className="bgImg"
bgImage.src = `img/${chosenImage} `;
document.body.appendChild(bgImage);