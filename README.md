
This is a helper library for https://github.com/larvalabs/cryptopunks


**WORK IN PROGRESS**

# How to Use
var cryptopunk_icons = require('cryptopunk-icons')


### Loading Icon Images
```
function getCryptopunkIconLocalImagePath(_punk_icon_id)
```
**Description**

Returns the path for the local image (inside this node package) of a particular cryptopunk.

**Example Use**

var path = cryptopunk_icons.getCryptopunkIconLocalImagePath(111);

**Example Result**

 */home/andy/dev/cryptopunk-icons/app/assets/punk111.png*



```
function getCryptopunkIconCentralizedURL(_punk_icon_id)
```

**Description**

Returns the url for the local image (inside this node package) of a particular cryptopunk from the official website.  Please avoid this to reduce traffic load on their servers!  Use the local function when possible.

**Example Use**

var path = cryptopunk_icons.getCryptopunkIconCentralizedURL(111);

**Example Result**

 *https://www.larvalabs.com/cryptopunks/cryptopunk111.png*




# Testing with mocha
node app/mocha-server.js

Then, in a different shell

npm test
