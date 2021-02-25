let num = [2,3,6,2,3,5,6,8,2,3,9,52];
let arr=[];
function great(list){
    let k=list.length;
    for(let i=0;i<k;i++){
        if(list[i]>5){
            arr.push(list[i]);
            
        }
    }
    console.log(arr);
}

great(num);

let filt = num.filter(function morethan(k){
    return k>5;
})

console.log(filt);

let big = num.filter((x) => x>5);
console.log(big);

let names = ['jeevan','chadarla','reddy','sastra','cognizant'];

names.forEach(function(item, index){
    console.log(index+" : "+item);
})

names.forEach((it,id)=>console.log(id+":"+it));