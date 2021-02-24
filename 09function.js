let milk = 20;
let egg = 30;
let meat = 70;

let myamount = 100;

function buy_milk(){
    myamount=myamount-milk;
    console.log(myamount);
}
function buy_egg(){
    myamount -= egg;
    console.log(myamount);
}
function buy_meat(){
    myamount -= meat;
    console.log(myamount);
}
// buy_milk();
// buy_egg();
// buy_meat();

//////////////////////////

function buy(list){
    var i=0;
    var len = items.length;
    for(i;i<len;i++){
        list[i].call()
    }
}
var items =[buy_egg, buy_meat, buy_milk, buy_meat, buy_milk];


buy(items);