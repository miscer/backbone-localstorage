
# backbone-localstorage

  Simple localstorage implementation for Backbone

## Installation

    $ component install michalmiskernik/backbone-localstorage

## Example

    var storage = new Storage('example');
  
    // Bind to the collection - when it is changed, it is saved to localstorage
    storage.use(collection);

    // Load saved data from localstorage
    storage.load(); 

## License

  MIT
