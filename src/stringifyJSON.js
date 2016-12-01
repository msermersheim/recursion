// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var iterateArray = function(obj, i){
  //var arrayStringification = "";
  if(i === 0){
      return stringification += "[]";
    }
    stringifyJSON(obj[i]);
    return iterateArray(obj, i-1); 
};


var stringifyJSON = function(obj) {
  var stringification = "";
  if (typeof(obj) === "string"){
  	return stringification + '"'+obj+'"';
  }else if(typeof(obj) === 'number'){
  	var num = obj;
  	return num.toString();
  }else if(obj === null){
  	return "null";
  }else if(obj === false){
  	return "false";
  }else if(obj === true){
  	return "true";
  }else if (typeof(obj) === "object"){
  	if((Array.isArray(obj))===true){
      iterateArray(obj, obj.length);  
    }
    //return 'object not array';
  }
};






    



/*
else if(typeof(obj[i]) === "string"){
      arrayStringification + '"'+obj[i]+'"';
      return iterateArray(obj, i-1);
    }else if(typeof(obj[i]) === 'number'){
      var num = obj[i];
      arrayStringification += num.toString();
      return iterateArray(obj, i-1);
    }else if(obj[i] === null){
      arrayStringification += "null";
      return iterateArray(obj, i-1);
    }else if(obj[i] === false){
      arrayStringification += "false";
      return iterateArray(obj, i-1);
    }else if(obj[i] === true){
      arrayStringification += "true";
      return iterateArray(obj, i-1);
    }
*/


