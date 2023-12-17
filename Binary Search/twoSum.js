var num=[2,3,4,5]
var target=7;
 
function twoSum(num, target) {
	for(let i=0; i<num.length; i++){
		for (let j=i+1; j<num.length; j++) {

			 if(num[i]+num[j]===target){
			
			 	return [i,j];	
			 }

		}
	}
	
}
 
 var result=twoSum(num,target);
 console.log(result);