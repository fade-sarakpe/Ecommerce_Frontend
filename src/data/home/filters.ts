import { IFilterOption } from '@/interfaces/home';

export const categoryFilters: IFilterOption[] = [
  { value: "all", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "fashion", label: "Fashion" },
  { value: "home", label: "Home & Garden" },
  { value: "sports", label: "Sports & Fitness" },
  { value: "books", label: "Books & Media" },
  { value: "health", label: "Health & Beauty" },
];

export const sortOptions: IFilterOption[] = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Customer Rating" },
  { value: "newest", label: "Newest First" },
];

export const quickCategories: string[] = [
  "Electronics",
  "Fashion",
  "Home",
  "Sports",
  "Books",
  "Beauty",
  "Automotive",
  "Toys",
];