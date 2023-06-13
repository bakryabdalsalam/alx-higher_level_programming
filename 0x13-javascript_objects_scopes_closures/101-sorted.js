#!/usr/bin/node
// function that returns the number of occurrences in a list

const { dict } = require('./101-data.js');

function computeUserIdsByOccurrence(dictionary) {
  const userIdsByOccurrence = {};

  for (const userId in dictionary) {
    const occurrence = dictionary[userId];
    if (userIdsByOccurrence[occurrence]) {
      userIdsByOccurrence[occurrence].push(userId);
    } else {
      userIdsByOccurrence[occurrence] = [userId];
    }
  }

  return userIdsByOccurrence;
}

const userIdsByOccurrence = computeUserIdsByOccurrence(dict);
console.log(userIdsByOccurrence);

