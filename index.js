'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;




/**
 *identitiy: take a value and return that input value unchanged. 
 * 
 * @param {*} value: single value that can be any datatype
 *
 *@return {*} : the input value unchanged
 * 
 */
 function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 *typeOf: returns a type of value as a string
 * 
 *@param {*} value: single value that can be any datatype
 *
 *@return {String} : a string contaning the name of what value is passed
 * 
 */
   function typeOf(value){
  //if the value is a array print array
     if (Array.isArray(value)){
       return "array";
   }
  //if the value is stricktly equal to null return null
   else if (value === null){
       return "null";
   }
   //if the valuse is strictly equal to undefined return undefined
   else if (value === undefined){
       return "undefined";
   } 
   //if value is equal to a number return number
   else if (typeof value === "number"){
       return "number";
   } 
   //if value is false or true return a boolean
   else if (value === false || value === true){
       return "boolean";
   }
   //if the value thats passed is a functuion return function 
    else if (value instanceof Function){
       return "function";
    }
    // if value is a object return object
    else if ( typeof value === "object"){
       return "object"; 
        
    }
     // if nothing else passes return string
     else { 
           return "string";
      }
      
}
module.exports.typeOf = typeOf;

/**
 *first: returns the first value in a array and if its not an array returns a empty array
 * 
 *@param {Array}: any array that is given 
 * @param {Number}: any number that is given 
 *
 *@return {String or Array}: returns a string or array with the first value in that array
 * 
 */
 function first(array, number){
    // if the array value is not a array then return a empty array 
    if(!Array.isArray(array)){
        return [];
    }
   //if number is left null or number isnt a number return the first index in the array
    else if(number === null || !number){
        return array[0];
    }
   // if the number is greater than the array return the whole array to that given number
    else {
     return array.splice(0, number);
    }
  }
  module.exports.first = first;
  
/**
 *last: returns the first value in a array and if its not an array returns a empty array
 * 
 *@param {Array}: any array that is given 
 * @param {Number}: any number that is given 
 *
 *@return {String or Array}: returns a string or array with the first value in that array
 * 
 */
 function last(array, number){
    // if the array value is not a array then return a empty array 
    if(!Array.isArray(array)){
        return [];
    }
   //if number is left null or number isnt a number return the last index
    else if(!number){
        return array[array.length -1];
    }
   // if the number is greater than the array return the whole array 
   else if((number > array.length)){
       return array;
   }
    //
    else {
      return array.slice(array.length - number, number + 1 );
    }
}
  module.exports.last = last;
  
  /**
 *indexOf: loops over a array and then returns the index of a value in that array
 * 
 *@param {Array}: any array that is given 
 * @param {*}1 value: any value that is given 
 *
 *@return {Number}: returns a number which is the index of a value based on the array and value thats given 
 * 
 */
 function indexOf(array, value){
    //looping over a arrays length
    for(var i = 0 ; i < array.length;i++){
        //if value thats passed through increment i 
        if(array[i] === value){
            return i;
        }
    }
    return -1; // if value is not in array return this 
}
    module.exports.indexOf = indexOf;
    
/**
 *contains: checks is any given value which can be any datatype is in a given array
 * 
 *@param {Array}: any array that is given 
 * @param {*} value : any single data type
 *
 *@return {Boolean}: returns a boolean if the array contains the specified data type or not
 * 
 */  
 function contains(array ,value){
return (array.includes(value) ? true : false);
}
 module.exports.contains = contains;
 
 /**
 *each: minipulates each value of the object or array
 * 
 *@param {Collection}: A object or array that is passed 
 *@param {action} function that is passed
 *
 *@return {}: doesnt return anyhting just minipulates a array
 * 
 */  
   function each(collection, action) {
   // conditional to see if the collection is a array
    if(Array.isArray(collection)) {
        //looping over the collection
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
 