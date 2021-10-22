function moveArrows() {
  const hoursArrow = document.querySelector('.hours');
  const minutesArrow = document.querySelector('.minutes');
  const secondsArrow = document.querySelector('.seconds');

  const unit = 6;

  setInterval(() => {
    const day = new Date();

    const hoursAngle = day.getHours() * 30;
    const minutesAngle = day.getUTCMinutes() * unit;
    const secondsAngle = day.getSeconds() * unit;

    hoursArrow.style.transform = `rotateZ(${hoursAngle+(minutesAngle/12)}deg)`;
    minutesArrow.style.transform = `rotateZ(${minutesAngle}deg)`;
    secondsArrow.style.transform = `rotateZ(${secondsAngle}deg)`;
  }, 0)
};
moveArrows();