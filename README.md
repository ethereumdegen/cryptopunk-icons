
This is a helper library for https://github.com/larvalabs/cryptopunks


**WORK IN PROGRESS**

# How to Use
var cryptopunk_icons = require('cryptopunk-icons')


### Loading Icon Images
```
function getCryptopunkIconLocalImagePath(_punk_icon_id)
```

**Example Use**

var path = cryptopunk_icons.getCryptopunkIconLocalImagePath(111);

**Example Result**

 */home/andy/dev/cryptopunk-icons/app/assets/punk111.png*



```
function getCryptopunkIconCentralizedURL(_punk_icon_id)
```

**Example Use**

var path = cryptopunk_icons.getCryptopunkIconCentralizedURL(111);

**Example Result**

 */home/andy/dev/cryptopunk-icons/app/assets/punk111.png*




# Testing with mocha
node app/mocha-server.js

Then, in a different shell

npm test
