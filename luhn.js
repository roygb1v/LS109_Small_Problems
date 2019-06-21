function luhn(num) {
    var arr = num.match(/\d+/g).join('').split('');
    var i;
    var sum = 0;
	var holder;
    var length = arr.length;
    for (i = length - 1; i > - 1; i -= 1) {
        if (i % 2 === 0) {
            holder = Number(arr[i]) * 2;
			if (holder >= 10) {
				holder = holder - 9
				arr[i] = holder;
            } else {
				arr[i] = holder;
            }
        }
    }
	arr.forEach(function (n) {
		sum += Number(n);
    });
	return sum % 10 === 0;
}
