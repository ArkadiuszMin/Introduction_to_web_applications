export interface ITrip {
    name: string;
    country: string;
    start: string;
    end: string;
    price: number;
    capacity: number;
    taken: number;
    description: string;
    image: string;
    rating: number;
    ratingNumber: number;
    opinions: Array<Array<string>>;
    images: Array<string>;
}
