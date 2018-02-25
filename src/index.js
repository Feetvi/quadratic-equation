module.exports = function solveEquation(equation) {
   var arr = equation.split(" "); // разделяем строку по пробелу и заносим в массив
   var a = parseInt(arr[0]); // берём числовые значения
   var b = parseInt(arr[3] + arr[4]); 
   var c = parseInt(arr[7] + arr[8]);
   var d = Math.pow(b, 2) - (4 * a * c); // вычисляем дискриминант
   var x1 = Math.round(-1 * b + Math.sqrt(d)) / (2 * a); // вычисляем корни уравнения
   var x2 = Math.round(-1 * b - Math.sqrt(d)) / (2 * a);
   // заносим результаты в массив и сортируем по возрастанию
   var res = [x1, x2].sort(function (a, b) { 
   	return a - b;
   });
   // возвращаем результаты
   return res;
}

// console.log(solveEquation('2 * x^2 - 10 * x + 12'));