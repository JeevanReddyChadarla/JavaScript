let milk = 20;
let egg = 30;
let meat = 70;

let myamount = 200;

function checkBal(amt){
    if(myamount - amt >=0){
        return true
    }else{
        console.log('Insufficent Balance');
        return false
    }
}

function buy_milk(){
    if(checkBal(milk)){
        myamount=myamount-milk;
        console.log('milk success');
    }
    console.log('Balance is ' +myamount);
}
function buy_egg(){
    if(checkBal(egg)){
        myamount -= egg;
        console.log('egg success');
    }
    console.log('Balance is '+myamount);
}
function buy_meat(){
    if(checkBal(meat)){
        myamount -= meat;
console.log('meat success');
    }
    console.log('Balance is '+myamount);
}

function buy(list){
    var i=0;
    var len = items.length;
    for(i;i<len;i++){
        list[i].call()
    }
}
var items =[buy_egg, buy_meat, buy_milk, buy_meat, buy_milk];


buy(items);