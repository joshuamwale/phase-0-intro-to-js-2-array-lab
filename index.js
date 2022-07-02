const cats = (["Milo", "Otis", "Garfield"]);
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo")
}
function appendCat(name) {
    [...cats, "Broom"];
}
function prependCat(name) {
    ["Arnold", ...cats];
}


function removeLastCat () {
    return cats.slice(0, cats.length-1)
}

function removeFirstCat () {
    return cats.slice(1);
}
