const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('get index', () => {
    describe('GET index', () => {
        it('should return data from darksky', done => {
            chai.request(server).get('/data').end((err, res) => {

                expect(res).to.have.status(200);

                expect(res).to.be.an('object');

                expect(err).to.equal(null);

                done();
            });
        });
    });
    describe('POST /data', () => {
        it('should get data from darksy with custom args', done => {
            chai
                .request(server)
                .post('/data')
                .send({
                    longitude: '90',
                    latitude: '180',
                })
                .end((err, res) => {
                    expect(err).to.equal(null);

                    expect(res).to.have.status(200);

                    expect(res).to.be.an('object');

                    done();
                });
        });
    });
});
