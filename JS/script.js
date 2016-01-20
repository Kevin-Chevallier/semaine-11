$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Pas assez !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "Bingo!";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Trop !";
    }
}

$bouton.onclick = verifier;
