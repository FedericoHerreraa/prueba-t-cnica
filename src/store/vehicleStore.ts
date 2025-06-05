import { create } from "zustand"
import { type VehicleStore, type Car } from "../types/types"


export const useVehicleStore = create<VehicleStore>((set, get) => ({
    vehicles: [],
    vehiclesToQuote: [],
    showFeaturedFirst: false,
    priceSort: 'highest',
    filters: {
        brand: ['Avis', 'Budget', 'Payless'],
        category: ['Económico', 'Compacto', 'Intermedio', 'Estándar', 'Grande', 'SUV', 'Van', 'Premium', 'Lujo', 'Convertible', 'Minivan', 'Eléctrico', 'Híbrido', 'Especial', 'Standard Recreational Vehicle'],
        luggage: [1, 2, 3, 4, 7],
        seats: [4, 5, 7, 12, 8],
        priceRange: [300000, 2000000],
    },


    addVehicleToQuote: (vehicle: Car) => {
        const vehiclesSelected = get().vehiclesToQuote
        if (vehiclesSelected.length < 5) {
            set((state) => ({
                vehiclesToQuote: [...state.vehiclesToQuote, vehicle]
            }));
        }
    },

    removeVehicleFromQuote: (vehicle: Car) => {
        set((state) => ({
            vehiclesToQuote: state.vehiclesToQuote.filter(v => 
                !(v.brand === vehicle.brand && v.code === vehicle.code)
            )
        }));
    },

    getSelectedVehicleForQuote: () => {
        const vehiclesSelected = get().vehiclesToQuote;
        if (vehiclesSelected.length === 0) return null;
        return vehiclesSelected[vehiclesSelected.length - 1];
    },

    setFilter: (key: string, value: string) => {
        set((state) => {
            let newFilters = { ...state.filters };
            
            if (key === 'brand') {
                const newBrand = state.filters.brand.includes(value)
                    ? state.filters.brand.filter(item => item !== value)
                    : [...state.filters.brand, value];
                newFilters = { ...newFilters, brand: newBrand };
            }
            if (key === 'category') {
                const newCategory = state.filters.category.includes(value)
                    ? state.filters.category.filter(item => item !== value)
                    : [...state.filters.category, value];
                newFilters = { ...newFilters, category: newCategory };
            }
            if (key === 'luggage') {
                const newLuggage = state.filters.luggage.includes(parseInt(value))
                    ? state.filters.luggage.filter(item => item !== parseInt(value))
                    : [...state.filters.luggage, parseInt(value)];
                newFilters = { ...newFilters, luggage: newLuggage };
            }
            if (key === 'seats') {
                const newSeats = state.filters.seats.includes(parseInt(value))
                    ? state.filters.seats.filter(item => item !== parseInt(value))
                    : [...state.filters.seats, parseInt(value)];
                newFilters = { ...newFilters, seats: newSeats };
            }
            
            return { filters: newFilters };
        });
        
        get().fetchVehicles(100);
    },

    setPriceRange: (range: [number, number]) => {
        set((state) => ({
            filters: { ...state.filters, priceRange: range }
        }));
        get().fetchVehicles(100);
    },

    setShowFeaturedFirst: (show: boolean) => {
        set({ showFeaturedFirst: show });
        get().fetchVehicles(100);
    },

    setPriceSort: (sort: 'none' | 'highest' | 'lowest') => {
        set({ priceSort: sort });
        get().fetchVehicles(100);
    },

    fetchVehicles: async (limit: number) => {
        const { filters, showFeaturedFirst, priceSort } = get();

        const response = await fetch('http://localhost:5173/carsJSON.json')
        const data = await response.json()
        const allVehicles = [
            ...(data.cars.Avis || []),
            ...(data.cars.Budget || []),
            ...(data.cars.Payless || [])
        ];

        const shuffleArray = <T>(array: T[]): T[] => {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        const getVehiclePrice = (vehicle: Car): number => {
            if (vehicle.rates && Object.keys(vehicle.rates).length > 0) {
                const firstRateKey = Object.keys(vehicle.rates)[0];
                const firstRate = vehicle.rates[firstRateKey];
                if (firstRate.pricing?.COP?.total_charge?.total?.total_amount) {
                    return parseFloat(firstRate.pricing.COP.total_charge.total.total_amount);
                }
            }
            return 0;
        };

        const filteredVehicles = allVehicles.filter((vehicle) => {
            const brandNames = ['', 'Avis', 'Budget', 'Payless'];
            const vehicleBrand = brandNames[vehicle.brand];
            const brandMatch = filters.brand.length === 0 || filters.brand.includes(vehicleBrand);
            
            const categoryMatch = filters.category.length === 0 || filters.category.includes(vehicle.features.category);
            
            const luggageMatch = filters.luggage.length === 0 || filters.luggage.includes(vehicle.features.large_suitcase);
            
            const seatsMatch = filters.seats.length === 0 || filters.seats.includes(parseInt(vehicle.features.seats));
            
            let priceMatch = true;
            if (vehicle.rates && Object.keys(vehicle.rates).length > 0) {
                const vehiclePrice = getVehiclePrice(vehicle);
                priceMatch = vehiclePrice >= filters.priceRange[0] && vehiclePrice <= filters.priceRange[1];
            }
            
            return brandMatch && categoryMatch && luggageMatch && seatsMatch && priceMatch;
        });

        let finalVehicles = filteredVehicles;
        
        if (showFeaturedFirst && priceSort !== 'none') {
            finalVehicles = filteredVehicles.sort((a, b) => {
                const aFeatured = a.stars >= 4;
                const bFeatured = b.stars >= 4;
                
                if (aFeatured && !bFeatured) return -1;
                if (!aFeatured && bFeatured) return 1;
                
                const priceA = getVehiclePrice(a);
                const priceB = getVehiclePrice(b);
                
                if (priceSort === 'highest') {
                    return priceB - priceA;
                } else {
                    return priceA - priceB;
                }
            });
        } else if (showFeaturedFirst) {
            finalVehicles = filteredVehicles.sort((a, b) => {
                const aFeatured = a.stars >= 4;
                const bFeatured = b.stars >= 4;
                
                if (aFeatured && !bFeatured) return -1;
                if (!aFeatured && bFeatured) return 1;
                
                return b.stars - a.stars;
            });
        } else if (priceSort !== 'none') {
            finalVehicles = filteredVehicles.sort((a, b) => {
                const priceA = getVehiclePrice(a);
                const priceB = getVehiclePrice(b);
                
                if (priceSort === 'highest') {
                    return priceB - priceA;
                } else {
                    return priceA - priceB;
                }
            });
        } else {
            finalVehicles = shuffleArray(filteredVehicles);
        }

        set({ vehicles: finalVehicles.slice(0, limit) })
    }
}))