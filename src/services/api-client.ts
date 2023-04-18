import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b6542571ee9e4ff89d6a0d50e7ffc872'
  },
})
