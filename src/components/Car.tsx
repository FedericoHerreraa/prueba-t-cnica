
// Icons
import avisLogo from '../assets/icons_logos/avis-logo.svg'
import starOutline from '../assets/icons_logos/star-outlined-icon.svg'
import starSolid from '../assets/icons_logos/star-solid-icon.svg'
import kiaSoul from '../assets/cars/2021-kia-soul-s-5door-hatchback-black.png'
import featuredIcon from '../assets/icons_logos/featured-icon.svg'
import infoIcon from '../assets/icons_logos/info-icon.svg'
import passengerIcon from '../assets/icons_logos/passengers-icon.svg'
import doorsIcon from '../assets/icons_logos/doors-icon.svg'
import transmissionIcon from '../assets/icons_logos/transmission-icon.svg'
import carryIcon from '../assets/icons_logos/carry-icon.svg'
import luggageIcon from '../assets/icons_logos/luggage-icon.svg'
import airConditioningIcon from '../assets/icons_logos/air-conditioning-icon.svg'
import checkLogo from '../assets/icons_logos/check-logo.svg'

export const Car = () => {
    return (
        <div className="rounded-3xl bg-white h-[271px] w-[968px] overflow-hidden flex shadow-lg">
            <section className="w-[284px] h-full border-l-8 border-l-[#0071B1]">
                <div className='pt-7 pl-7'>
                    <img src={avisLogo} alt="avis-logo"/>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={starSolid} alt="star-solid" />
                        <img src={starSolid} alt="star-solid" />
                        <img src={starSolid} alt="star-solid" />
                        <img src={starOutline} alt="star-outline" />
                        <img src={starOutline} alt="star-outline" />
                    </div>
                    <img src={kiaSoul} alt="kia-soul"/>
                    <button className='bg-green-400/20 px-5 py-2 rounded-lg flex items-center gap-3 mt-5'>
                        <img src={featuredIcon} alt="featured-icon" className='w-4 h-4' />
                        <p className='text-green-600 font-semibold text-sm'>Destacado</p>
                    </button>
                </div>
            </section>

            <section className="w-[685px] h-full pr-7 flex items-center gap-10">
                <div className='flex flex-col gap-2 w-[300px]'>
                    <div className='mb-5 h-1/3'>
                        <p className='text-zinc-400 font-bold text-xs'>GRUPO B - CCAR</p>
                        <h1 className='text-[#0071B1] font-semibold text-lg'>Compacto</h1>
                        <p className='text-zinc-800 text-sm'>Kia Soul o similar</p>
                    </div>

                    <div className='flex items-center gap-3 text-xs font-semibold border-b border-b-zinc-200 pb-5 h-1/3'>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={passengerIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>5</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={doorsIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>4</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={transmissionIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>A</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={luggageIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>2</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={carryIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>1</p>
                        </div>
                        <div className='px-2 py-1 rounded-sm bg-zinc-200/70 flex items-center gap-1'>
                            <img src={airConditioningIcon} alt="passenger-icon" className='w-3 h-3' />
                            <p>SI</p>
                        </div>
                    </div>

                    <div className='flex items-center mt-5 gap-2 h-1/3 text-xs font-semibold'>
                        <img src={checkLogo} alt="check-logo" className='w-3 h-3' />
                        <p className='text-green-500'>Vehiculo agregado a su cotizacion (1 de 5)</p>

                        {/* <img src={checkLogo} alt="check-logo" className='w-3 h-3' />
                        <p className='text-[#0071B1]'>Seleccionar este vehiculo para cotizar</p> */}
                    </div>
                </div>

                <div className="h-full w-[2px] border-r-2 border-dashed border-zinc-300"></div>

                <div className='w-[293px] h-[229px] flex flex-col justify-center items-center gap-5 rounded-xl shadow-lg py-3 px-6 border border-zinc-100'>
                    <div className='w-full h-1/3 flex flex-col items-center gap-1 border-b border-b-zinc-200'>
                        <div className='flex items-center gap-5'>
                            <h2 className='text-zinc-900 text-base font-semibold'>Inclusive Light</h2>
                            <img src={infoIcon} alt="info-icon" className='w-4 h-4' />
                        </div>
                        <p className='text-zinc-500 text-xs'>Precio por 3 dias de renta</p>
                    </div>
                    <div className='w-full h-2/3 flex flex-col items-center gap-2'>
                        <p className='text-lg text-[#0071B1] font-semibold'>cop <span className='text-xl'>1,895.160</span></p>
                        <p className='text-zinc-500 text-sm'>(USD 1,229.72)</p>
                        <button className='w-full rounded-lg bg-[#0071B1] text-white py-3 cursor-pointer mt-3'>
                            Seleccionar
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
