#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const todos = JSON.parse(body);

    // Filter the completed tasks and count them by user ID
    const completedTasksByUser = todos.reduce((result, todo) => {
      if (todo.completed) {
        result[todo.userId] = (result[todo.userId] || 0) + 1;
      }
      return result;
    }, {});

    console.log(completedTasksByUser);
  } else {
    console.error(`Error: Status code ${response.statusCode}`);
  }
});
