import axios from 'axios';

import { SERVICE_URL } from './constants';

const validateStatus = status => (response) => {
  if (response.status !== status) {
    throw new Error('Service returned a non OK status code');
  }
  return response;
};

const getAll = () => axios.get(`${SERVICE_URL}/v1/titles`)
  .then(validateStatus(200))
  .then(response => response.data);

const add = value => axios({
  method: 'POST',
  url: `${SERVICE_URL}/v1/titles`,
  data: { value },
})
  .then(validateStatus(201))
  .then(response => response.data.id);

const remove = id => axios.delete(`${SERVICE_URL}/v1/titles/${id}`)
  .then(validateStatus(204));

const update = (id, value) => axios({
  method: 'PUT',
  url: `${SERVICE_URL}/v1/titles/${id}`,
  data: { value },
})
  .then(validateStatus(201))
  .then(response => response.data.id);

const titles = {
  getAll, add, remove, update,
};

export default titles;
