let input1, input2, i, j, flag;

input1 = window.prompt("Enter lower bound of the interval: ");

input2 = window.prompt("Enter upper bound of the interval: ");

console.log(("Prime numbers between " + input1 + " and " + input2) << " are: ");

for (i = input1; i <= input2; i++) {
  if (i == 1 || i == 0) continue;



  flag = 1;

  for (j = 2; j <= i / 2; ++j) {
    if (i % j == 0) {
      flag = 0;
      break;
    }
  }

  if (flag == 1) document.write(i, " ");
}
