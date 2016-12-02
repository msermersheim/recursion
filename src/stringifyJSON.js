// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//recursive function
var iterateArray = function(obj, i){
  //var stringification = "";
  if(i === obj.length){
      return;
    }
    stringifyJSON(obj[i]);
    return iterateArray(obj, i+1); 
};


//stringify function
var stringifyJSON = function(obj) {
  var stringification = "";
  if (typeof(obj) === "string"){
  	 stringification += '"'+obj+'"';
  }else if(typeof(obj) === 'number'){
  	var num = obj;
  	stringification += num.toString();
  }else if(obj === null){
  	stringification += "null";
  }else if(obj === false){
  	stringification += "false";
  }else if(obj === true){
  	stringification += "true";
  }else if (typeof(obj) === "object"){
  	if((Array.isArray(obj))===true){
      if(obj.length === 0){
        stringification += '[]';
      }
      iterateArray(obj, 0);  
    }
  }
  return stringification;
};




