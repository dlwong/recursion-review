// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number'){
    return ''+obj;
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean'){
    return ''+obj;
  } else if (typeof obj === 'string') {
    return `"` + obj + `"`
  } else if (Array.isArray(obj)){
    var newArr = [];
      if (obj.length > 0) {
        for (var i = 0; i < obj.length; i++) {
          newArr.push(stringifyJSON(obj[i]))
        }
        return '[' + newArr + ']';
      } 
      if (obj.length === 0) {
        return `[]`
      }
  } else if (typeof obj === 'object') {
    var newArr = [];
    if (Object.keys(obj).length===0){
      return '{}'
    }
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}'
      }
      newArr.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
    }
    return '{' + newArr + '}'
  }
};
