import axios from 'axios'

const baseUrl = 'http://localhost:3001/contacts'

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = newObject =>
  axios.post(baseUrl, newObject).then(response => response.data)

const contactService = { getAll, create }
export default contactService