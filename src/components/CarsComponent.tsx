import { useVehicleStore } from "@/store/vehicleStore"
import { useEffect } from "react"
import { Car } from "./Car"

import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ImSpinner } from "react-icons/im";



export const CarsComponent = () => {
    const fetchVehicles = useVehicleStore(state => state.fetchVehicles)
    const vehicles = useVehicleStore(state => state.vehicles)
    const showFeaturedFirst = useVehicleStore(state => state.showFeaturedFirst)
    const setShowFeaturedFirst = useVehicleStore(state => state.setShowFeaturedFirst)
    const priceSort = useVehicleStore(state => state.priceSort)
    const setPriceSort = useVehicleStore(state => state.setPriceSort)

    useEffect(() => { fetchVehicles(100) }, [fetchVehicles])

    if (vehicles.length === 0) return <div className="w-full h-full flex items-center justify-center"><ImSpinner className="animate-spin text-2xl text-[#3179BD]" /></div>

    return (
        <div className="w-full h-full bg-zinc-100 rounded-md p-5">
            <section className="flex items-center justify-between mb-5 font-semibold">
                <p className="text-[#3179BD] text-sm">Encontramos {vehicles.length} vehiculos para tu busqueda.</p>

                <div className="flex items-center gap-2">
                    <Checkbox
                        className='border-zinc-400 cursor-pointer data-[state=checked]:border-[#3179BD] data-[state=checked]:bg-[#3179BD] data-[state=checked]:text-zinc-100'
                        checked={showFeaturedFirst}
                        onCheckedChange={(checked) => setShowFeaturedFirst(checked === true)}
                    />
                    <p className="text-sm">Mostrar destacados primero</p>
                </div>

                <section className="flex items-center gap-4">
                    <div className="px-5 py-3 bg-[#3179BD] rounded-lg text-white">
                        <p className="text-sm">Enviar cotizacion</p>
                    </div>

                    <Select value={priceSort} onValueChange={(value) => setPriceSort(value as 'highest' | 'lowest')}>
                        <SelectTrigger className="w-[180px] py-5 border-none bg-white">
                            <SelectValue placeholder="Ordenar por precio" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="highest">Mayor precio</SelectItem>
                            <SelectItem value="lowest">Menor precio</SelectItem>
                        </SelectContent>
                    </Select>
                </section>
            </section>

            <div className="flex flex-col gap-5">
                {vehicles.map((vehicle, index) => (
                    <Car key={index} vehicle={vehicle} />
                ))}
            </div>
        </div>
    )
}