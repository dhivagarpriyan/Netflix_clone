const key=import.meta.env.VITE_MOVIE_KEY;
const Base_URL="https://api.themoviedb.org/3";

const endpoints={
    popular:`${Base_URL}/movie/popular?api_key=${key}`,
    topRated:`${Base_URL}/movie/top_rated?api_key=${key}`,
    trending:`${Base_URL}/movie/popular?api_key=${key}&language=en-us&page=2`,
    comedy:`${Base_URL}/search/movie?api_key=${key}&language=en-us&query=comedy&page=1&include_adult=false`,
    upcoming:`${Base_URL}/movie/upcoming?api_key=${key}`
}

export default endpoints

export function createImageUrl(filename,size){
      return `https://image.tmdb.org/t/p/${size}${filename}`
}