var myResults = [
  {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
  {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
  {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
  {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
  {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
  {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}
];

const proximity = (results, cLocation) => {
  const distanceArr = results.map(result => {
    const distance = Math.sqrt(
        Math.pow((result.location.lat - cLocation.lat),2) +
        Math.pow((result.location.long - cLocation.long),2)
    );
    distanceObj = {
      name: result.name,
      location: result.location,
      distance: distance
    }
    return distanceObj;
  });
  return distanceArr.sort(sortByDistance);
}

const sortByDistance = (a,b) => {
  return a.distance - b.distance;
}

console.log(proximity(myResults, {lat: 37.770282, long: -122.457}));
