#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const SWAPI_BASE_URL = 'https://swapi.dev/api';

// Function to fetch characters for a given movie ID
function getCharactersForMovie(movieId) {
  return new Promise((resolve, reject) => {
    const url = `${SWAPI_BASE_URL}/films/${movieId}/`;
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        const data = JSON.parse(body);
        resolve(data.characters);
      }
    });
  });
}

// Function to fetch character details from their URLs
function getCharacterDetails(characterUrls) {
  return Promise.all(
    characterUrls.map((url) => {
      return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            const data = JSON.parse(body);
            resolve(data.name);
          }
        });
      });
    })
  );
}

// Main function to fetch characters and display their names
async function main() {
  try {
    const characterUrls = await getCharactersForMovie(movieId);
    const characterNames = await getCharacterDetails(characterUrls);
    characterNames.forEach((name) => {
      console.log(name);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
