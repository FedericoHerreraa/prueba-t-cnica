import type { Inclusion } from '@/types/types'
import checkLogo from '../assets/icons_logos/check-logo.svg'
import chevronIconUrl from '../assets/icons_logos/chevron-icon.svg'


export const FeeDetail = ({ title, items }: { title: string, items: Inclusion[] }) => {
    return (
        <div>
            <div className="flex items-center pb-5 border-b border-b-zinc-200">
                <h1 className="text-black text-base font-semibold">Detalle de la tarifa</h1>
            </div>
            
            <div className="mt-5">
                <h2 className="text-black text-base font-semibold">{title}</h2>
                <section className="mt-2">
                    {items.map((item) => (
                        <div className="flex items-center justify-between gap-5 ml-2">
                            <div className="flex items-center gap-2">
                                <img src={checkLogo} alt="check-logo" className='w-3 h-3' />
                                <p className="text-zinc-600 text-sm">{item.name}</p>
                            </div>
                            <img src={chevronIconUrl} alt="arrow-icon" className='rotate-90'/>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}
