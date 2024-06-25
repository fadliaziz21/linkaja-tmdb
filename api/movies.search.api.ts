import { API_KEY, BASE_URL } from "@/constants/env";

export const searchMovies = async (searchQuery: string) => {
    const apiUrl = BASE_URL + '/search/movie?query=' + searchQuery + '&api_key=' + API_KEY + '&language=en-US&page=1&include_adult=false';
    const res = await fetch(apiUrl);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const responseBody = await res.json();
    return responseBody;

}

export const searchFilterMovies = async (searchQuery: string, filterQuery: string) => {
    const apiUrl = BASE_URL + '/search/movie?query=' + searchQuery + '&primary_release_year=' + filterQuery + '&api_key=' + API_KEY + '&language=en-US&include_adult=false';
    const res = await fetch(apiUrl);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const responseBody = await res.json();
    return responseBody;

}