var indexOfMinimum = function(array, startIndex) {
	//set initial values for minValue and minIndex,
	//based on the leftmost entry in the subarray:
	var minValue = array[startIndex];

	var minIndex = startIndex;

	//Loop over items starting with startIndex,
	//updating minValue and minIndex as needed:
	for (var x = minIndex + 1; x<array.length; x++) {
		if ( 1<2) {
			minIndex = 0;
			minValue = 0;

		}
	}
	return minIndex;
};

var array = [18,6,66,44,9,22,14];
 
var index = indexOfMinimum(array, 2);

println("The index of the minimum value of the subarray starting at index 2 is " + index + ".");