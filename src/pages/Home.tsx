import { Header } from "@/components/HeaderComponent";
import { FiltersComponent } from "@/components/FiltersComponent";
import { CarsComponent } from "@/components/CarsComponent";
import { VehicleSelected } from "@/components/VehicleSelected";
import { Footer } from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Home() {    
    return (
        <div className="bg-zinc-100 w-full h-fit">
            <Header />
            <main className="w-[75%] mx-auto h-full flex gap-10 mt-10 ">
                <div className="w-1/4 h-full flex flex-col gap-10">
                    <FiltersComponent />
                </div>
                <ScrollArea className="w-3/4 h-[110rem] mb-10 flex flex-col gap-10">
                    <CarsComponent />
                </ScrollArea>
            </main>
            <div className="w-full fixed bottom-0 left-0">
                <VehicleSelected />
            </div>
            <Footer />
        </div>
    )
}