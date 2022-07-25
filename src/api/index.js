import axios from 'axios';

async function fetchCharacterData(params) {
  const {page, filters} = params;
  const {Name, Species, Status, Gender} = filters;
  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${Name}&status=${Status}&gender=${Gender}&species=${Species}`;
  return await axios.get(api);
}

export default fetchCharacterData;
