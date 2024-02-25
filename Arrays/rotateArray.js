/** arr = [1,2,3,4,5]  k=2 
 *
 *  * approach to solve it   
 *  
 * divide arry into two parts [1,2,3][4,5]  because k=2
 * 		
 * step 1: reverse whole array [5,4] [3,2,1] or we can say [5,4,3,2,1]
 * step 2: rverse both parts internaly [4,5] [1,2,3] hence final output [4,5,1,2,3] */



 function reverseArr(arr, start, end){
   while(start<end){
     let temp = arr[start];
     arr[start]=arr[end];
     arr[end]=temp;
     start++;
     end--;
   }
   return arr
 
 }
    function rotateArr(arr,k){
      
      const n = arr.length;
      k= k % n; 
      
      reverseArr(arr,0,n-1) // whole array revesrse [5,4,3,2,1] 
         
        reverseArr(arr,0,k-1) //0 to rotationIndex  [4,5]
        reverseArr(arr,k,n-1)  // rotationIndex to last [1,2,3]

        return arr; // [4,5,1,2,3]
    }
 
 let arr = [1,2,3,4,5] 
  let res = rotateArr(arr, 2)
  console.log(res) // [4,5,1,2,3]