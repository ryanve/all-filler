# all-filler
Cross-platform fill function based on `Array.prototype.fill` for arrays or strings

```
npm install all-filler --save
```

## Usage

```
var fill = require('all-filler')
```

### strings
```
fill('012', 7) // '777'
fill('012', 7, -1) // '017'
fill('012', 7, 0, 1) // '712'
```

### arrays
```
fill([0, 1, 2], 7) // [7, 7, 7]
fill([0, 1, 2], 7, -1) // [0, 1, 7]
fill([0, 1, 2], 7, 0, 1) // [7, 1, 2]
```
