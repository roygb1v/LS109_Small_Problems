function star(n) {
    var midpt = (n - 1) / 2;
    var i;
    var j;
	var holder;
	var firstHalfArr = [];
	var testArr = [];
    for (i = 0; i <= midpt; i += 1) {
       	if (i === midpt) {
            firstHalfArr.push('*'.repeat(n));
        } else {
            holder = ' '.repeat(i) + '*';
			firstHalfArr.push(holder);
        }
    }

	for (j = midpt; j > 0; j -= 1) {
			testArr.push((' '.repeat(j-1) + '*').repeat(2));
    }
	for (i = 0; i < testArr.length; i += 1) {
		firstHalfArr[i] = firstHalfArr[i] + testArr[i];
    }
	for (i = testArr.length -1; i > -1; i -= 1) {
		firstHalfArr.push(firstHalfArr[i]);
    }
	firstHalfArr.forEach(row => console.log(row));
}
