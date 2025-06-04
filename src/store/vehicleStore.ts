import { create } from "zustand"
import { type VehicleStore } from "../types/types"


export const useVehicleStore = create<VehicleStore>((set, get) => ({
    vehicles: [],
    filters: {
        brand: ['Avis', 'Budget', 'Payless'],
        category: ['Todas las categorías', 'Económico', 'Compacto', 'Intermedio', 'Standard', 'Full Size', 'SUV Intermedio', 'Premium', 'Lujo', 'Convertible', 'SUV Premium', 'Maxivan', 'SUV Standard Elite', 'Minivan', 'SUV Standard'],
        luggage: [1, 2, 3, 4, 7],
        seats: [4, 5, 7, 12, 8],
        priceRange: [0, 99999999],
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
        
        // Re-fetch vehicles with new filters
        get().fetchVehicles(100);
    },
    fetchVehicles: async (limit: number) => {
        const { filters } = get();

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

        const filteredVehicles = allVehicles.filter((vehicle) => {
            const brandNames = ['', 'Avis', 'Budget', 'Payless'];
            const vehicleBrand = brandNames[vehicle.brand];
            const brandMatch = filters.brand.length === 0 || filters.brand.includes(vehicleBrand);
            
            const categoryMatch = filters.category.length === 0 || filters.category.includes(vehicle.features.category);
            
            const luggageMatch = filters.luggage.length === 0 || filters.luggage.includes(vehicle.features.large_suitcase);
            
            const seatsMatch = filters.seats.length === 0 || filters.seats.includes(parseInt(vehicle.features.seats));
            
            return brandMatch && categoryMatch && luggageMatch && seatsMatch;
        });

        const shuffledVehicles = shuffleArray(filteredVehicles);
        set({ vehicles: shuffledVehicles.slice(0, limit) })
    }
}))