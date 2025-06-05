

import deleteLogo from '../assets/icons_logos/delete-logo.svg'
import { useVehicleStore } from "@/store/vehicleStore";
import { getBrandLogo, selectImage, kiaSoul } from "@/utils/reusable-functions";
import { useEffect, useState } from 'react';


export const VehicleSelected = () => {
    const vehiclesToQuote = useVehicleStore(state => state.vehiclesToQuote);
    const getSelectedVehicleForQuote = useVehicleStore(state => state.getSelectedVehicleForQuote);
    const removeVehicleFromQuote = useVehicleStore(state => state.removeVehicleFromQuote);
    
    const [imageUrl, setImageUrl] = useState<string>(kiaSoul);
    const [imageError, setImageError] = useState<boolean>(false);   
    
    const selectedVehicle = getSelectedVehicleForQuote();

    useEffect(() => {
        try {
            const newImageUrl = selectImage(selectedVehicle?.picture_url.normal || '');
            setImageUrl(newImageUrl);
            setImageError(false);
        } catch (error) {
            console.error('Error loading image:', error);
            setImageError(true);
            setImageUrl(kiaSoul);
        }
    }, [selectedVehicle?.picture_url.normal]);

    const handleImageError = () => {
        setImageError(true);
        setImageUrl(kiaSoul);
    };

    const validImage = imageError ? kiaSoul : imageUrl;

    if (vehiclesToQuote.length === 0 || !selectedVehicle) return null;

    const getVehiclePrice = () => {
        if (selectedVehicle.rates && Object.keys(selectedVehicle.rates).length > 0) {
            const firstRateKey = Object.keys(selectedVehicle.rates)[0];
            const firstRate = selectedVehicle.rates[firstRateKey];
            return {
                cop: firstRate.pricing?.COP?.total_charge?.total?.total_amount || '0',
                usd: firstRate.pricing?.USD?.total_charge?.total?.total_amount || '0',
                rateName: firstRate.rate_data?.name || 'N/A'
            };
        }
        return { cop: '0', usd: '0', rateName: 'N/A' };
    };

    const { cop, usd } = getVehiclePrice();


    return (
        <div className="w-full h-30 bg-white shadow-2xl">
            <div className="w-[75%] mx-auto h-full flex items-center justify-between">
                <div className="flex items-center gap-10 w-1/3">
                    <img src={getBrandLogo(selectedVehicle.brand)} alt="brand-logo" className="w-15 h-15" />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-semibold">{selectedVehicle.name}</h1>
                        <p className="text-sm text-blue-500">Ver detalle de la tarifa</p>
                    </div>
                </div>
                <div className="w-2/3 flex items-center justify-end gap-10">
                    <img src={validImage} alt="vehicle-img" className="w-30 h-20" onError={handleImageError} />
                    <div className="flex flex-col gap-1 items-end">
                        <p className="text-lg text-[#3179BD] font-semibold">
                            COP {parseFloat(cop).toLocaleString()}
                        </p>
                        <p className="text-sm text-zinc-500">
                            USD {parseFloat(usd).toLocaleString()}
                        </p>
                    </div>
                    <div className="px-10 cursor-pointer font-semibold py-3 bg-[#3179BD] rounded-lg text-white">
                        <p>Continuar</p>
                    </div>
                    <button 
                        onClick={() => removeVehicleFromQuote(selectedVehicle)}
                        className="cursor-pointer flex items-center justify-center gap-4 px-10 font-semibold py-3 bg-[#E91248] rounded-lg text-white"
                    >
                        <img src={deleteLogo} alt="delete-logo" className="w-5 h-5" />
                        <p>Eliminar</p>
                    </button>
                </div>
            </div>
        </div>
    )
}