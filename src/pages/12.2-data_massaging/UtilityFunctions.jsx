import React from 'react';

export function getPersons(data) {
  return data.map((personObj) => <h3>{personObj.name}</h3>)
}

export function getOldPersons(data, year) {
  return data.filter((personObj) => +personObj.birthday.slice(-4) <= year);
}