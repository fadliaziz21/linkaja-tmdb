import { fetchMoviesByTopRated } from "@/api/movies.list.api";
import Card from "@/components/card/Card";

export default async function Home() {
  const data = await fetchMoviesByTopRated();

    return (
        <>
            <div className="relative p-8">
                <div className="grid grid-cols-8 gap-5">
                    {
                        data.results.map( (item: any, index: number) => (
                            <Card key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </>
  );
}
