import axios from 'axios';
import { axiosGetCancellable } from '../helpers/axios.helper';

const axiosConfig = {
  baseURL: 'https://www.googleapis.com/',
};

function searchBooks(searchText, language) {
  const query = language ? `${searchText}+language:${language}` : searchText;

  if (isServer()) {
    return axios.get(`search/repositories?q=${query}&sort=stars&order=desc`, axiosConfig);
  }

  return axiosGetCancellable(`api/search?q=${query}&sort=stars&order=desc`);
}

// books/v1/volumes/-UZLyAEACAAJ

// function getRepo(id) {
//   return axios.get(`repositories/${id}`, axiosConfig);
// }

function getBookDetails(id) {
  return axios.get(`books/v1/volumes/${id}`, axiosConfig);
}

export { searchBooks, getBookDetails };
