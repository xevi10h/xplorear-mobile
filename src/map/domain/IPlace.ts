export interface IPlace {
  id: string;
  name: string;
  rating: number;
  importance: number;
  address: {
    city: string;
    province: string;
    country: string;
    street: string;
  };
  coordinates: [number, number];
  imageUrl: string;
}