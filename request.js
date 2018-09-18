const axios = require('axios').create({
  baseURL: `http://localhost:3000`,
});

const getOrgChart = async () => {
  const { data } = await axios.get('/api/orgchart');
  console.log(data);
};

module.exports = getOrgChart;
