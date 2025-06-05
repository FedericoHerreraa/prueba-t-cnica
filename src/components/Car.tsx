
// Shadcn
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Icons
import starOutline from '../assets/icons_logos/star-outlined-icon.svg'
import starSolid from '../assets/icons_logos/star-solid-icon.svg'
import featuredIcon from '../assets/icons_logos/featured-icon.svg'
import infoIcon from '../assets/icons_logos/info-icon.svg'
import passengerIcon from '../assets/icons_logos/passengers-icon.svg'
import doorsIcon from '../assets/icons_logos/doors-icon.svg'
import transmissionIcon from '../assets/icons_logos/transmission-icon.svg'
import carryIcon from '../assets/icons_logos/carry-icon.svg'
import luggageIcon from '../assets/icons_logos/luggage-icon.svg'
import airConditioningIcon from '../assets/icons_logos/air-conditioning-icon.svg'
import checkLogo from '../assets/icons_logos/check-logo.svg'
import vectorIcon from '../assets/icons_logos/Vector.svg'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

// Components
import { FeeDetail } from "./FeeDetail"

// Types
import { type Car as CarType } from "@/types/types"
import { useEffect, useState } from "react"

import { useVehicleStore } from "@/store/vehicleStore";
import { getBrandLogo, selectImage, kiaSoul } from "@/utils/reusable-functions";

// Dinamic images selection

export const Car = ({ vehicle }: { vehicle: CarType }) => {
    const [imageUrl, setImageUrl] = useState<string>(kiaSoul);
    const [imageError, setImageError] = useState<boolean>(false);
    const { addVehicleToQuote, vehiclesToQuote } = useVehicleStore();

    useEffect(() => {
        try {
            const newImageUrl = selectImage(vehicle.picture_url.normal);
            setImageUrl(newImageUrl);
            setImageError(false);
        } catch (error) {
            console.error('Error loading image:', error);
            setImageError(true);
            setImageUrl(kiaSoul);
        }
    }, [vehicle.picture_url.normal]);

    const handleImageError = () => {
        setImageError(true);
        setImageUrl(kiaSoul);
    };

    const validImage = imageError ? kiaSoul : imageUrl;

    if (!vehicle || !vehicle.features) {
        return <div className="rounded-3xl bg-white h-[271px] w-[968px] flex items-center justify-center">
            <p>Error: Vehicle data is missing</p>
        </div>;
    }

    return (
        <div className="rounded-3xl bg-white h-[271px] w-[968px] overflow-hidden flex shadow-lg mb-5">
            <section className="w-[284px] h-full border-l-8 border-l-[#3179BD]">
                <div className='pt-7 pl-7'>
                    <img src={getBrandLogo(vehicle.brand)} alt="brand-logo" />

                    <div className='flex items-center gap-1 mt-2'>
                        {Array.from({ length: vehicle.stars }).map((_, index) => (
                            <img src={starSolid} alt="star-solid" key={index} />
                        ))}
                        {Array.from({ length: 5 - vehicle.stars }).map((_, index) => (
                            <img src={starOutline} alt="star-outline" key={index} />
                        ))}
                    </div>

                    <img 
                        src={validImage} 
                        alt="cars picture" 
                        className="w-50 h-35" 
                        onError={handleImageError}
                    />
                    {vehicle.stars >= 4 && (
                        <button className='bg-green-400/20 px-5 py-2 rounded-lg flex items-center gap-3 mt-5'>
                            <img src={featuredIcon} alt="featured-icon" className='w-4 h-4' />
                            <p className='text-green-600 font-semibold text-sm'>Destacado</p>
                        </button>
                    )}
                </div>
            </section>

            <section className="w-[685px] h-full pr-7 flex items-center gap-10 relative">
                <div className='flex flex-col gap-2 w-[300px]'>
                    <div className='mb-5 h-1/3'>
                        <p className='text-zinc-400 font-bold text-xs'>
                            GROUP {vehicle.vehicle_group} - {vehicle.code}
                        </p>
                        <h1 className='text-[#3179BD] font-semibold text-lg'>{vehicle.features.category || 'N/A'}</h1>
                        <p className='text-zinc-800 text-sm'>{vehicle.name_details || 'N/A'}</p>
                    </div>

                    <div className='flex items-center gap-3 text-xs font-semibold border-b border-b-zinc-200 pb-5 h-1/3'>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={passengerIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>{vehicle.features.seats || 'N/A'}</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={doorsIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>{vehicle.features.doors || 'N/A'}</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={transmissionIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>{vehicle.features.transmition ? vehicle.features.transmition.slice(0, 1).toUpperCase() : 'N/A'}</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={luggageIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>{vehicle.features.large_suitcase || 'N/A'}</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={carryIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>{vehicle.features.small_suitcase || 'N/A'}</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={airConditioningIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>{vehicle.features.air_conditioner ? "SI" : "NO"}</p>
                        </div>
                    </div>

                    <div className='flex items-center mt-5 gap-2 h-1/3 text-xs font-semibold'>
                        {vehiclesToQuote.find(v => v.brand === vehicle.brand && v.code === vehicle.code) ? (
                            <>
                                <img src={checkLogo} alt="check-logo" className='w-3 h-3' />
                                <p className='text-green-500'>Vehiculo agregado a su cotizacion {vehiclesToQuote.findIndex(v => v.brand === vehicle.brand && v.code === vehicle.code) + 1} de 5</p>
                            </>
                        ) : (
                            <>
                                <img src={vectorIcon} alt="vector-icon" className='w-3 h-3' />
                                <p className='text-[#3179BD]'>Seleccionar este vehiculo para cotizar</p>
                            </>
                        )}
                    </div>
                </div>

                <div className="h-full w-[2px] border-r-2 border-dashed border-zinc-300"></div>

                <Carousel className="w-[293px] h-[229px] relative">
                    <CarouselContent>
                        {vehicle.rates && Object.entries(vehicle.rates).map(([rateCode, rate]) => (
                            <CarouselItem key={rateCode}>
                                <div className='w-full h-[229px] flex flex-col justify-center items-center gap-5 rounded-xl shadow-lg py-3 px-6 border border-zinc-200 bg-white'>
                                    <div className='w-full h-1/3 flex flex-col items-center gap-1 border-b border-b-zinc-200'>
                                        <div className='flex items-center gap-5'>
                                            <h2 className='text-zinc-900 text-base font-semibold'>
                                                {rate?.rate_data?.name ? 
                                                    rate.rate_data.name.replace("Com", "").trim().toLowerCase().replace(/^./, (c) => c.toUpperCase()) 
                                                    : 'N/A'
                                                }
                                            </h2>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <img src={infoIcon} alt="info-icon" className='w-4 h-4' />
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-white border border-zinc-200 p-5">
                                                    <FeeDetail 
                                                        title={rate?.rate_data?.name ? 
                                                            rate.rate_data.name.replace("Com", "").trim().toLowerCase().replace(/^./, (c) => c.toUpperCase()) 
                                                            : 'N/A'
                                                        } 
                                                        items={rate?.inclusions_meta ? Object.values(rate.inclusions_meta) : []}
                                                    />
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <p className='text-zinc-500 text-xs'>Precio por 3 dias de renta</p>
                                    </div>
                                    <div className='w-full h-2/3 flex flex-col items-center gap-2'>
                                        <div className='flex items-center justify-center w-full'>
                                            <p className='text-lg text-[#3179BD] font-semibold whitespace-nowrap uppercase'>
                                                cop <span className='text-xl'>
                                                    {rate?.pricing?.COP?.total_charge?.base?.total_amount ? 
                                                        parseFloat(rate.pricing.COP.total_charge.base.total_amount).toLocaleString() 
                                                        : 'N/A'
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                        <p className='text-zinc-500 text-sm'>
                                            (USD {rate?.pricing?.USD?.total_charge?.base?.total_amount ? 
                                                parseFloat(rate.pricing.USD.total_charge.base.total_amount).toLocaleString() 
                                                : 'N/A'
                                            })
                                        </p>
                                        <button 
                                            onClick={() => addVehicleToQuote(vehicle)}
                                            className='w-full rounded-lg bg-[#3179BD] text-white py-3 cursor-pointer mt-3'
                                        >
                                            Seleccionar
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md border border-zinc-300 hover:bg-zinc-50 w-12 h-12">
                        <FaArrowLeft className="w-4 h-4 text-zinc-400" />
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md border border-zinc-300 hover:bg-zinc-50 w-12 h-12">
                        <FaArrowRight className="w-4 h-4 text-[#3179BD]" />
                    </CarouselNext>
                </Carousel>
            </section>
        </div>
    )
}
