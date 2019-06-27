function staggeredCase(str) {
	var initialWord = str.split(' ')[0];
	var initialStr = ''
	for (i = 0; i < initialWord.length; i += 1) {
		if (i % 2 === 0) {
			initialStr += initialWord[i].toUpperCase();
        } else {
			initialStr += initialWord[i].toLowerCase();
        }
    }

    var array = str.split(' ').slice(1)
    var i;
    var j;
	var newArray = [];
	var string = '';
	var jLength;
	newArray.push(initialStr);
    for (i = 0; i < array.length; i += 1) {
        for (j = 0; j < array[i].length; j += 1) {
            if (j % 2 === 0) {
                string += array[i][j].toLowerCase();
            } else {
                string += array[i][j].toUpperCase();
            }
        }
	    newArray.push(string);
        string = '';
    }
    return newArray.join(' ');
}
