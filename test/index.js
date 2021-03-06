
var co = require('co');
var exec = require('..');
var assert = require('assert');

describe('exec(cmd)', function(){
  it('should return stdout', function(done){
    co(function *(){
      var ret = yield exec('echo hello');
      ret.should.equal('hello\n');
      done();
    });
  })

  it('should throw on error', function(done){
    co(function *(){
      try {
        var ret = yield exec('does_not_exist');
      } catch (err) {
        err.message.should.include('does_not_exist');
        done();
      }
    });
  })
})
