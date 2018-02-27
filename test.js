!function() {
  var fill = require("./")

  function cast(v) {
    return v instanceof Array ? v.join("") : v
  }

  function ok(correct, actual) {
    if (cast(correct) !== cast(actual)) {
      throw new Error(actual + " should be " + correct)
    }

    console.info("ok", cast(correct))
  }

  ok(fill([0, 1, 2], 7), "777")
  ok(fill([0, 1, 2], 7, -1), "017")
  ok(fill("012", 7), "777")
  ok(fill([0, 1, 2], 7, 0, 1), [7, 1, 2])

  console.log("All tests passed!")
}();
