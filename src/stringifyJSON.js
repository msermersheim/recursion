var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj) === 'number'){
    return obj.toString();
  }
  if (obj === null){
    return "null";
  }
  if (typeof(obj)=== 'boolean'){
    return "" +obj;
  }
  if (typeof(obj) === 'string'){
    return '"'+obj+'"';
  }
  if (Array.isArray(obj) === true){
    return '['+ obj.map(function(item){
      return stringifyJSON(item) ;
    })+']';
  }

    var newObj = [];
    for(var key in obj){
      if (obj[key]=== undefined || typeof(obj)=== 'function'){
        return '{}';
      }else{
        newObj.push ( stringifyJSON(key) + ':' +stringifyJSON(obj[key])); 
      }
    }
    return '{' + newObj + '}';
  
};


/*var iterateArray = function(obj, i){
  
  if(obj.length === 0){
    return '[]';
  }else if(i === obj.length){
    return;
  }else{
    obj[i] = stringifyJSON(obj[i]);
    return iterateArray(obj, i+1);
  }
};

var objectArray = [];
//var newArray = {};
var iterateObject = function(obj){
  
  /*Object.keys(obj).forEach(function(key){
    var value = stringifyJSON(obj[key]);

    key = stringifyJSON(key);
    newArray[key] = value;
  });
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      if(key===undefined){
      return '{}';
      }else if (typeof obj[key]==="object"){
        iterateObject(obj[key]);
      }else{
        objectArray.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
      }
    }
    //return;
  }
  //objectArray = [];
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
      return '['+obj+']'; 
  }else if((Array.isArray(obj))===false){
      iterateObject(obj);
      //iterateArray(objectArray);
      return '{'+objectArray+'}';
      
  }
  objectArray = [];
};
*/



