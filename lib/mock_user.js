module.exports = function (options, factory) {
  if(typeof options === 'function'){
    factory = options;
    options = {};
  }

  options = options || {};

  return function* MockUser( next ) {
    if ( this.user ) {
      return yield next;
    }

    if(typeof factory !== 'function'){
      return yield next;
    }

    const mockUser = factory.call(this); 
    if ( mockUser && mockUser.enable ) {
      this.user = mockUser.data;
    }

    yield next;
  };
};