let hour = document.getElementById("hrValue");
let min = document.getElementById("minValue");
let sec = document.getElementById("secValue");
let ampm = document.getElementById("ampm");

const updateTime = () => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  min.innerText = m < 10 ? "0" + m : m;
  sec.innerText = s < 10 ? "0" + s : s;

  if (h < 12) {
    ampm.innerText = "AM";
  } else {
    ampm.innerText = "PM";
    h = h % 12;
  }
  hour.innerText = h < 10 ? "0" + h : h;
  setInterval(updateTime, 1000);
};
updateTime();
