import { API_KEY, BASE_URL } from "@/constants/env";

export const fetchMoviesByTopRated = async () => {
    const apiUrl = BASE_URL + '/movie/top_rated?api_key=' + API_KEY;
    const res = await fetch(apiUrl);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const responseBody = await res.json();
    return responseBody;

}