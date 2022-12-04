class LocationFetch {
  regions = [];
  static fetch_location(url) {
    console.log(url);
    fetch(url)
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        return data;
      })
      .catch((error) => console.log("error", error));
  }
}

export default LocationFetch;
