function hash(x) {
seed = 23;
diccionario = "adefijnoprsuv";
for(i = 0; i < x.length; i++) {
seed = (seed * 19 + diccionario.indexOf(x[i]));
}
return seed;
}


resultado= 801701696369392