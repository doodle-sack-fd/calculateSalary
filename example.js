let calculateSalary = function (dirtSalary) {
  let percent = 0.65;
  if(dirtSalary >= 100000){
    percent = 0.55;
  }
  let whiteSalary = Math.floor(dirtSalary * percent);
  return whiteSalary;
}
