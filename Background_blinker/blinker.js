const randomcolor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalid;
let Start = function () {
  if (!intervalid) {
    intervalid = setInterval(changecolor, 2000);
  }

  function changecolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};

let Stop = function () {
  clearInterval(intervalid);
  // intervalid = null;
};

document.querySelector('#start').addEventListener('click', Start);
document.querySelector('#stop').addEventListener('click', Stop);
