import { Header } from "@/components/HeaderComponent";
import { FiltersComponent } from "@/components/FiltersComponent";
import { CarsComponent } from "@/components/CarsComponent";



export default function Home() {
    return (
        <div className="bg-zinc-100 w-full h-fit">
            <Header />
            <main className="w-[75%] mx-auto h-full flex gap-10 mt-10 ">
                <div className="w-1/4 h-full flex flex-col gap-10">
                    <FiltersComponent />
                </div>
                <div className="w-3/4 h-full flex flex-col gap-10">
                    <CarsComponent />
                </div>
            </main>
        </div>
    )
}