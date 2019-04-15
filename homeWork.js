let money,
    time;
money = prompt("Ваш буджетный месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
 let appData = {
     money, 
     timeData:time,
     expenses:{},
     optionalExpenses:null,
     income : {},
     savings:false
 };
 appData.expenses[0]= prompt("Введите обязательную статью расходов в этом месяце");
 appData.expenses[1]=prompt("Во сколько обойдется?");
 alert(appData.money);