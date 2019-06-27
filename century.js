function century(year) {
    var i;
	var holder;
    if (year <= 100) {
        return '1st';
    }
	holder = year % 100 === 0 ? year / 100 : parseInt(year / 100, 10) + 1;

	if (String(holder).length >= 2) {

		if (holder === 11 || holder % 100 === 11) {
			return String(holder) + 'th';
    	} else if (holder === 12 || holder % 100 === 12) {
			return String(holder) + 'th';
    	} else if (holder === 13 || holder % 100 === 13) {
			return String(holder) + 'th';
    	}
    }

    if (holder % 10 === 1) {
		return String(holder) + 'st';
    } else if (holder % 10 === 2) {
		return String(holder) + 'nd';
    } else if (holder % 10 === 3) {
		return String(holder) + 'rd';
    } else {
		return String(holder) + 'th';
    }
}
