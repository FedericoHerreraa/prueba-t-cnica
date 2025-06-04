
import { Checkbox } from "@/components/ui/checkbox"
import { Car } from "./Car"



export const CarsComponent = () => {
    return (
        <div className="w-full h-full bg-zinc-100 rounded-md p-5">
            <section className="flex items-center justify-between mb-5 font-semibold">
                <p className="text-[#0071B1] text-sm">Encontramos 169 vehiculos para tu busqueda.</p>
                
                <div className="flex items-center gap-2">
                    <Checkbox className='border-zinc-400 cursor-pointer data-[state=checked]:border-[#0071B1] data-[state=checked]:bg-[#0071B1] data-[state=checked]:text-zinc-100' />
                    <p className="text-sm">Mostrar destacados primero</p>
                </div>
                    
                <div className="px-5 py-3 bg-[#0071B1] rounded-lg text-white">
                    <p className="text-sm">Enviar cotizacion</p>
                </div>

                <div className="px-5 py-3 bg-white rounded-lg flex items-center gap-2">
                    <p className="text-sm">Mayor precio</p>
                </div>
            </section>

            <section>   
                <Car />
            </section>
        </div>
    )
}