import filterIcon from '../assets/icons_logos/filter-icon.svg'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { DualRangeSlider } from '@/components/ui/dual-range-slider';

import { Checkbox } from "@/components/ui/checkbox"
import { useVehicleStore } from '../store/vehicleStore'


export const FiltersComponent = () => {
    const { filters, setFilter, setPriceRange } = useVehicleStore();

    const allCategories = accordions.find(acc => acc.title === 'Categoría del auto')?.items
        .filter(item => item.title !== 'Todas las categorías')
        .map(item => item.title) || [];

    const handleSelectAllCategories = (isChecked: boolean) => {
        if (isChecked) {
            allCategories.forEach(category => {
                if (!filters.category.includes(category)) {
                    setFilter('category', category);
                }
            });
            if (!filters.category.includes('Todas las categorías')) {
                setFilter('category', 'Todas las categorías');
            }
        } else {
            [...allCategories, 'Todas las categorías'].forEach(category => {
                if (filters.category.includes(category)) {
                    setFilter('category', category);
                }
            });
        }
    };

    return (
        <div className="w-full h-full bg-white shadow-2xl rounded-3xl">
            <div className="w-[80%] mx-auto mt-5 flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <img src={filterIcon} alt="filter-icon" className='w-6 h-6' />
                    <h1 className='font-semibold text-[#3179BD] text-lg'>Filtrar resultados</h1>
                </div>
            </div>
            <div className="mt-7">
                {accordions.map((accordion, index) => (
                    <Accordion key={index} type="multiple" defaultValue={[`item-${index}`]} className="w-full mb-3">
                        <AccordionItem value={`item-${index}`}>
                            <div className='bg-blue-500/5'>
                                <div className='w-[80%] mx-auto'>
                                    <AccordionTrigger className='font-semibold text-[#3179BD] cursor-pointer'>{accordion.title}</AccordionTrigger>
                                </div>
                            </div>
                            <AccordionContent className='w-[80%] mx-auto mt-7'>
                                {accordion.items.map((item, index) => (
                                    <div key={index} className="flex items-center gap-5 mb-2">
                                        <Checkbox 
                                            className='border-zinc-400 cursor-pointer data-[state=checked]:border-[#3179BD] data-[state=checked]:bg-[#3179BD] data-[state=checked]:text-zinc-100'
                                            checked={
                                                accordion.title === 'Compañia rentadora' 
                                                    ? filters.brand.includes(item.title)
                                                    : accordion.title === 'Categoría del auto'
                                                        ? filters.category.includes(item.title)
                                                        : accordion.title === 'Capacidad de maletas'
                                                            ? filters.luggage.includes(parseInt(item.title))
                                                            : accordion.title === 'Cantidad de pasajeros'
                                                                ? filters.seats.includes(parseInt(item.title))
                                                                : false
                                            }
                                            onCheckedChange={(checked) => {
                                                if (accordion.title === 'Compañia rentadora') setFilter('brand', item.title);
                                                else if (accordion.title === 'Categoría del auto') {
                                                    if (item.title === 'Todas las categorías') {
                                                        handleSelectAllCategories(checked === true);
                                                    } else {
                                                        setFilter('category', item.title);
                                                    }
                                                }
                                                else if (accordion.title === 'Capacidad de maletas') setFilter('luggage', item.title.replace(' o mas maletas', ''));
                                                else if (accordion.title === 'Cantidad de pasajeros') setFilter('seats', item.title.replace(' pasajeros', ''));
                                            }}
                                        />
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
                <Accordion type="multiple" defaultValue={["price-range"]} className="w-full mb-5">
                    <AccordionItem value="price-range">
                        <div className='bg-blue-500/5'>
                            <div className='w-[80%] mx-auto'>
                                <AccordionTrigger className='font-semibold text-[#3179BD] cursor-pointer'>Fijar un rango de precio (COP)</AccordionTrigger>
                            </div>
                        </div>
                        <AccordionContent className='w-[80%] mx-auto mt-7'>
                            <DualRangeSlider
                                min={300000}
                                max={2000000}
                                step={50000}
                                value={filters.priceRange}
                                onValueChange={(val) => setPriceRange(val as [number, number])}
                            />

                            <div className='flex items-center gap-2 rounded-lg h-10 border border-zinc-300/30 mt-5'>
                                <div className='w-1/5 bg-zinc-300/40 rounded-l-lg h-full flex justify-center items-center'>
                                    <p className='text-zinc-900/60 font-semibold'>COP</p>
                                </div>
                                <div className='w-4/5 rounded-r-lg flex justify-between items-center h-full pr-5'>
                                    <p className='text-zinc-500 text-base'>desde</p>
                                    <p className='text-[#3179BD] font-semibold text-base'>{filters.priceRange[0]?.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 rounded-lg h-10 border border-zinc-300/30 mt-5'>
                                <div className='w-1/5 bg-zinc-300/40 rounded-l-lg h-full flex justify-center items-center'>
                                    <p className='text-zinc-900/60 font-semibold'>COP</p>
                                </div>
                                <div className='w-4/5 rounded-r-lg flex justify-between items-center h-full pr-5'>
                                    <p className='text-zinc-500 text-base'>hasta</p>
                                    <p className='text-[#3179BD] font-semibold text-base'>{filters.priceRange[1]?.toLocaleString()}</p>
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
                title: 'Estándar',
                amountOfResults: 3
            },
            {
                title: 'Grande',
                amountOfResults: 3
            },
            {
                title: 'SUV',
                amountOfResults: 3
            },
            {
                title: 'Van',
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
                title: 'Minivan',
                amountOfResults: 3
            },
            {
                title: 'Eléctrico',
                amountOfResults: 3
            },
            {
                title: 'Híbrido',
                amountOfResults: 3
            },
            {
                title: 'Especial',
                amountOfResults: 3
            },
            {
                title: 'Standard Recreational Vehicle',
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
                amountOfResults: 3
            },
            {
                title: '5 pasajeros',
                amountOfResults: 3
            },
            {
                title: '7 pasajeros',
                amountOfResults: 3
            },
            {
                title: '12 pasajeros',      
                amountOfResults: 3
            },
            {
                title: '8 pasajeros',
                amountOfResults: 3
            },
        ]
    },
]