import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Departments', () => {
  test('it should return all departments', async (assert) => {
    await supertest(BASE_URL).get('/api/v1/departments')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.departments.length, 12);
        assert.deepInclude(response.body.departments, { id: 12, name: 'ZOU' });
      })
  })

  test(`it should return towns by department name`, async (assert) => {
    await supertest(BASE_URL).get('/api/v1/departments/MONO/towns')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.towns.length, 6);
        assert.equal(response.body.department, 'MONO');
        assert.deepInclude(response.body.towns, { id: 54, name: 'LOKOSSA' });
      })
  })

  test(`it should return towns by department id`, async (assert) => {
    await supertest(BASE_URL).get('/api/v1/departments/9/towns')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.towns.length, 6);
        assert.equal(response.body.department, 'MONO');
        assert.deepInclude(response.body.towns, { id: 54, name: 'LOKOSSA' });
      })
  })

  test(`it should return districts by department name`, async (assert) => {
    await supertest(BASE_URL).get('/api/v1/departments/MONO/districts')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.districts.length, 35);
        assert.equal(response.body.department, 'MONO');
        assert.deepInclude(response.body.districts, { id: 389, name: 'LOKOSSA' });
      })
  })

  test(`it should return districts by department id`, async (assert) => {
    await supertest(BASE_URL).get('/api/v1/departments/9/districts')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.districts.length, 35);
        assert.equal(response.body.department, 'MONO');
        assert.deepInclude(response.body.districts, { id: 389, name: 'LOKOSSA' });
      })
  })

  test(`it should return neighborhoods by department name`, async (assert) => {
    await supertest(BASE_URL).get('/api/v1/departments/MONO/neighborhoods')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.neighborhoods.length, 400);
        assert.equal(response.body.department, 'MONO');
        assert.deepInclude(response.body.neighborhoods, { id: 3579, name: 'ATHIEMEGAN' });
      })
  })

  test(`it should return neighborhoods by department id`, async (assert) => {
    await supertest(BASE_URL).get('/api/v1/departments/9/neighborhoods')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.neighborhoods.length, 400);
        assert.equal(response.body.department, 'MONO');
        assert.deepInclude(response.body.neighborhoods, { id: 3579, name: 'ATHIEMEGAN' });
      })
  })
})
