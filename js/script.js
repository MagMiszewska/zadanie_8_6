var a = prompt('Podaj liczbę a'),
    b = prompt('Podaj liczbę b'),
    value = (a * a) - (2 * a * b) + (b * b);
alert('Twój wynik to: ' + value);
console.log('Twój wynik to: ' + value);

if (value < 0) {
    console.log('Wynik jest ujemny');
    alert('Wynik jest ujemny');
} else if (value > 0) {
    console.log('Wynik jest dodatni');
    alert('Wynik jest dodatni');
} else {
    console.log('Wynik jest równy zero');
    alert('Wynik jest równy zero');
}