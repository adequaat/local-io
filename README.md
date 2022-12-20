# local-io
Super simple util lib for text based files and folder copying, reading, writing, removing and creating.  
All functions return promises.

## Available functions as named exports:
-  append (path, content, options = encoding)
-  read (path)
-  write (path, content, options = encoding)
-  copy (fromPath, toPath, options = encoding)
-  remove (path)
-  makeDir(path)
-  removeDir (path)
