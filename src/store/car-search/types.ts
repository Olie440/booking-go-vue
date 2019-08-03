interface CarSearchLoadedState {
  loading: "Success";
  data: CarSearchData;
}

interface CarSearchNotLoadedState {
  loading: "None" | "Loading" | "Error";
  data: null;
}

export interface CarSearchData {
  placeType: string;
  bookingId: number;
  name: string;
  iata: string;
  city: string;
  region: string;
  country: string;
}

export type CarSearchState = CarSearchLoadedState | CarSearchNotLoadedState;
