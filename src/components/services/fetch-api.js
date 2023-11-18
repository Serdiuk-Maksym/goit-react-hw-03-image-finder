import axios from 'axios';

const API_KEY = '37647312-75763e51f9f1f1c0faecc27a9';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchData(searchValue, page) {
  const searchParams = new URLSearchParams({
    q: searchValue,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return response.data.hits;
}

export { fetchData };
