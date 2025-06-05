import { Checkbox } from "@/components/ui/checkbox"
import logoUdr from '../assets/icons_logos/logo-udr.svg';
import anatoLogo from '../assets/company_logos/anato-logo.png';
import camaraColombiana from '../assets/company_logos/camara-colombiana-comercio-logo.png';
import superIntendencia from '../assets/company_logos/superintendencia-logo.png';
import superTransporte from '../assets/company_logos/super-transporte-logo.png';
import aeronauticaCivil from '../assets/company_logos/aeronautica-logo.png';
import iataLogo from '../assets/icons_logos/iata-logo.svg';
import greenFlameLogo from '../assets/icons_logos/greenFlame-logo.svg';
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
    return (
        <div className="h-[80vh] w-full">
            <section className="h-1/3 w-full bg-[#102C79]">
                <div className="w-[75%] mx-auto h-full flex items-center justify-between gap-20">    
                    <div className="flex flex-col gap-5 w-1/4">
                        <h1 className="text-white text-xl font-bold">Quieres estar al tanto de nuestras novedades?</h1>
                        <p className="text-zinc-300 text-sm">
                            Suscríbete a nuestro newsletter y mantente al día con nuestras novedades, lanzamientos de productos y ofertas exclusivas
                        </p>
                    </div>
                    <div className="w-3/4">
                        <div className="flex items-end gap-5 w-full">
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="name" className="text-white text-sm">Nombre</label>
                                <input type="text" className="p-3 rounded-sm bg-white w-full" />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="email" className="text-white text-sm">Dirección de e-mail</label>
                                <input type="text" className="p-3 rounded-sm bg-white w-full" />
                            </div>
                            <button className="bg-[#3179BD] text-white px-10 py-3 rounded-sm">¡Suscríbete!</button>
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <Checkbox className='border-zinc-400 cursor-pointer data-[state=checked]:border-[#3179BD] data-[state=checked]:bg-[#3179BD] data-[state=checked]:text-zinc-100' />
                            <p className="text-xs text-zinc-300">Acepto registrarme en la base de datos de Unión de Representaciones para recibir información y promociones en esta dirección de correo electrónico.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-2/3 w-full bg-white">
                <div className="w-[75%] mx-auto h-full">
                    <section className="h-2/4 w-full py-10 border-b border-b-zinc-200 flex items-start justify-between ">
                        <div className="w-1/5">
                            <img src={logoUdr} alt="logo-udr"/>
                            <div className="flex items-center gap-3 mt-5">
                                <div className="w-9 h-9 rounded-md bg-[#3179BD] flex items-center justify-center cursor-pointer hover:bg-[#2563eb] transition-colors">
                                    <FaWhatsapp className="text-white text-xl" />
                                </div>
                                <div className="w-9 h-9 rounded-md bg-[#3179BD] flex items-center justify-center cursor-pointer hover:bg-[#2563eb] transition-colors">
                                    <FaInstagram className="text-white text-xl" />
                                </div>
                                <div className="w-9 h-9 rounded-md bg-[#3179BD] flex items-center justify-center cursor-pointer hover:bg-[#2563eb] transition-colors">
                                    <FaFacebook className="text-white text-xl" />
                                </div>
                                <div className="w-9 h-9 rounded-md bg-[#3179BD] flex items-center justify-center cursor-pointer hover:bg-[#2563eb] transition-colors">
                                    <FaLinkedin className="text-white text-xl" />
                                </div>
                                <div className="w-9 h-9 rounded-md bg-[#3179BD] flex items-center justify-center cursor-pointer hover:bg-[#2563eb] transition-colors">
                                    <FaXTwitter className="text-white text-xl" />
                                </div>
                            </div>
                        </div>
                        {footerInfo.map((item) => (
                            <div className="w-1/5 flex flex-col gap-5">
                                <h2 className="text-[#3179BD] text-lg font-semibold">{item.title}</h2>
                                {item.info.map((info) => (
                                    <p className="text-zinc-500 text-sm">{info.title}</p>
                                ))}
                            </div>
                        ))}
                    </section>
                    <section className="h-1/4 w-full py-10 border-b border-b-zinc-200 flex items-center justify-between">
                        <img src={anatoLogo} alt="anato-logo" />
                        <img src={camaraColombiana} alt="anato-logo" />
                        <img src={superIntendencia} alt="anato-logo" />
                        <img src={superTransporte} alt="anato-logo" />
                        <img src={aeronauticaCivil} alt="anato-logo" />
                        <img src={iataLogo} alt="anato-logo" />
                    </section>
                    <section className="h-1/4 w-full py-10 flex justify-between items-center">
                        <p className="text-zinc-500 text-sm">© 2025 - Copyright Unión de Representaciones S.A.S. Todos los derechos reservados.</p>
                        <img src={greenFlameLogo} alt="green-flame-logo" />
                    </section>
                </div>
            </section>
        </div>
    )   
}


const footerInfo = [
    {
        title: '¿Necesitas ayuda?',
        info: [
            {
                title: 'union@udr.com.co',
            },
            {
                title: 'Telefono: +57 601 589 7880 / 99',
            },
            {
                title: 'Calle 20 No. 4-55, Piso 3, Bogotá',
            },
        ]
    },
    {
        title: 'Instructivos',
        info: [
            {
                title: 'Disney',
            },
            {
                title: 'Universal',
            },
            {
                title: 'Avis Budget',
            },
            {
                title: 'Terrawind',
            },
        ]
    },
    {
        title: 'Información',
        info: [
            {
                title: 'Aviso legal',
            },
            {
                title: 'Politicas de privacidad',
            },
            {
                title: 'Terminos y condiciones',
            },
            {
                title: 'Ver mis transacciones',
            },
        ]
    },
    {
        title: 'Nosotros',
        info: [
            {
                title: '¿Quienes somos?',
            },
            {
                title: 'NIT: 860535628-1',
            },
            {
                title: 'Registro Nacional de Turismo No. 1041',
            },
        ]
    },

]