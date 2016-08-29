# co-mock-user
Node.js mock user middleware for koa.

## Install

```bash
$ npm install --save co-mock-user
```

## Example

```js
const mockUser = require('co-mock-user');

const koa = require('koa');
const app = koa();

const factory = function() {
  return {
    enable: true,
    data: {
      id: 100,
      name: 'jerry wu',
      age: 25
    }
  }; 

  // Or get mock user info from config with special framework.
  // return this.config.get('mockUser'); 
}; 

// app.use(passport()); // passport middleware for parse this.user
app.use(mockUser(factory)); // if has parsed this.user property, do nothing.

// The next middlewares
app.use(function* (){
  const user = this.user;
  const userId = user.id;

  console.log('userId:%s', userId);
  // TODO:
});

app.listen(3000);
console.log('listening on port 3000');
```

## Options

null

## License

MIT