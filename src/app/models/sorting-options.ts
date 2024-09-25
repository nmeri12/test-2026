// Custom sorting options
export interface SortOption {
  label: string,
  value: string
}

//available sort options
export const sortingOptions: SortOption[] = [
  {value: 'price-asc', label: 'Default (Price Ascending)'},
  {value: 'price-desc', label: 'Price Descending'},
  {value: 'name-asc', label: 'Name Ascending'},
  {value: 'name-desc', label: 'Name Descending'},
  {value: 'downloadSpeed-asc', label: 'Download Speed Ascending'},
  {value: 'downloadSpeed-desc', label: 'Download Speed Descending'},
  {value: 'uploadSpeed-asc', label: 'Upload Speed Ascending'},
  {value: 'uploadSpeed-desc', label: 'Upload Speed Descending'}
];
