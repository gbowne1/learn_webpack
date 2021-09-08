# learn_webpack
Me learning Webpack

This repo will change projects from time to time.

From this YouTube video

https://www.youtube.com/watch?v=5IG4UmULyoA

Oh I figured the problems with this example out as of 9/7/2021 and the new/latest versions installed.

in the original example devServer part of the webpack.config.js needs to be fixed because of this error

Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
 - options has an unknown property 'inline'. These properties are valid:
   object { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, setupExitSignals?, static?, watchFiles?, webSocketServer? }

in the terminal.

Fix is to remove all but ports: property from the devServer in webpack.config.js
