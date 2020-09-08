//console.log("hello word");

//var firstname;
    //firstname="papa";

    //firstname=true;
//firstname=42;
//console.log(typeof(firstname));

//opérateur
//var num1= 2, num2= 4, result;
// result = (num1 - num2)* num2;
// num1 = num1 + 10 c'est la meme chose de l'écriture d'en dessous
//num1 += 10
//console.log(num1);

//var a = 2;
//console.log(++a);
//console.log(a);

//var text = "bonjour";
//text += "toi";
//console.log(text);

//var age = 65;
//var name = "big Joe"
//console.log("mon papa est" + name +"\net il a "  + age + "ans");
//console.log(`mon papa est ${name} et il a ${age} ans`); 

/*var val = parseInt(prompt("entrer un nombre:"));
console.log(val);
console.log(typeof(val));*/

// les conditions
/*var age = prompt("entrez votre age") ;
if(age >= 18){
    console.log("tu es adulte");

}
else{
    console.log("tu es mineur");
}*/

//var age = parseInt(prompt("entrer un nombre"));
// if (age<18){
//     console.log(`tu as ${age} ans tu es mineur`);
// }
// else if(age==18){
//     console.log(`tu as ${age} ans tu es un vrai homme man`);
// }
// else{
//     console.log(`tu as ${age} ans tu es adulte`)
// }

//age<18)? console.log(`tu as ${age} ans tu es mineur `):console.log(`tu as ${age} ans tu es adulte`);

/*var jour= prompt("quel jour on est?")
switch(jour){
    case"vendredi":
    console.log("yes!c'est bientot le weekend");
    break;
    case "samedi":
    case"dimanche":    
    console.log("cest le weekend");
    break;
    default:
        console.log("Bon a quand le weekend ?");
}*/


/*var str = 0;
for (var i=0; i<9; i++){
    str = str + i;
}
console.log(str);*/

/*var str = "";
for ( i = 0; i<9; i++){
    if(i==5){continue;}
    str+= i
} 
consolelog(str)*/

/*var n = 6;
while(n<6){
    n++;
}
// console.log(n)*/

/*var iter = 5;
do {
    console.log("Itération" + iter);
    iter++;
}
while (iter < 5);*/

// 6 falsy values
/*var n = 0
var bool = Boolean(n);
console.log(bool);*/

//0, NaN, null, "", undefined, false
/*var n = undefined;
var bool = Boolean(n);
console.log(bool);*/ 


//LES FONCTIONS

/*function add(num1, num2){
    var n = num1 + num2;
    return n;
}
p = add(2, 5);
var division = 14 / p;
console.log(division);*/

//var, let, const
// function add(num1, num2){
//     if(true){
//         var n = num1 + num2;
        
//     }
//     console.log(n);
// }
// add(3, 5);

/*const name = "Zoulou";
name = "Peulh";
// console.log(name);*/

/*var nameV = "glo";
let nameL = "glo";
if(true){
    var
}*/

/*let tab = ["banane", "pomme", "3" , "abricot", "5"];
tab.push("orange"); index
//tab.sort(); permet de trier en ordre les composants

console.log(tab[1], tab[3]);
for(index  in tab );
console.log(index)
//for(let i = 0; i < tab.length; i++){
    console.log(tab[i]);
}
let tab1 = new Array();
tab1.push("orange");
console.log(tab);
for (let i = 0; i < tab.length; i++){
    console.log(i + "=>" + tab [i]);
}*/

/*var personne = {
    firstname : "John",
    lastname : "lecodeur",
    age : 40
};
console.log(personne)*/


function numbersRang (x,y) {
    if((x>=40 && x<=60 && y>=40 && y <=60) ||
    (x>=70 && x<=100 && y<=100)){
        return true;
    }
    else {
        return false;
    }
    console.log(numbersRang (44,50))
}