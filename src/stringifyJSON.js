// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:




var iterateArray = function(obj, i){
  
  if(obj.length === 0){
    return '[]';
  }else if(i === obj.length){
    return;
  }else{
    obj[i] = stringifyJSON(obj[i]);
    return iterateArray(obj, i+1);
  }
};



//stringify function
var stringifyJSON = function(obj) {

  if (typeof(obj) === "string"){
  	 return '"'+obj+'"';
  }else if(typeof(obj) === 'number'){
  	var num = obj;
  	return num.toString();
  }else if(obj === null){
  	return "null";
  }else if(obj === false){
  	return "false";
  }else if(obj === true){
  	return "true";
  }else if((Array.isArray(obj))===true){
      iterateArray(obj, 0);  
  }
    return '['+obj+']';
  
};




