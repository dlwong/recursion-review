// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  var body = document.body;
  var newArray = [];


//   function searchNode(node){
//     if (node.HasChildNodes() && node.classList.contains(className)){
//       newArray.push(node)
//     }
//     console.log(newArray)
// //     searchNode(node)
//   }



  function searchNode(node) {
    if (node.classList && node.classList.contains(className)) {
      newArray.push(node)
    }
    if (node.childNodes) {
      for (var i = 0; i < node.childNodes.length; i++) {
        searchNode(node.childNodes[i]);
      }
    }
  }

    
  searchNode(body);

  return newArray;


};
