var expression = function(a, b, c = "expression1") {
    if (arguments.length == 0) {
        return console.log("Error")
    }
	return console.log(a += 1), console.log(b += 2), console.log(c += '_ok')
}
console.log(expression(1, 2));





function declaration(a, b, c) {
    if (arguments.length == 0) {
	    
	return console.log(a += 1), console.log(b += 2), console.log(c += '_ok')

    }
    return("false")
}
console.log(declaration(1, 2));
