const file = require('./FakeOrgJSON.json');

// Configure to listen to our sample server
const axios = require('axios').create({
  baseURL: `http://localhost:3000`,
});

// Function to invoke for get request and manipulating the data
const getOrgChart = async () => {
  try {
    console.log('Getting organization chart...\n');
    const { data } = await axios.get('/api/orgchart');
    console.log(sortData(data));
  } catch (err) {
    console.log(sortData(file));
  }
};

module.exports = getOrgChart;

// Function to sort data into a map using names as keys
const sortData = (data, map = {}, manager = null) => {
  data.forEach(x => {
    const keys = Object.keys(x);
    const name = x['name'];
    if (manager) {
      map[manager].manager.push(name);
    }
    map[name] = {};
    const tempMap = map[x['name']];
    keys.forEach(key => {
      if (key === 'manager') {
        tempMap[key] = [];
        if (x[key] !== null) sortData(x[key], map, name);
      } else if (key !== 'name') {
        tempMap[key] = x[key];
      }
    });
  });
  return map;
};
