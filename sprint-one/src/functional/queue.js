var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var start = 0;
  var end = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[end] = value;
    end++;
    size++;
  };

  instance.dequeue = function(){
    if (size) {
      var result = storage[start];
      delete storage[start];
      start++
      size--;
    }
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
