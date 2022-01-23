let string = "";

for (i = 1; i <=5 ; i++ ) {
    for ( j = 1; j <= i ; j++) {
        string += "0"+j+" ";
    }
    string += "\n";
}

console.log(string);