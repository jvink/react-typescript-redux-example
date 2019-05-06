interface Id {
  value: string;
  name: string;
}

interface Name {
  first: string;
  last: string;
  title: string;
}

interface Location {
  city: string;
  coordinates: Coordinates;
  postcode: number;
  state: string;
  street: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Person {
  id: Id;
  name: Name;
  location: Location;
  picture: Picture;
}
