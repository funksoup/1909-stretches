/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
	const zipped = {}




	const outputObj = {};      objs.forEach(obj => {         Object.entries(obj).forEach((key, value) => {             if (!outputObj[key]) {                 outputObj[key] = value             } else {                 outputObj[key] += value             }         });     })      return outputObj; }

	// for(let i = 0; i < objs.length;i++) {
	// 	const current = objs[i]

		// go through all keys in current
			//does zipped have the key that I'm currently in, in current
			// if it does, just add it to whatever is there
			//if note, just give zipped the key and the value as it is
	


	}


return zipped

	// outputObj
	// resultObj

	// for each (item in objs) {
	// 	if(item == null) {
	// 		return item;
	// 	} else {
	// 	const zipper = (objs) => {
	// 	let elements = Object.values(objs);
	// 	console.log(elements);
	// 	Object.values(objs).reduce((x,y) => 
	// 		x+y);
	// 	}}

	// }

	//return zipper;
}

module.exports = { zip };
// export const zip = objs => {

	 // Object.entries example:
	  // a = {b: 3, c: 4, d: 9} { b: 3, c: 4, d: 9 } > Object.entries(a) [ [ 'b', 3 ], [ 'c', 4 ], [ 'd', 9 ] ]
