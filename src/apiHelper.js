// import React, { useState, useEffect } from 'react';

export default function Helper(query){


  const apiKey = 'ddb64a637cccf095183c9ca095824714';
  const queryString = query;
  // let r;
  return fetch(
    `https://gateway.marvel.com:443/v1/public/${queryString}&hasDigitalIssue=true&apikey=${apiKey}`,
    {
      method: 'GET',
      // mode: 'no-cors'
    }
  ).then(r => r.json()
  ).then(response=> {
  console.log(response.data.results)
  return(response.data.results)
})
.catch(err => "there was an error fetching your comics")
};
