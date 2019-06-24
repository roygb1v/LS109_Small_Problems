function fridayThe13ths(year) {
    var array = [];
    var i;
    for (i = 0; i < 12; i += 1) {
        array.push(new Date(year, i, 13).getDay());
    }
    return array.filter(n => n === 5).length;
}
