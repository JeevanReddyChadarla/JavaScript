var firstname = "jeevan";
var lastname = "chadarla"
var id=23;
var alive = false;

if(firstname == lastname){
    console.log('Matched');
}
else{
    console.log('Not matched');
    if(id){
        console.log(id);
    }
}

//teritary operator

lastname = firstname ? console.log('not matched'): console.log('matched');

