import { categoryResponse } from './categoryResponse';
import { featureResponse } from './featureResponse';

export class articleResponse {
    id?: number;
    marque: string;
    reference: string;
    image: any;
    description: string;
    categoryId: number;
    category?: categoryResponse;
    features?: featureResponse[];
}