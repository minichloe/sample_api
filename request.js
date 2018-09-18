const file = require('./FakeOrgJSON.json');

// Configure to listen to our sample server
const axios = require('axios').create({
  baseURL: `http://localhost:3000`,
});

// Function to invoke for get request and manipulating the data
const getOrgChart = async () => {
  console.log('Getting organization chart...\n');
  const { data } = await axios.get('/api/orgchart');
  console.log(data);
};

module.exports = getOrgChart;

const sortData = data => {
  console.log(data.length);
};

sortData(file);
