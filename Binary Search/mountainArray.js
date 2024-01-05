let arr =[1,2,3,5,6,4,3,2];
 let start = 0 , end = arr.length - 1;


  function binarySearch(arr){


  while(start < end){

   let mid = Math.floor((start + end )/2);
   
  	if(arr[mid] > arr[mid+1]){ // means u r in decreasing part

      end = mid;

  	}

  	if(arr[mid]<arr[mid+1]){ // means u r in increasing part 
  		start = mid+1;
  	  }
    }
   return start; // bcz at the last start,end both r = , so return any
  }


  let result = binarySearch(arr);
   console.log(result)