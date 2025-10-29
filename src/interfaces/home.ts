// Home page component interfaces
export interface IProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  isNew?: boolean;
  isSale?: boolean;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  image: string;
  productCount: number;
  icon: string;
}

export interface IFilterOption {
  value: string;
  label: string;
}

export interface ISearchSectionProps {
  // Optional props for future customization
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: IFilterOption[]) => void;
}

export interface IFeaturedProductsProps {
  // Optional props for future customization
  title?: string;
  subtitle?: string;
  products?: IProduct[];
}

export interface IProductCategoriesProps {
  // Optional props for future customization
  title?: string;
  subtitle?: string;
  categories?: ICategory[];
}

export interface IHeroSectionProps {
  // Optional props for future customization
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}