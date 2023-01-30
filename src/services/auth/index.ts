import instance from '../config/instance';

export type GetTrendingsItemType = {
  name: string;
  title: string;
  poster_path: string;
};

export type GetTrendingsType = {
  page: number;
  results: GetTrendingsItemType[];
};

const getTrendings = (page = 1) =>
  instance.get('trending/all/week', {
    params: {
      page,
    },
  });

export {getTrendings};
