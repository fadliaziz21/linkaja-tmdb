import { API_KEY, BASE_URL } from "@/constants/env";

export const getMoviesDetail = async (id: number) => {
    const apiUrl = BASE_URL + '/movie/' + id + '?api_key=' + API_KEY;
    const res = await fetch(apiUrl);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const responseBody = await res.json();
    return responseBody;

}