const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');
const faker = require('faker');

describe('GET /', function () {
	it('shoud get all users', function (done) {
		request(app)
			.get('/')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.statusCode).to.equal(200);
				expect(res.body).length.to.be.a('array');
				done();
			});
	});
});

const newUser = {
	email: faker.internet.email()
}
describe('POST /', function() {
	it('show be able to register a new user', function(done) {
		request(app)
			.post('/register')
			.set('Accept', 'application/json')
			.send(newUser)
			.end(function(err, res) {
				expect(res.statusCode).to.equal(200);
				expect(res.body.user.email).to.equal(newUser.email);
				done();
			})
	})
});