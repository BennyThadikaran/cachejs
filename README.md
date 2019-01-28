# Cache.js
A simple wrapper for Client Side Caching with [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Usage
```javascript
// Add data into localStorage
Cache.set("foo", "bar", 300);

// Get data from localStorage
Cache.get("foo");
// Outputs "bar"

// remove data from localStorage
Cache.remove("foo");

// clear all data on localStorage
Cache.clear();
```

## Exposed functions
Cache.js is uses a Module pattern exposing the below methods

> Cache.set(key, value, expiryInSeconds=1800)

> Cache.get(key)

> Cache.remove(key)

> Cache.clear()

## Testing browser support
Cache.js will test for browser support and check if storage is available.

** If the test fails, all methods silently fail and return null. **
