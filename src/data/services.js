import { siteData } from './siteData';

export const serviceCategories = siteData.services.categories;
export const servicesData = serviceCategories.flatMap((cat) => cat.services);
export default serviceCategories;
