const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
}).post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
}).put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
}).delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

module.exports = router;
