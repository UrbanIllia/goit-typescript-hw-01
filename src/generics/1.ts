import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
//  _   _      _ _
// | | | | ___| | | ___
// | |_| |/ _ \ | |/ _ \
// |  _  |  __/ | | (_) |
// |_| |_|\___|_|_|\___/
//
