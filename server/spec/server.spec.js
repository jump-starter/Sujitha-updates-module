var request = require('request');

describe('server', function() {
    it('should respond to GET requests for /api/updates/:id with a 200 status code', function(done) {
        request({method: 'GET',
        uri: 'http://127.0.0.1:3004/api/updates/1'},
        function(error, response, body) {
            expect(response.statusCode.toBe(200));
            done();
        });
    });
    it('Should 404 when asked for a nonexistent endpoint', function(done) {
        request('http://127.0.0.1:3004/abcd', function(error, response, body) {
          expect(response.statusCode).toBe(404);
          done();
        });
      });
    
      it('Should 404 when asked for nonexistent project id', function(done) {
        request('http://127.0.0.1:3004/api/updates/-2', function(error, response, body) {
          expect(response.statusCode).toBe(404);
          done();
        });
      });
}) 