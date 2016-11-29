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
  	return stringification +'['+obj.join(', ')+']';
  }
};
