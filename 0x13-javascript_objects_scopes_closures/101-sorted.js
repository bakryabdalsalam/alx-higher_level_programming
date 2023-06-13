#!/usr/bin/node
//script that imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.

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

