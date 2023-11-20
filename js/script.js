let km_percorsi = prompt("Quanti Km vuoi percorrere?");
console.log(km_percorsi);

let eta_passeggero = prompt("Quanti anni hai?");
console.log(eta_passeggero);

let prezzo_biglietto_con_km = km_percorsi * 0.21
console.log(prezzo_biglietto_con_km)

let prezzo_biglietto_finale

if(eta_passeggero < 18) {
    prezzo_biglietto_finale = prezzo_biglietto_con_km - (prezzo_biglietto_con_km * 0.20)
}

else if(eta_passeggero > 65 ) {
    prezzo_biglietto_finale = prezzo_biglietto_con_km - (prezzo_biglietto_con_km * 0.40)
}

else {
    prezzo_biglietto_finale = prezzo_biglietto_con_km 
}

prezzo_biglietto_finale = prezzo_biglietto_finale.toFixed(2)

console.log(prezzo_biglietto_finale)


document.getElementById("costo_finale").innerHTML = prezzo_biglietto_finale
console.log(prezzo_biglietto_finale)

prezzo_biglietto_finale = Number(prezzo_biglietto_finale)

let prezzo_biglietto_con_sella = (prezzo_biglietto_finale) + (prezzo_biglietto_finale * 0.20);

document.getElementById("costo_finale2").innerHTML = prezzo_biglietto_con_sella
console.log(prezzo_biglietto_con_sella)

let prezzo_biglietto_con_carrozza = prezzo_biglietto_finale + 22;

document.getElementById("costo_finale3").innerHTML = prezzo_biglietto_con_carrozza
console.log(prezzo_biglietto_con_carrozza)
