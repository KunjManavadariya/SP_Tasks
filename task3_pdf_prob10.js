const timeTo12 = function (time) {
  if (time > 24) time %= 24;
  if (time > 0 && time < 12) console.log(`${time}am`);
  else if (time > 12 && time < 24) console.log(`${time % 12}pm`);
  else if (time == 0 || time == 24) console.log('12am');
  else if (time == 12) console.log('12pm');
};
timeTo12(23);
timeTo12(24);
timeTo12(0);
timeTo12(12);
timeTo12(36);
timeTo12(37);
//greater than 36 gives wrong result
