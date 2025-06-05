import AvisLogo from '../assets/icons_logos/avis-logo.svg'
import BudgetLogo from '../assets/icons_logos/budget-logo.svg'
import PaylessLogo from '../assets/icons_logos/payless-logo.svg'


export const getBrandLogo = (brand: number) => {
    switch (brand) {
        case 1: return AvisLogo;
        case 2: return BudgetLogo;
        case 3: return PaylessLogo;
        default: return AvisLogo;
    }
}


export const selectImage = (img: string) => {
    const fileName = img
      .replace("https://test/assets/fleet_images/", "")
      .replace(".png", "");
  
    return `/cars/${fileName}.png`;
}

export const kiaSoul = '/cars/2021-kia-soul-s-5door-hatchback-black.png'
