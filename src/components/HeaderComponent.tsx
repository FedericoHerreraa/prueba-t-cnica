
import chevronIconUrl from '../assets/icons_logos/chevron-icon.svg';
import spaFlag from '../assets/icons_logos/spa-flag.svg';
import logoUdr from '../assets/icons_logos/logo-udr.svg';


export const Header = () => {
    return (
        <header className="w-full">
            <section className="w-full h-20 border-b border-b-zinc-100 flex items-center bg-white">
                <div className="w-[75%] mx-auto flex justify-between items-center">
                    <div className="w-1/3">
                        <img src={logoUdr} alt="logo-udr" />
                    </div>
                    <div className="w-2/3 flex justify-end items-center">
                        <div className="flex gap-10 items-center font-semibold text-sm">
                            <p>Buscar transaccion</p>
                            <p>Politicas</p>
                            <p>Contactenos</p>
                            <div className="px-3 py-2 bg-zinc-100 rounded-md flex items-center gap-6">
                                <img src={spaFlag} alt="spa-flag" />
                                <div className='flex items-center gap-3'>
                                    <p>Espanol</p>
                                    <img src={chevronIconUrl} alt="arrow-icon" className='rotate-90'/>
                                </div>
                            </div>
                            <div className="px-3 py-2 bg-zinc-100 rounded-md flex items-center gap-3">
                                <p>Hola, Javier</p>
                                <div className='rounded-full bg-[#3179BD] w-6 h-6 flex items-center justify-center'>
                                    <p className='text-white font-normal text-sm'>J</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-20 flex items-center bg-white">
                <div className="w-[75%] mx-auto flex items-center gap-4 text-sm">
                    <div className="flex-[1.5] flex items-center justify-around bg-zinc-100 rounded-md px-5 py-3">
                        <p className="whitespace-nowrap">Miami International Airport (MIA)</p>
                        <img src={chevronIconUrl} alt="arrow-icon" />
                        <p className="whitespace-nowrap">Orlando International Airport (MCO)</p>
                    </div>
                    <div className="flex-1 flex items-center justify-around bg-zinc-100 rounded-md px-5 py-3">
                        <p className="whitespace-nowrap">20 septiembre 2025, 12:00</p>
                        <img src={chevronIconUrl} alt="arrow-icon" />
                        <p className="whitespace-nowrap">30 septiembre 2025, 18:00</p>
                    </div>
                    <div className="flex-none w-auto flex items-center justify-around px-10 py-3 bg-[#3179BD] rounded-md">
                        <p className="text-white">Modificar</p>
                    </div>
                </div>
            </section>

            <section className="w-full h-16 bg-[#102C79] flex items-center">
                <div className="w-[65%] mx-auto flex items-center justify-between text-white text-sm font-semibold">
                    <p className='text-white'>Selecciona tu vehiculo</p>
                    <img src={chevronIconUrl} alt="arrow-icon" />
                    <p className='text-blue-200/50'>Agrega equipamiento adicional</p>
                    <img src={chevronIconUrl} alt="arrow-icon" />
                    <p className='text-blue-200/50'>Informacion del conductor</p>
                    <img src={chevronIconUrl} alt="arrow-icon" />
                    <p className='text-blue-200/50'>Confirmacion de la reserva</p>
                </div>
            </section>
        </header>
    )
}