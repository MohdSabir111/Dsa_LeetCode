 
 // Q: find the positon of an element in a infinite sorted array
 
 let arr = [2,3,5,6,7,8,10,11,12,15,20];

 function chuncks(arr, target){
 	//first box of size 2; 
 	let start = 0;
    let end = 1;

     while(target > arr[end]){
       
       newstart = end + 1; // new start to keep the new value

       //double the box value i.e 
       //end = previous end + BoxSize *2
        end = end + (end-start+1)*2;
        start = newstart;
     }

     return binarySearch(arr, target, start, end);

 }
 

function binarySearch(arr, target, start, end){

		while(start <= end){

		let mid = Math.floor((start + end)/2);

		if(arr[mid]== target){
			return mid;
		}

		if(arr[mid]<=target){
			start = mid+1;
		}
		else{
			end = mid - 1;

		}


		}
}

let result = chuncks( arr, 15);
console.log(result)