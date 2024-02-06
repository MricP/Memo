module.exports = {
    // ... autres configurations Webpack ...
  
    resolve: {
      fallback: {
        "zlib": false,
        "querystring": false,
        "path": false,
        "crypto": false,
        "stream": false,
        "http": false,
      },
    },
  };