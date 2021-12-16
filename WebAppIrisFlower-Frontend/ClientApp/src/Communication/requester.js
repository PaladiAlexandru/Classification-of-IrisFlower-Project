const axios = require('axios').default;

// const instance = axios.create({
//     baseURL: 'https://localhost:44345/predict',
//     timeout: 1000,
//     headers: {'Content-Type': 'application/json'}
//   });

const make_request = function(s_length, s_width, p_length, p_width) {
    debugger
    axios.post('https://localhost:44345/predict/', {
    params: {
      sepal_length: s_length,
      sepal_width: s_width,
      petal_length: p_length,
      petal_width: p_width
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
}