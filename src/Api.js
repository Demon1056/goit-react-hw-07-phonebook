import axios from 'axios';

axios.defaults.baseURL = 'https://63979be177359127a03bf696.mockapi.io';

export async function getContacts(signal) {
  try {
    const response = await axios.get('/contacts', {
      signal: signal,
    });
    return response;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
}

// export async function requestSearchFilms(name, signal) {
//     try {
//         const { data } = await axios.get(
//             `${BASEURLD}search/movie?${KEY}&language=en-US&query=${name}&page=1&include_adult=false`,
//             {
//                 signal: signal,
//             }
//         );
//         const searchFilms = data.results.map(({ title, id }) => {
//             return {
//                 title,
//                 id,
//             };
//         });
//         return searchFilms;
//     } catch (error) {
//         if (axios.isCancel(error)) {
//             return [];
//         }
//         throw new Error(error);
//     }
// }

// export async function requestMoviesDatails(moviesId, signal) {
//     try {
//         const { data } = await axios.get(
//             `${BASEURLD}movie/${moviesId}?${KEY}&language=en-US`,
//             {
//                 signal: signal,
//             }
//         );
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export async function requestMoviesCast(id, signal) {
//     try {
//         const { data } = await axios.get(
//             `${BASEURLD}movie/${id}/credits?${KEY}&language=en-US`,
//             {
//                 signal: signal,
//             }
//         );
//         const castsInformation = data.cast.map(
//             ({ character, name, profile_path, id }) => {
//                 return {
//                     character,
//                     name,
//                     profile_path,
//                     id,
//                 };
//             }
//         );
//         return castsInformation;
//     } catch (error) {
//         if (axios.isCancel(error)) {
//             return [];
//         }
//         throw new Error(error);
//     }
// }

// export async function requestMoviesReviews(id, signal) {
//     try {
//         const response = await axios.get(
//             `${BASEURLD}movie/${id}/reviews?${KEY}&language=en-US&page=1`,
//             {
//                 signal: signal,
//             }
//         );
//         const reviews = response.data.results.map(({ author, content, id }) => {
//             return {
//                 id,
//                 author,
//                 content,
//             };
//         });
//         return reviews;
//     } catch (error) {
//         if (axios.isCancel(error)) {
//             return;
//         }
//         throw new Error(error);
//     }
// }
