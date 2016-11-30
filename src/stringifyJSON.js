// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var stringification = "";
  if (typeof(obj) === "string"){
  	return stringification + '"'+obj+'"';
  } else if(typeof(obj) === 'number'){
  	var num = obj;
  	return num.toString();
  }else if(obj === null){
  	return "null";
  }else if(obj === false){
  	return "false";
  }else if(obj === true){
  	return "true";
  }else if (typeof(obj) === "object"){
  	if((typeof obj.length === "number")===true)
  	obj[i]

  	return stringification +'['+obj.join(', ')+']';
  }//else if (typeof(obj)==="object")
};

//if obj.length === number === true

var iterateArrays = function(){
  if (typeof(obj[i]) === "string"){
    return stringification + '"'+obj+'"';
  } else if(typeof(obj) === 'number'){
    var num = obj;
    return num.toString();
  }else if(obj === null){
    return "null";
  }else if(obj === false){
    return "false";
  }else if(obj === true){
    return "true";
}

var iterateForString = function(string){

}

var iterateArray = function(array, x, y){
	if (y === array.length){
		return;
	}else if(x=== array[y].length){

	}
}




// Capitalize function
function stringify(element) {
  
  return .charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, x, y) {
  if (y === array.length) {
    return;
  }
  else if (x === array[y].length) {
    return fixLetterCase(array, 0, y + 1);
  }
  else {
    array[y][x] = capitalize(array[y][x]);
    return fixLetterCase(array, x + 1, y);
  }	
}

fixLetterCase(capitals, 0, 0);

console.log(capitals);


///////////
// Our array of messy words
var capitals = ["berlin", "parIs", "MaDRiD"];

// Capitalize function
function return(word) {
  
}

// Our recursive function
function fixLetterCase(array, i) {    
  // Base case
  if (i === array.length) {
    return;
  } 
  // Action
  array[i] = capitalize(array[i]);
  // Recursive case
  return fixLetterCase(array, i + 1);
}

// Here is our function call
fixLetterCase(capitals, 0);

console.log(capitals);