// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//$(document).ready(function() {

var getElementsByClassName = function(className) {
  var nodes = [];
  function classes(node) {
    if (_.contains(node.classList, className)) {
      nodes.push(node);
    }
    _.each(node.childNodes, function(child){
      classes(child);
    });
  }
  classes(document.body);
  return nodes;
};




/*
var getElementsByClassName = function(className) {
	var nodeArray = document.body.childNodes;
	var resultArray = Array.prototype.slice.call(nodeArray);	
	var answerArray = [];
	
	resultArray.forEach(function(element){
		console.log(element);
		for(var i=0; i<element.classList.length; i++){
			if(element.classList[i] === className){
				answerArray.push('div.'+element.classList[i]);
			}
		}
	})
*/



	/*for (var j=0; j<resultArray.length; j++){	
		for(var k=0; k<resultArray[j].classList.length; k++){
			
			if(resultArray[i].classList[j] === className){
  			}
  			answerArray.push('div.'+resultArray[i].classList[j]);
		}
	}*/		
	
	//return answerArray;
//};


//});
/*
var getElementsByClassName = function(className) {
	var nodeArray = document.body.childNodes;
	var resultArray = [];
	for(var i = 0; i < document.body.childNodes.length; i++){
		for(var j = 0; j < document.body.childNodes[i].classList.length; j++){
			if(document.body.childNodes[i].classList[j] === className){
    			
  			}
  			resultArray.push('div.'+document.body.childNodes[i].classList[j]);
		}
			
	}
	return resultArray;
};

<button onclick="console.log(document.body.childNodes[6].classList.length)">try classfinder</button>
<button onclick="console.log(document.getElementsByClassName('targetClassName'))">try regular</button>
*/

//body.childNodes[0].nodeName
