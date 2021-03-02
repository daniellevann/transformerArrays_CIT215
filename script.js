var wrapEle = document.body.querySelector(".wrapper");

var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

function createTransformer(tsf) {
  var ele = document.createElement("div");
  ele.classList.add("character");

  var nameEle = document.createElement("div");
  var classEle = document.createElement("div");
  var vehicleEle = document.createElement("div");

  nameEle.innerHTML = "Name: " + tsf.name;
  classEle.innerHTML = "Class: " + tsf.class.toUpperCase();
  vehicleEle.innerHTML = "Vehicle: " + tsf.vehicle;

  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehicleEle);

  if (tsf.afl == "autobot") {
    ele.classList.add("autobot");
    ele.classList.add("img");
    var img = document.createElement("img");
    img.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    ele.appendChild(img);
  } else {
    ele.classList.add("decepticon");
    ele.classList.add("img");
    var img = document.createElement("img");
    img.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    ele.appendChild(img);
  }

  if (tsf.vehicle == "truck") {
    vehicleEle.style.color = "blue";
  } else if (tsf.vehicle == "tank") {
    vehicleEle.style.color = "green";
  } else if (tsf.vehicle == "car") {
    vehicleEle.style.color = "gold";
  } else {
    vehicleEle.style.color = "white";
  }

  wrapEle.appendChild(ele);
}

for (var i = 0; i < chrs.length; i++) {
  createTransformer(chrs[i]);
}