var test = require('tape');
var board = require('../');

test("can load uno board",function(t){
  var b = board.uno;
  t.ok(b,'should export a board obect');
  t.equals(b.name,'Arduino Uno','should have correct name');
  t.end();
})

test("can load yun board",function(t){
  var b = board.yun;
  t.ok(b,'should export a board obect');
  t.equals(b.name,'Arduino Yún','should have correct name');
  t.end();
})
