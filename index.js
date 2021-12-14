function clock() {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");

  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
}
const interval = setInterval(clock, 1000);
