// DEFINITION D'UNE FONCTION

/*function isMultiple(n, m){
    return n%m===0
}

// let resultat = isMultiple(15, 3);
//console.log(resultat)

function isEven(i); {
    return isMultiple(i,2)
}
let resultat = isEven (i,8)
console.log(resultat);*/

/*let estMultiple = function (n,m){
    return n % m === 0;
    }
    estMultiple(8,3);

    let isMultiple = (n, m) => {
        return n % m === 0;
    }*/

    /*Function addition (a, b) {
        return a + b;
    }*/
// let resultat = addition (3, 6);
    //console.log("resultat = " + resultat);

   /* resultat = addition(3);
    resultat = addition(3, 6, 10);
    resultat = addition ();

    function add(...unArgument) {
        let resultat = 0;
        for (const arg of unArgument) {
            resultat += arg
        }
        return resultat
    }

    resultat = additionner(3, 5, 9);
    console.log(`resultat =  ${resultat}`);*/

    /*let multiplication = (a, b) => a * b;
    function multiplication (a, b) {
        return a * b;
    })()

    fonction auto executée
    (() => {
        prompt("entrer votre prenom")
    // })();*/ 


    class compte {
        constructor(n)
    }

    let compteA = new compte("001");
    console.log(compteA);

    compteA.crediter(montant) {...}

  // METHOD
    crediter(montant) {
        this.solde += montant
    }

    // JSON = JavaScript Object Notation

    let personne = new Object();
    personne.prenom = "joaquim";
    personne.age = 52
    console.log(personne)