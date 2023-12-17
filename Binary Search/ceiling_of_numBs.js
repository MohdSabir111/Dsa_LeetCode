let arr = [2,3,8,10,12,15];

// means number should be => target  
function ceiling(arr, target)
{
	let start = 0;
	let end = arr.length-1;

	while(start <= end)
	{
	  let mid = Math.floor((start+end)/2)

		if(arr[mid]== target){
			return arr[mid];
		}

		if(arr[mid]<target){
			start = mid+1;
		}else{
			end = mid-1;
		}
	

	}
		return arr[start];
}

let result = ceiling(arr, 14);
console.log(result)