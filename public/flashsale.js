let countdownTime = 90 * 60; // 1 tiếng 30 phút

// MARK: Phần này chỉ cho khi không có server
const localData = localStorage.getItem("localData");
if (localData && !isNaN(localData)) {
  countdownTime = localData;
}

updateTime();

const intervalId = setInterval(updateTime, 1000);

function updateTime() {
  countdownTime--;

  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = Math.floor(countdownTime % 60);

  document.getElementById("hour").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minute").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("second").textContent = seconds
    .toString()
    .padStart(2, "0");

  // MARK: Phần này chỉ cho khi không có server
  localStorage.setItem("localData", countdownTime);

  if (countdownTime <= 0) {
    clearInterval(intervalId);
    localStorage.removeItem("localData");
    document.getElementById("sales").innerHTML = "";
  }
}

