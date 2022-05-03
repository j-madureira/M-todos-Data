var date = new Date("05-21- 2002 23:45");
console.log(date);

//Imprimindo apenas o ano
console.log(date.getFullYear());

//Imprimindo apenas o dia
console.log(date.getDate());

//Array com os dias da semana
var semana = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"];
console.log(semana[date.getDay()]);

//Imprimindo apenas as horas
console.log(date.getHours());

//Imprimindo apenas o mês
var meses = ["Jan","Fev","Mar","Apr","Mai","Junh","Julh","Ago","Sep","Out","Nov","Dec"];
console.log(meses[date.getMonth()]);

