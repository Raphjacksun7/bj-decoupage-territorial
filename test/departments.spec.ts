import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Department', () => {
  test('it should return all departments', async (assert) => {
    await supertest(BASE_URL).get('/api/v1/departments')
      .expect(201)
  })
})
