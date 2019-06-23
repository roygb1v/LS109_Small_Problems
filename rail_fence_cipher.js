function encode(str) {
  var message = str.match(/\w+/g).join('');
	var i;
	var array = [[],[],[]];
	for (i = 0; i < message.length; i += 1) {
		if (i % 4 === 0) {
			array[0].push(message[i]);
        }

		else if (i % 2 === 1) {
			array[1].push(message[i]);
        }
        
		else {
			array[2].push(message[i]);
		}
  }
	return array.flat().join('');
}
