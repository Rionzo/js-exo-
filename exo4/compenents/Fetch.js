class LocationFetch {
  regions = [];
  static async fetch_location(url) {
    try {
      const database = await fetch(url);
      const data = await database.json();
      if (!data || !database.ok) {
        throw new Error("Failed to fetch");
      }
      return data;
    } catch (err) {
      console.log("error:", err);
    }
  }
}

export default LocationFetch;
