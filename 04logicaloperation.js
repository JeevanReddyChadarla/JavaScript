let g = ['eclares','cadbury','nestle'];

let contains = function(k){
    for(let i of g){
        if(i == k){
            return true;
        }
    }
    return false;
}

if(contains('cadbury') && contains('5star')){
    console.log('i has both cadbury and 5star');
}else if(contains('cadbury') || contains('5star')){
    console.log('i has either cadbury or 5star');
}else{
    console.log('i has no related k');
}