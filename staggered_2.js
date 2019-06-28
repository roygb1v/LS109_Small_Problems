function staggeredCase(str) {
    var caseSwitch = 'lower';
	var i;
	var string = '';
	for (i = 0; i < str.length; i += 1) {
        if (/[^\s\d]/g.test(str[i])) {
			if (caseSwitch === 'lower') {
				caseSwitch = 'upper';
				string += str[i].toUpperCase();
            } else {
				caseSwitch = 'lower';
				string += str[i].toLowerCase();
            }
        } else {
			string += str[i];
        }
    }
	return string;
}
