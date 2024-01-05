let arr = [2,3,4,10,12,18], start = 0, end=arr.length-1;
let l = Math.floor((start+end)/2);


// means number should be <= target  
function floorBS(arr, target){
	console.log(`floor  ${target}`)
	while(start<=end){
		let mid = Math.floor((start+end)/2);


		if(arr[mid]==target){
			return arr[mid];
		}
		if(arr[mid]<target){
			start = mid+1;
		}else{
			end = mid-1;
		}
	}
	return arr[end]
}

let result = floorBS(arr, 13);
console.log(result);