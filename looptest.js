## Installation

```
npm install node-sound-loop
```




## Usage

```javascript
var soundLoop = require('node-sound-loop');

soundLoop.generate('./sounds/loop.wav', function(err, file) {
  if (err) {
	console.error(err);
	return;
  }

  console.log('File generated: ' + file);
});
```




## API

### soundLoop.generate(file, [options], callback)

Generate an 8-count sound loop.

#### Params

* **String** *file* The file to loop.
* **Object** *options* The options object.
* **Function** *callback* The callback function.

#### Return

* **SoundLoop** The `SoundLoop` object.




## How does it work?

The module uses [`sox`](http://sox.sourceforge.net/) to generate the sound loop.




## How to test the module?

```
npm test
```




## License

MIT