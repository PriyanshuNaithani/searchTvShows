 type Cast = {
  charactor: {
    birthday: string;
    country: { name: string; code: string; timezone: string };
    deathday: null;
    gender: string;
    id: number;
    image: { medium: string; original: string };
    name: string;
    updated: number;
    url: string;
  },
  person: {
    birthday: string;
    country: { name: string; code: string; timezone: string };
    deathday: null;
    gender: string;
    id: number;
    image: { medium: string; original: string };
    name: string;
    updated: number;
    url: string;
  }
};

export default Cast;
