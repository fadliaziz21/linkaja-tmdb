import { API_KEY, BASE_URL } from "@/constants/env";

export const getMoviesDetail = async (id: number) => {
    console.log(id)
    const apiUrl = BASE_URL + '/movie/' + id + '?api_key=' + API_KEY;
    console.log('api :' + apiUrl)
    const res = await fetch(apiUrl);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const responseBody = res.json();
    return responseBody;

}