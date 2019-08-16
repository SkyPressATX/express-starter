import http from 'http'
import { expect } from 'chai'

describe('Start Kit Server Test', () => {
  it('should return a 200', done => {
    http.get(`http://${process.env.HOST}:${process.env.PORT}`, res => {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })
})
