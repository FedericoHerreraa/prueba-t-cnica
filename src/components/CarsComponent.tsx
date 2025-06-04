
import { Checkbox } from "@/components/ui/checkbox"
import { useVehicleStore } from "@/store/vehicleStore"
import { useEffect } from "react"
import { Car } from "./Car"


export const CarsComponent = () => {
    const fetchVehicles = useVehicleStore(state => state.fetchVehicles)
    const vehicles = useVehicleStore(state => state.vehicles)

    useEffect(() => { fetchVehicles(100) }, [fetchVehicles])

    if (vehicles.length === 0) return <div>Cargando...</div>

    return (
        <div className="w-full h-full bg-zinc-100 rounded-md p-5">
            <section className="flex items-center justify-between mb-5 font-semibold">
                <p className="text-[#3179BD] text-sm">Encontramos 169 vehiculos para tu busqueda.</p>
                
                <div className="flex items-center gap-2">
                    <Checkbox className='border-zinc-400 cursor-pointer data-[state=checked]:border-[#3179BD] data-[state=checked]:bg-[#3179BD] data-[state=checked]:text-zinc-100' />
                    <p className="text-sm">Mostrar destacados primero</p>
                </div>
                        
                <section className="flex items-center gap-4">
                    <div className="px-5 py-3 bg-[#3179BD] rounded-lg text-white">
                        <p className="text-sm">Enviar cotizacion</p>
                    </div>

                    <div className="px-5 py-3 bg-white rounded-lg flex items-center gap-2">
                        <p className="text-sm">Mayor precio</p>
                    </div>
                </section>
            </section>

            <section className="flex flex-col gap-5">  
                {vehicles.map((vehicle, index) => (
                    <Car key={index} vehicle={vehicle} />
                ))}
            </section>
        </div>
    )
}