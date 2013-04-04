function Storage(namespace) {
  this.namespace = namespace;
  this.collection = null;
}

Storage.prototype.use = function(collection) {
  this.collection = collection;

  var this_ = this;
  
  collection.on('add change remove', function() {
    this_.save();
  });
};

Storage.prototype.load = function() {
  var str = localStorage.getItem(this.namespace);

  if (str) {
    var json = JSON.parse(str);
    this.collection.reset(json);
  }
};

Storage.prototype.save = function() {
  var str = JSON.stringify(this.collection);
  localStorage.setItem(this.namespace, str);
};

module.exports = Storage;
