
import filterIcon from '../assets/icons_logos/filter-icon.svg'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Checkbox } from "@/components/ui/checkbox"


export const FiltersComponent = () => {
    return (
        <div className="w-full h-full bg-white shadow-2xl rounded-3xl">
            <div className="w-[80%] mx-auto mt-5 flex items-center gap-5">
                <img src={filterIcon} alt="filter-icon" className='w-6 h-6' />
                <h1 className='font-semibold text-[#0071B1] text-lg'>Filtrar resultados</h1>
            </div>
            <div className="mt-7">
                {accordions.map((accordion) => (
                    <Accordion type="single" collapsible className="w-full mb-3">
                        <AccordionItem value="item-1">
                            <div className='bg-blue-500/5'>
                                <div className='w-[80%] mx-auto'>
                                    <AccordionTrigger className='font-semibold text-[#0071B1] cursor-pointer'>{accordion.title}</AccordionTrigger>
                                </div>
                            </div>
                            <AccordionContent className='w-[80%] mx-auto mt-7'>
                                {accordion.items.map((item) => (
                                    <div className="flex items-center gap-5 mb-2">
                                        <Checkbox className='border-zinc-400 cursor-pointer data-[state=checked]:border-[#0071B1] data-[state=checked]:bg-[#0071B1] data-[state=checked]:text-zinc-100' />
                                        <div className='flex items-center gap-2'>
                                            <p>{item.title}</p>
                                            <p className='text-sm text-zinc-400'>({item.amountOfResults})</p>
                                        </div>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
                <Accordion type="single" collapsible className="w-full mb-5">
                    <AccordionItem value="item-1">
                        <div className='bg-blue-500/5'>
                            <div className='w-[80%] mx-auto'>
                                <AccordionTrigger className='font-semibold text-[#0071B1] cursor-pointer'>Fijar un rango de precio (COP)</AccordionTrigger>
                            </div>
                        </div>
                        <AccordionContent className='w-[80%] mx-auto mt-7'>
                            <p>Doble slider </p>

                            <div className='flex items-center gap-2 rounded-lg h-10 border border-zinc-300/30 mt-5'>
                                <div className='w-1/5 bg-zinc-300/40 rounded-l-lg h-full flex justify-center items-center'>
                                    <p className='text-zinc-900/60 font-semibold'>COP</p>
                                </div>
                                <div className='w-4/5 rounded-r-lg flex justify-between items-center h-full px-5'>
                                    <p className='text-zinc-500 text-base'>desde</p>
                                    <p className='text-[#0071B1] font-semibold text-base'>2,000,000.00</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 rounded-lg h-10 border border-zinc-300/30 mt-5'>
                                <div className='w-1/5 bg-zinc-300/40 rounded-l-lg h-full flex justify-center items-center'>
                                    <p className='text-zinc-900/60 font-semibold'>COP</p>
                                </div>
                                <div className='w-4/5 rounded-r-lg flex justify-between items-center h-full px-5'>
                                    <p className='text-zinc-500 text-base'>hasta</p>
                                    <p className='text-[#0071B1] font-semibold text-base'>7,000,000.00</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}


const accordions = [
    {
        title: 'Compañia rentadora',
        items: [
            {
                title: 'Avis',
                amountOfResults: 3
            },
            {
                title: 'Budget',
                amountOfResults: 3
            },
            {
                title: 'Payless',
                amountOfResults: 3
            },
        ]
    },
    {
        title: 'Categoría del auto',
        items: [
            {
                title: 'Todas las categorías',
                amountOfResults: 3
            },
            {
                title: 'Económico',
                amountOfResults: 3
            },
            {
                title: 'Compacto',
                amountOfResults: 3
            },
            {
                title: 'Intermedio',
                amountOfResults: 3
            },
            {
                title: 'Standard',
                amountOfResults: 3
            },
            {
                title: 'Full Size',
                amountOfResults: 3
            },
            {
                title: 'SUV Intermedio',
                amountOfResults: 3
            },
            {
                title: 'Premium',
                amountOfResults: 3
            },
            {
                title: 'Lujo',
                amountOfResults: 3
            },
            {
                title: 'Convertible',
                amountOfResults: 3
            },
            {
                title: 'SUV Premium',
                amountOfResults: 3
            },
            {
                title: 'Maxivan',
                amountOfResults: 3
            },
            {
                title: 'SUV Standard Elite',
                amountOfResults: 3
            },
            {
                title: 'Minivan',
                amountOfResults: 3
            },
            {
                title: 'SUV Standard',
                amountOfResults: 3
            },
        ]
    },
    {
        title: 'Capacidad de maletas',
        items: [
            {
                title: '1 o mas maletas',
                amountOfResults: 3
            },
            {
                title: '2 o mas maletas',
                amountOfResults: 3
            },
            {
                title: '3 o mas maletas',
                amountOfResults: 3
            },
            {
                title: '4 o mas maletas',
                amountOfResults: 3
            },
            {
                title: '7 o mas maletas',
                amountOfResults: 3
            },
        ]
    },
    {
        title: 'Cantidad de pasajeros',
        items: [
            {
                title: '4 pasajeros',
                amountOfResults: 12
            },
            {
                title: '5 pasajeros',
                amountOfResults: 78
            },
            {
                title: '7 pasajeros',
                amountOfResults: 16
            },
            {
                title: '12 pasajeros',
                amountOfResults: 3
            },
            {
                title: '7/8 pasajeros',
                amountOfResults: 3
            },
        ]
    },
]