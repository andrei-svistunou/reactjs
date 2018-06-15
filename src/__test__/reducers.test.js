import reducers from '../redux/reducers';

test('reducers init', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({
    films: {
      searchingFilters: [
        { name: 'title', value: 'title', active: true },
        { name: 'genres', value: 'genre', active: false }
      ],
      orderFilters: [
        {
          value: 'release date',
          name: 'release_date',
          active: false,
          sortingFilter: 'byDate'
        },
        {
          value: 'rating',
          name: 'rating',
          active: false,
          sortingFilter: 'byVote'
        }
      ],
      moviesList: [],
      limit: null,
      offset: null,
      total: null,
      selectedFilm: null
    }
  });
});

test('reducers change filter searching', () => {
  const state = reducers(
    {
      films: {
        searchingFilters: [
          { name: 'title', value: 'title', active: true },
          { name: 'genres', value: 'genre', active: false }
        ],
        orderFilters: [
          {
            value: 'release date',
            name: 'release_date',
            active: false,
            sortingFilter: 'byDate'
          },
          {
            value: 'rating',
            name: 'rating',
            active: false,
            sortingFilter: 'byVote'
          }
        ],
        moviesList: [],
        limit: null,
        offset: null,
        total: null,
        selectedFilm: null
      }
    },
    {
      type: 'SET_SEARCH_FILTER',
      filter: { name: 'genres', value: 'genre', active: false }
    }
  );
  expect(state).toEqual({
    films: {
      searchingFilters: [
        { name: 'title', value: 'title', active: false },
        { name: 'genres', value: 'genre', active: true }
      ],
      orderFilters: [
        {
          value: 'release date',
          name: 'release_date',
          active: false,
          sortingFilter: 'byDate'
        },
        {
          value: 'rating',
          name: 'rating',
          active: false,
          sortingFilter: 'byVote'
        }
      ],
      moviesList: [],
      limit: null,
      offset: null,
      total: null,
      selectedFilm: null
    }
  });
});

test('reducers saerch', () => {
  const state = reducers(
    {
      films: {
        searchingFilters: [
          { name: 'title', value: 'title', active: false },
          { name: 'genres', value: 'genre', active: true }
        ],
        orderFilters: [
          {
            value: 'release date',
            name: 'release_date',
            active: false,
            sortingFilter: 'byDate'
          },
          {
            value: 'rating',
            name: 'rating',
            active: false,
            sortingFilter: 'byVote'
          }
        ],
        moviesList: [],
        limit: null,
        offset: null,
        total: null,
        selectedFilm: null
      }
    },
    {
      type: 'SEARCH_MOVIE',
      movies: {
        data: [
          {
            id: 278661,
            title: 'Server Sundaram',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '1964-12-11',
            poster_path:
              'https://image.tmdb.org/t/p/w500/cS3u53cFjt7ZJYYts8e79ZoAkSU.jpg',
            overview:
              'Waiting tables in a hotel restaurant and living at home with his mother, young Sundaram (Nagesh) lives a happy life. Then he falls in love with the beautiful Radha (Vijaya K.R) and everything changes. Unfortunately, the girl of his dreams doesn\'t share his romantic feelings. What\'s a waiter to do? Go into acting, of course! What he doesn\'t expect is the great success he achieves … and the renewed potential for love with Radha.',
            budget: 0,
            revenue: 0,
            genres: ['Romance', 'Comedy', 'Drama'],
            runtime: 165
          },
          {
            id: 351286,
            title: 'Jurassic World: Fallen Kingdom',
            tagline: 'Life finds a way',
            vote_average: 0,
            vote_count: 28,
            release_date: '2018-06-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
            overview:
              'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
            budget: 0,
            revenue: 0,
            genres: [
              'Action',
              'Adventure',
              'Drama',
              'Science Fiction',
              'Thriller'
            ],
            runtime: null
          },
          {
            id: 467867,
            title: 'Paterno',
            tagline: 'The greater the legend, the harder the fall.',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-07',
            poster_path:
              'https://image.tmdb.org/t/p/w500/Ad4y2Cc2FcY1wOk3DH7HVWlrgEM.jpg',
            overview:
              'After becoming the winningest coach in college football history, Joe Paterno is embroiled in Penn State\'s Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.',
            budget: 0,
            revenue: 0,
            genres: ['TV Movie', 'Drama'],
            runtime: 105
          },
          {
            id: 412059,
            title: 'Mobile Homes',
            tagline: '',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-04-04',
            poster_path:
              'https://image.tmdb.org/t/p/w500/of72rtl3j0C9yJMlSJZHXnaByz8.jpg',
            overview:
              'In forgotten towns along the American border, a young mother drifts from one motel to the next with her intoxicating boyfriend and her 8-year-old son. The makeshift family scrapes by, living one hustle at a time, until the discovery of a mobile home community offers an alternative life.',
            budget: 0,
            revenue: 0,
            genres: ['Drama'],
            runtime: 105
          },
          {
            id: 443009,
            title: 'Don’t Worry, He Won’t Get Far on Foot',
            tagline: '',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-04-04',
            poster_path:
              'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
            overview:
              'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
            budget: 0,
            revenue: 0,
            genres: ['Comedy', 'Drama'],
            runtime: 113
          },
          {
            id: 509885,
            title: 'Le Portrait',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-03',
            poster_path:
              'https://image.tmdb.org/t/p/w500/ns3l4pPOORrlSgdCLSEXJDn8hvB.jpg',
            overview: '',
            budget: 0,
            revenue: 0,
            genres: ['Drama', 'Mystery', 'Fantasy', 'History'],
            runtime: null
          },
          {
            id: 498299,
            title: 'Can I Recognize Your Soul',
            tagline: 'when physical appearance is the least what you need',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-03',
            poster_path:
              'https://image.tmdb.org/t/p/w500/luz35TmazOgRbJboWt24owoB5Eg.jpg',
            overview:
              'As Christine tries to find a relief after her brother\'s death, she meets Alonzo at the neighborhood basketball court. After finding out that he lost his father 2 years prior, they became close, and felt that if they stuck together, it would be easier to cope. Now Christine is trying to find a way to encounter her brother\'s soul as her relationship with Alonzo develops.',
            budget: 0,
            revenue: 0,
            genres: ['Mystery', 'Drama', 'Music'],
            runtime: null
          },
          {
            id: 482560,
            title: 'Covet: The Island of Desire',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2017-01-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/jPxatX1ReNULfOOZEDuc5o6T9nT.jpg',
            overview:
              'People who are on fishing boats in a secluded countryside wake up to their deepest desires.  Money, sex, power ... In the uninhabited desert where there is endless desire, it turns out that somebody is found as a body and another person is on the island.  Can they escape safely from the island of desire?',
            budget: 0,
            revenue: 0,
            genres: ['Romance', 'Drama'],
            runtime: 81
          },
          {
            id: 426251,
            title: 'Love After Love',
            tagline: '',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-03-30',
            poster_path:
              'https://image.tmdb.org/t/p/w500/rvPAfO18Kk4C9jcOvlJao70jSCj.jpg',
            overview:
              'A sixty-something mother and her two adult sons cope and move onward following the death of their larger-than-life father/husband.',
            budget: 0,
            revenue: 0,
            genres: ['Drama'],
            runtime: 93
          },
          {
            id: 472805,
            title: 'Outside In',
            tagline: 'Things are never the same on the outside.',
            vote_average: 0,
            vote_count: 2,
            release_date: '2018-03-30',
            poster_path:
              'https://image.tmdb.org/t/p/w500/o8mGEiiEmR7yyoDqk9iSAeokYVZ.jpg',
            overview:
              'An ex-con struggling to readjust to life in his small town forms an intense bond with his former high-school teacher.',
            budget: 0,
            revenue: 0,
            genres: ['Drama'],
            runtime: 109
          }
        ],
        total: 1246,
        offset: 0,
        limit: 10
      }
    }
  );
  expect(state).toEqual({
    films: {
      searchingFilters: [
        { name: 'title', value: 'title', active: false },
        { name: 'genres', value: 'genre', active: true }
      ],
      orderFilters: [
        {
          value: 'release date',
          name: 'release_date',
          active: false,
          sortingFilter: 'byDate'
        },
        {
          value: 'rating',
          name: 'rating',
          active: false,
          sortingFilter: 'byVote'
        }
      ],
      moviesList: [
        {
          id: 278661,
          title: 'Server Sundaram',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '1964-12-11',
          poster_path:
            'https://image.tmdb.org/t/p/w500/cS3u53cFjt7ZJYYts8e79ZoAkSU.jpg',
          overview:
            'Waiting tables in a hotel restaurant and living at home with his mother, young Sundaram (Nagesh) lives a happy life. Then he falls in love with the beautiful Radha (Vijaya K.R) and everything changes. Unfortunately, the girl of his dreams doesn\'t share his romantic feelings. What\'s a waiter to do? Go into acting, of course! What he doesn\'t expect is the great success he achieves … and the renewed potential for love with Radha.',
          budget: 0,
          revenue: 0,
          genres: ['Romance', 'Comedy', 'Drama'],
          runtime: 165
        },
        {
          id: 351286,
          title: 'Jurassic World: Fallen Kingdom',
          tagline: 'Life finds a way',
          vote_average: 0,
          vote_count: 28,
          release_date: '2018-06-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
          overview:
            'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
          budget: 0,
          revenue: 0,
          genres: [
            'Action',
            'Adventure',
            'Drama',
            'Science Fiction',
            'Thriller'
          ],
          runtime: null
        },
        {
          id: 467867,
          title: 'Paterno',
          tagline: 'The greater the legend, the harder the fall.',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-07',
          poster_path:
            'https://image.tmdb.org/t/p/w500/Ad4y2Cc2FcY1wOk3DH7HVWlrgEM.jpg',
          overview:
            'After becoming the winningest coach in college football history, Joe Paterno is embroiled in Penn State\'s Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.',
          budget: 0,
          revenue: 0,
          genres: ['TV Movie', 'Drama'],
          runtime: 105
        },
        {
          id: 412059,
          title: 'Mobile Homes',
          tagline: '',
          vote_average: 0,
          vote_count: 1,
          release_date: '2018-04-04',
          poster_path:
            'https://image.tmdb.org/t/p/w500/of72rtl3j0C9yJMlSJZHXnaByz8.jpg',
          overview:
            'In forgotten towns along the American border, a young mother drifts from one motel to the next with her intoxicating boyfriend and her 8-year-old son. The makeshift family scrapes by, living one hustle at a time, until the discovery of a mobile home community offers an alternative life.',
          budget: 0,
          revenue: 0,
          genres: ['Drama'],
          runtime: 105
        },
        {
          id: 443009,
          title: 'Don’t Worry, He Won’t Get Far on Foot',
          tagline: '',
          vote_average: 0,
          vote_count: 1,
          release_date: '2018-04-04',
          poster_path:
            'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
          overview:
            'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
          budget: 0,
          revenue: 0,
          genres: ['Comedy', 'Drama'],
          runtime: 113
        },
        {
          id: 509885,
          title: 'Le Portrait',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-03',
          poster_path:
            'https://image.tmdb.org/t/p/w500/ns3l4pPOORrlSgdCLSEXJDn8hvB.jpg',
          overview: '',
          budget: 0,
          revenue: 0,
          genres: ['Drama', 'Mystery', 'Fantasy', 'History'],
          runtime: null
        },
        {
          id: 498299,
          title: 'Can I Recognize Your Soul',
          tagline: 'when physical appearance is the least what you need',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-03',
          poster_path:
            'https://image.tmdb.org/t/p/w500/luz35TmazOgRbJboWt24owoB5Eg.jpg',
          overview:
            'As Christine tries to find a relief after her brother\'s death, she meets Alonzo at the neighborhood basketball court. After finding out that he lost his father 2 years prior, they became close, and felt that if they stuck together, it would be easier to cope. Now Christine is trying to find a way to encounter her brother\'s soul as her relationship with Alonzo develops.',
          budget: 0,
          revenue: 0,
          genres: ['Mystery', 'Drama', 'Music'],
          runtime: null
        },
        {
          id: 482560,
          title: 'Covet: The Island of Desire',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2017-01-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/jPxatX1ReNULfOOZEDuc5o6T9nT.jpg',
          overview:
            'People who are on fishing boats in a secluded countryside wake up to their deepest desires.  Money, sex, power ... In the uninhabited desert where there is endless desire, it turns out that somebody is found as a body and another person is on the island.  Can they escape safely from the island of desire?',
          budget: 0,
          revenue: 0,
          genres: ['Romance', 'Drama'],
          runtime: 81
        },
        {
          id: 426251,
          title: 'Love After Love',
          tagline: '',
          vote_average: 0,
          vote_count: 1,
          release_date: '2018-03-30',
          poster_path:
            'https://image.tmdb.org/t/p/w500/rvPAfO18Kk4C9jcOvlJao70jSCj.jpg',
          overview:
            'A sixty-something mother and her two adult sons cope and move onward following the death of their larger-than-life father/husband.',
          budget: 0,
          revenue: 0,
          genres: ['Drama'],
          runtime: 93
        },
        {
          id: 472805,
          title: 'Outside In',
          tagline: 'Things are never the same on the outside.',
          vote_average: 0,
          vote_count: 2,
          release_date: '2018-03-30',
          poster_path:
            'https://image.tmdb.org/t/p/w500/o8mGEiiEmR7yyoDqk9iSAeokYVZ.jpg',
          overview:
            'An ex-con struggling to readjust to life in his small town forms an intense bond with his former high-school teacher.',
          budget: 0,
          revenue: 0,
          genres: ['Drama'],
          runtime: 109
        }
      ],
      limit: 10,
      offset: 0,
      total: 1246,
      selectedFilm: null
    }
  });
});

test('reducers sorting movies', () => {
  const state = reducers(
    {
      films: {
        searchingFilters: [
          { name: 'title', value: 'title', active: false },
          { name: 'genres', value: 'genre', active: true }
        ],
        orderFilters: [
          {
            value: 'release date',
            name: 'release_date',
            active: false,
            sortingFilter: 'byDate'
          },
          {
            value: 'rating',
            name: 'rating',
            active: false,
            sortingFilter: 'byVote'
          }
        ],
        moviesList: [
          {
            id: 278661,
            title: 'Server Sundaram',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '1964-12-11',
            poster_path:
              'https://image.tmdb.org/t/p/w500/cS3u53cFjt7ZJYYts8e79ZoAkSU.jpg',
            overview:
              'Waiting tables in a hotel restaurant and living at home with his mother, young Sundaram (Nagesh) lives a happy life. Then he falls in love with the beautiful Radha (Vijaya K.R) and everything changes. Unfortunately, the girl of his dreams doesn\'t share his romantic feelings. What\'s a waiter to do? Go into acting, of course! What he doesn\'t expect is the great success he achieves … and the renewed potential for love with Radha.',
            budget: 0,
            revenue: 0,
            genres: ['Romance', 'Comedy', 'Drama'],
            runtime: 165
          },
          {
            id: 351286,
            title: 'Jurassic World: Fallen Kingdom',
            tagline: 'Life finds a way',
            vote_average: 0,
            vote_count: 28,
            release_date: '2018-06-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
            overview:
              'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
            budget: 0,
            revenue: 0,
            genres: [
              'Action',
              'Adventure',
              'Drama',
              'Science Fiction',
              'Thriller'
            ],
            runtime: null
          },
          {
            id: 467867,
            title: 'Paterno',
            tagline: 'The greater the legend, the harder the fall.',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-07',
            poster_path:
              'https://image.tmdb.org/t/p/w500/Ad4y2Cc2FcY1wOk3DH7HVWlrgEM.jpg',
            overview:
              'After becoming the winningest coach in college football history, Joe Paterno is embroiled in Penn State\'s Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.',
            budget: 0,
            revenue: 0,
            genres: ['TV Movie', 'Drama'],
            runtime: 105
          },
          {
            id: 412059,
            title: 'Mobile Homes',
            tagline: '',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-04-04',
            poster_path:
              'https://image.tmdb.org/t/p/w500/of72rtl3j0C9yJMlSJZHXnaByz8.jpg',
            overview:
              'In forgotten towns along the American border, a young mother drifts from one motel to the next with her intoxicating boyfriend and her 8-year-old son. The makeshift family scrapes by, living one hustle at a time, until the discovery of a mobile home community offers an alternative life.',
            budget: 0,
            revenue: 0,
            genres: ['Drama'],
            runtime: 105
          },
          {
            id: 443009,
            title: 'Don’t Worry, He Won’t Get Far on Foot',
            tagline: '',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-04-04',
            poster_path:
              'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
            overview:
              'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
            budget: 0,
            revenue: 0,
            genres: ['Comedy', 'Drama'],
            runtime: 113
          },
          {
            id: 509885,
            title: 'Le Portrait',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-03',
            poster_path:
              'https://image.tmdb.org/t/p/w500/ns3l4pPOORrlSgdCLSEXJDn8hvB.jpg',
            overview: '',
            budget: 0,
            revenue: 0,
            genres: ['Drama', 'Mystery', 'Fantasy', 'History'],
            runtime: null
          },
          {
            id: 498299,
            title: 'Can I Recognize Your Soul',
            tagline: 'when physical appearance is the least what you need',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-03',
            poster_path:
              'https://image.tmdb.org/t/p/w500/luz35TmazOgRbJboWt24owoB5Eg.jpg',
            overview:
              'As Christine tries to find a relief after her brother\'s death, she meets Alonzo at the neighborhood basketball court. After finding out that he lost his father 2 years prior, they became close, and felt that if they stuck together, it would be easier to cope. Now Christine is trying to find a way to encounter her brother\'s soul as her relationship with Alonzo develops.',
            budget: 0,
            revenue: 0,
            genres: ['Mystery', 'Drama', 'Music'],
            runtime: null
          },
          {
            id: 482560,
            title: 'Covet: The Island of Desire',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2017-01-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/jPxatX1ReNULfOOZEDuc5o6T9nT.jpg',
            overview:
              'People who are on fishing boats in a secluded countryside wake up to their deepest desires.  Money, sex, power ... In the uninhabited desert where there is endless desire, it turns out that somebody is found as a body and another person is on the island.  Can they escape safely from the island of desire?',
            budget: 0,
            revenue: 0,
            genres: ['Romance', 'Drama'],
            runtime: 81
          },
          {
            id: 426251,
            title: 'Love After Love',
            tagline: '',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-03-30',
            poster_path:
              'https://image.tmdb.org/t/p/w500/rvPAfO18Kk4C9jcOvlJao70jSCj.jpg',
            overview:
              'A sixty-something mother and her two adult sons cope and move onward following the death of their larger-than-life father/husband.',
            budget: 0,
            revenue: 0,
            genres: ['Drama'],
            runtime: 93
          },
          {
            id: 472805,
            title: 'Outside In',
            tagline: 'Things are never the same on the outside.',
            vote_average: 0,
            vote_count: 2,
            release_date: '2018-03-30',
            poster_path:
              'https://image.tmdb.org/t/p/w500/o8mGEiiEmR7yyoDqk9iSAeokYVZ.jpg',
            overview:
              'An ex-con struggling to readjust to life in his small town forms an intense bond with his former high-school teacher.',
            budget: 0,
            revenue: 0,
            genres: ['Drama'],
            runtime: 109
          }
        ],
        limit: 10,
        offset: 0,
        total: 1246,
        selectedFilm: null
      }
    },
    {
      type: 'ORDER_FILTER',
      filter: {
        value: 'rating',
        name: 'rating',
        active: false,
        sortingFilter: 'byVote'
      }
    }
  );
  expect(state).toEqual({
    films: {
      searchingFilters: [
        { name: 'title', value: 'title', active: false },
        { name: 'genres', value: 'genre', active: true }
      ],
      orderFilters: [
        {
          value: 'release date',
          name: 'release_date',
          active: false,
          sortingFilter: 'byDate'
        },
        {
          value: 'rating',
          name: 'rating',
          active: true,
          sortingFilter: 'byVote'
        }
      ],
      moviesList: [
        {
          id: 278661,
          title: 'Server Sundaram',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '1964-12-11',
          poster_path:
            'https://image.tmdb.org/t/p/w500/cS3u53cFjt7ZJYYts8e79ZoAkSU.jpg',
          overview:
            'Waiting tables in a hotel restaurant and living at home with his mother, young Sundaram (Nagesh) lives a happy life. Then he falls in love with the beautiful Radha (Vijaya K.R) and everything changes. Unfortunately, the girl of his dreams doesn\'t share his romantic feelings. What\'s a waiter to do? Go into acting, of course! What he doesn\'t expect is the great success he achieves … and the renewed potential for love with Radha.',
          budget: 0,
          revenue: 0,
          genres: ['Romance', 'Comedy', 'Drama'],
          runtime: 165
        },
        {
          id: 351286,
          title: 'Jurassic World: Fallen Kingdom',
          tagline: 'Life finds a way',
          vote_average: 0,
          vote_count: 28,
          release_date: '2018-06-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
          overview:
            'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
          budget: 0,
          revenue: 0,
          genres: [
            'Action',
            'Adventure',
            'Drama',
            'Science Fiction',
            'Thriller'
          ],
          runtime: null
        },
        {
          id: 467867,
          title: 'Paterno',
          tagline: 'The greater the legend, the harder the fall.',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-07',
          poster_path:
            'https://image.tmdb.org/t/p/w500/Ad4y2Cc2FcY1wOk3DH7HVWlrgEM.jpg',
          overview:
            'After becoming the winningest coach in college football history, Joe Paterno is embroiled in Penn State\'s Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.',
          budget: 0,
          revenue: 0,
          genres: ['TV Movie', 'Drama'],
          runtime: 105
        },
        {
          id: 412059,
          title: 'Mobile Homes',
          tagline: '',
          vote_average: 0,
          vote_count: 1,
          release_date: '2018-04-04',
          poster_path:
            'https://image.tmdb.org/t/p/w500/of72rtl3j0C9yJMlSJZHXnaByz8.jpg',
          overview:
            'In forgotten towns along the American border, a young mother drifts from one motel to the next with her intoxicating boyfriend and her 8-year-old son. The makeshift family scrapes by, living one hustle at a time, until the discovery of a mobile home community offers an alternative life.',
          budget: 0,
          revenue: 0,
          genres: ['Drama'],
          runtime: 105
        },
        {
          id: 443009,
          title: 'Don’t Worry, He Won’t Get Far on Foot',
          tagline: '',
          vote_average: 0,
          vote_count: 1,
          release_date: '2018-04-04',
          poster_path:
            'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
          overview:
            'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
          budget: 0,
          revenue: 0,
          genres: ['Comedy', 'Drama'],
          runtime: 113
        },
        {
          id: 509885,
          title: 'Le Portrait',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-03',
          poster_path:
            'https://image.tmdb.org/t/p/w500/ns3l4pPOORrlSgdCLSEXJDn8hvB.jpg',
          overview: '',
          budget: 0,
          revenue: 0,
          genres: ['Drama', 'Mystery', 'Fantasy', 'History'],
          runtime: null
        },
        {
          id: 498299,
          title: 'Can I Recognize Your Soul',
          tagline: 'when physical appearance is the least what you need',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-03',
          poster_path:
            'https://image.tmdb.org/t/p/w500/luz35TmazOgRbJboWt24owoB5Eg.jpg',
          overview:
            'As Christine tries to find a relief after her brother\'s death, she meets Alonzo at the neighborhood basketball court. After finding out that he lost his father 2 years prior, they became close, and felt that if they stuck together, it would be easier to cope. Now Christine is trying to find a way to encounter her brother\'s soul as her relationship with Alonzo develops.',
          budget: 0,
          revenue: 0,
          genres: ['Mystery', 'Drama', 'Music'],
          runtime: null
        },
        {
          id: 482560,
          title: 'Covet: The Island of Desire',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2017-01-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/jPxatX1ReNULfOOZEDuc5o6T9nT.jpg',
          overview:
            'People who are on fishing boats in a secluded countryside wake up to their deepest desires.  Money, sex, power ... In the uninhabited desert where there is endless desire, it turns out that somebody is found as a body and another person is on the island.  Can they escape safely from the island of desire?',
          budget: 0,
          revenue: 0,
          genres: ['Romance', 'Drama'],
          runtime: 81
        },
        {
          id: 426251,
          title: 'Love After Love',
          tagline: '',
          vote_average: 0,
          vote_count: 1,
          release_date: '2018-03-30',
          poster_path:
            'https://image.tmdb.org/t/p/w500/rvPAfO18Kk4C9jcOvlJao70jSCj.jpg',
          overview:
            'A sixty-something mother and her two adult sons cope and move onward following the death of their larger-than-life father/husband.',
          budget: 0,
          revenue: 0,
          genres: ['Drama'],
          runtime: 93
        },
        {
          id: 472805,
          title: 'Outside In',
          tagline: 'Things are never the same on the outside.',
          vote_average: 0,
          vote_count: 2,
          release_date: '2018-03-30',
          poster_path:
            'https://image.tmdb.org/t/p/w500/o8mGEiiEmR7yyoDqk9iSAeokYVZ.jpg',
          overview:
            'An ex-con struggling to readjust to life in his small town forms an intense bond with his former high-school teacher.',
          budget: 0,
          revenue: 0,
          genres: ['Drama'],
          runtime: 109
        }
      ],
      limit: 10,
      offset: 0,
      total: 1246,
      selectedFilm: null
    }
  });
});

test('reducers select film', () => {
  const state = reducers(
    {
      films: {
        searchingFilters: [
          { name: 'title', value: 'title', active: true },
          { name: 'genres', value: 'genre', active: false }
        ],
        orderFilters: [
          {
            value: 'release date',
            name: 'release_date',
            active: false,
            sortingFilter: 'byDate'
          },
          {
            value: 'rating',
            name: 'rating',
            active: false,
            sortingFilter: 'byVote'
          }
        ],
        moviesList: [
          {
            id: 278661,
            title: 'Server Sundaram',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '1964-12-11',
            poster_path:
              'https://image.tmdb.org/t/p/w500/cS3u53cFjt7ZJYYts8e79ZoAkSU.jpg',
            overview:
              'Waiting tables in a hotel restaurant and living at home with his mother, young Sundaram (Nagesh) lives a happy life. Then he falls in love with the beautiful Radha (Vijaya K.R) and everything changes. Unfortunately, the girl of his dreams doesn\'t share his romantic feelings. What\'s a waiter to do? Go into acting, of course! What he doesn\'t expect is the great success he achieves … and the renewed potential for love with Radha.',
            budget: 0,
            revenue: 0,
            genres: ['Romance', 'Comedy', 'Drama'],
            runtime: 165
          },
          {
            id: 447365,
            title: 'Guardians of the Galaxy Vol. 3',
            tagline: '',
            vote_average: 0,
            vote_count: 9,
            release_date: '2020-05-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
            overview:
              'The third film based on Marvel\'s Guardians of the Galaxy.',
            budget: 0,
            revenue: 0,
            genres: ['Action', 'Adventure', 'Science Fiction'],
            runtime: null
          },
          {
            id: 320288,
            title: 'X-Men: Dark Phoenix',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2019-02-14',
            poster_path:
              'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
            overview:
              'Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!',
            budget: 0,
            revenue: 0,
            genres: ['Action', 'Science Fiction'],
            runtime: null
          },
          {
            id: 351286,
            title: 'Jurassic World: Fallen Kingdom',
            tagline: 'Life finds a way',
            vote_average: 0,
            vote_count: 28,
            release_date: '2018-06-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
            overview:
              'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
            budget: 0,
            revenue: 0,
            genres: [
              'Action',
              'Adventure',
              'Drama',
              'Science Fiction',
              'Thriller'
            ],
            runtime: null
          },
          {
            id: 383498,
            title: 'Deadpool 2',
            tagline: 'Prepare for the Second Coming.',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-05-16',
            poster_path:
              'https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg',
            overview:
              'Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy\'s life.',
            budget: 0,
            revenue: 0,
            genres: ['Action', 'Comedy', 'Science Fiction'],
            runtime: null
          },
          {
            id: 460019,
            title: 'Truth or Dare',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-12',
            poster_path:
              'https://image.tmdb.org/t/p/w500/kdkNaQYZ7dhM80LsnAGKpH8ca2g.jpg',
            overview:
              'A harmless game of “Truth or Dare” among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.',
            budget: 0,
            revenue: 0,
            genres: ['Thriller', 'Horror'],
            runtime: null
          },
          {
            id: 497802,
            title: 'Pandas',
            tagline: 'WILD AT HEART',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-06',
            poster_path:
              'https://image.tmdb.org/t/p/w500/8z96ZqkF8w4yA2xO92HnNNEcNxI.jpg',
            overview:
              'In the mountains of Sichuan, China, a researcher forms a bond with Qian Qian, a panda who is about to experience nature for the first time.',
            budget: 0,
            revenue: 0,
            genres: ['Documentary'],
            runtime: null
          },
          {
            id: 443009,
            title: 'Don’t Worry, He Won’t Get Far on Foot',
            tagline: '',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-04-04',
            poster_path:
              'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
            overview:
              'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
            budget: 0,
            revenue: 0,
            genres: ['Comedy', 'Drama'],
            runtime: 113
          },
          {
            id: 485548,
            title: 'Parallel Love: The Story of a Band Called Luxury',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/qCvae8HztqvWANAD5UOs9GBWPxG.jpg',
            overview:
              'In the 1990s, alt-rock band Luxury is skyrocketing toward national fame until a life-threatening tour bus wreck shakes each band member to his core. Today, Luxury is led by three orthodox priests--and they\'re still rocking.',
            budget: 0,
            revenue: 0,
            genres: ['Documentary'],
            runtime: null
          },
          {
            id: 482560,
            title: 'Covet: The Island of Desire',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2017-01-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/jPxatX1ReNULfOOZEDuc5o6T9nT.jpg',
            overview:
              'People who are on fishing boats in a secluded countryside wake up to their deepest desires.  Money, sex, power ... In the uninhabited desert where there is endless desire, it turns out that somebody is found as a body and another person is on the island.  Can they escape safely from the island of desire?',
            budget: 0,
            revenue: 0,
            genres: ['Romance', 'Drama'],
            runtime: 81
          }
        ],
        limit: 10,
        offset: 0,
        total: 1136,
        selectedFilm: null
      }
    },
    {
      type: 'SELECT_FILM',
      film: {
        id: 447365,
        title: 'Guardians of the Galaxy Vol. 3',
        tagline: '',
        vote_average: 0,
        vote_count: 9,
        release_date: '2020-05-01',
        poster_path:
          'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
        overview: 'The third film based on Marvel\'s Guardians of the Galaxy.',
        budget: 0,
        revenue: 0,
        genres: ['Action', 'Adventure', 'Science Fiction'],
        runtime: null
      }
    }
  );
  expect(state).toEqual({
    films: {
      searchingFilters: [
        { name: 'title', value: 'title', active: true },
        { name: 'genres', value: 'genre', active: false }
      ],
      orderFilters: [
        {
          value: 'release date',
          name: 'release_date',
          active: false,
          sortingFilter: 'byDate'
        },
        {
          value: 'rating',
          name: 'rating',
          active: false,
          sortingFilter: 'byVote'
        }
      ],
      moviesList: [
        {
          id: 278661,
          title: 'Server Sundaram',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '1964-12-11',
          poster_path:
            'https://image.tmdb.org/t/p/w500/cS3u53cFjt7ZJYYts8e79ZoAkSU.jpg',
          overview:
            'Waiting tables in a hotel restaurant and living at home with his mother, young Sundaram (Nagesh) lives a happy life. Then he falls in love with the beautiful Radha (Vijaya K.R) and everything changes. Unfortunately, the girl of his dreams doesn\'t share his romantic feelings. What\'s a waiter to do? Go into acting, of course! What he doesn\'t expect is the great success he achieves … and the renewed potential for love with Radha.',
          budget: 0,
          revenue: 0,
          genres: ['Romance', 'Comedy', 'Drama'],
          runtime: 165
        },
        {
          id: 447365,
          title: 'Guardians of the Galaxy Vol. 3',
          tagline: '',
          vote_average: 0,
          vote_count: 9,
          release_date: '2020-05-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
          overview: 'The third film based on Marvel\'s Guardians of the Galaxy.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          runtime: null
        },
        {
          id: 320288,
          title: 'X-Men: Dark Phoenix',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2019-02-14',
          poster_path:
            'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
          overview:
            'Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Science Fiction'],
          runtime: null
        },
        {
          id: 351286,
          title: 'Jurassic World: Fallen Kingdom',
          tagline: 'Life finds a way',
          vote_average: 0,
          vote_count: 28,
          release_date: '2018-06-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
          overview:
            'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
          budget: 0,
          revenue: 0,
          genres: [
            'Action',
            'Adventure',
            'Drama',
            'Science Fiction',
            'Thriller'
          ],
          runtime: null
        },
        {
          id: 383498,
          title: 'Deadpool 2',
          tagline: 'Prepare for the Second Coming.',
          vote_average: 0,
          vote_count: 1,
          release_date: '2018-05-16',
          poster_path:
            'https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg',
          overview:
            'Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy\'s life.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Comedy', 'Science Fiction'],
          runtime: null
        },
        {
          id: 460019,
          title: 'Truth or Dare',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-12',
          poster_path:
            'https://image.tmdb.org/t/p/w500/kdkNaQYZ7dhM80LsnAGKpH8ca2g.jpg',
          overview:
            'A harmless game of “Truth or Dare” among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.',
          budget: 0,
          revenue: 0,
          genres: ['Thriller', 'Horror'],
          runtime: null
        },
        {
          id: 497802,
          title: 'Pandas',
          tagline: 'WILD AT HEART',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-06',
          poster_path:
            'https://image.tmdb.org/t/p/w500/8z96ZqkF8w4yA2xO92HnNNEcNxI.jpg',
          overview:
            'In the mountains of Sichuan, China, a researcher forms a bond with Qian Qian, a panda who is about to experience nature for the first time.',
          budget: 0,
          revenue: 0,
          genres: ['Documentary'],
          runtime: null
        },
        {
          id: 443009,
          title: 'Don’t Worry, He Won’t Get Far on Foot',
          tagline: '',
          vote_average: 0,
          vote_count: 1,
          release_date: '2018-04-04',
          poster_path:
            'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
          overview:
            'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
          budget: 0,
          revenue: 0,
          genres: ['Comedy', 'Drama'],
          runtime: 113
        },
        {
          id: 485548,
          title: 'Parallel Love: The Story of a Band Called Luxury',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-04-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/qCvae8HztqvWANAD5UOs9GBWPxG.jpg',
          overview:
            'In the 1990s, alt-rock band Luxury is skyrocketing toward national fame until a life-threatening tour bus wreck shakes each band member to his core. Today, Luxury is led by three orthodox priests--and they\'re still rocking.',
          budget: 0,
          revenue: 0,
          genres: ['Documentary'],
          runtime: null
        },
        {
          id: 482560,
          title: 'Covet: The Island of Desire',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2017-01-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/jPxatX1ReNULfOOZEDuc5o6T9nT.jpg',
          overview:
            'People who are on fishing boats in a secluded countryside wake up to their deepest desires.  Money, sex, power ... In the uninhabited desert where there is endless desire, it turns out that somebody is found as a body and another person is on the island.  Can they escape safely from the island of desire?',
          budget: 0,
          revenue: 0,
          genres: ['Romance', 'Drama'],
          runtime: 81
        }
      ],
      limit: 10,
      offset: 0,
      total: 1136,
      selectedFilm: {
        id: 447365,
        title: 'Guardians of the Galaxy Vol. 3',
        tagline: '',
        vote_average: 0,
        vote_count: 9,
        release_date: '2020-05-01',
        poster_path:
          'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
        overview: 'The third film based on Marvel\'s Guardians of the Galaxy.',
        budget: 0,
        revenue: 0,
        genres: ['Action', 'Adventure', 'Science Fiction'],
        runtime: null
      }
    }
  });
});

test('reducers unselect film', () => {
  const state = reducers(
    {
      films: {
        searchingFilters: [
          { name: 'title', value: 'title', active: true },
          { name: 'genres', value: 'genre', active: false }
        ],
        orderFilters: [
          {
            value: 'release date',
            name: 'release_date',
            active: false,
            sortingFilter: 'byDate'
          },
          {
            value: 'rating',
            name: 'rating',
            active: false,
            sortingFilter: 'byVote'
          }
        ],
        moviesList: [
          {
            id: 278661,
            title: 'Server Sundaram',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '1964-12-11',
            poster_path:
              'https://image.tmdb.org/t/p/w500/cS3u53cFjt7ZJYYts8e79ZoAkSU.jpg',
            overview:
              'Waiting tables in a hotel restaurant and living at home with his mother, young Sundaram (Nagesh) lives a happy life. Then he falls in love with the beautiful Radha (Vijaya K.R) and everything changes. Unfortunately, the girl of his dreams doesn\'t share his romantic feelings. What\'s a waiter to do? Go into acting, of course! What he doesn\'t expect is the great success he achieves … and the renewed potential for love with Radha.',
            budget: 0,
            revenue: 0,
            genres: ['Romance', 'Comedy', 'Drama'],
            runtime: 165
          },
          {
            id: 447365,
            title: 'Guardians of the Galaxy Vol. 3',
            tagline: '',
            vote_average: 0,
            vote_count: 9,
            release_date: '2020-05-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
            overview:
              'The third film based on Marvel\'s Guardians of the Galaxy.',
            budget: 0,
            revenue: 0,
            genres: ['Action', 'Adventure', 'Science Fiction'],
            runtime: null
          },
          {
            id: 320288,
            title: 'X-Men: Dark Phoenix',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2019-02-14',
            poster_path:
              'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
            overview:
              'Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!',
            budget: 0,
            revenue: 0,
            genres: ['Action', 'Science Fiction'],
            runtime: null
          },
          {
            id: 351286,
            title: 'Jurassic World: Fallen Kingdom',
            tagline: 'Life finds a way',
            vote_average: 0,
            vote_count: 28,
            release_date: '2018-06-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
            overview:
              'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
            budget: 0,
            revenue: 0,
            genres: [
              'Action',
              'Adventure',
              'Drama',
              'Science Fiction',
              'Thriller'
            ],
            runtime: null
          },
          {
            id: 383498,
            title: 'Deadpool 2',
            tagline: 'Prepare for the Second Coming.',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-05-16',
            poster_path:
              'https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg',
            overview:
              'Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy\'s life.',
            budget: 0,
            revenue: 0,
            genres: ['Action', 'Comedy', 'Science Fiction'],
            runtime: null
          },
          {
            id: 460019,
            title: 'Truth or Dare',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-12',
            poster_path:
              'https://image.tmdb.org/t/p/w500/kdkNaQYZ7dhM80LsnAGKpH8ca2g.jpg',
            overview:
              'A harmless game of “Truth or Dare” among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.',
            budget: 0,
            revenue: 0,
            genres: ['Thriller', 'Horror'],
            runtime: null
          },
          {
            id: 497802,
            title: 'Pandas',
            tagline: 'WILD AT HEART',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-06',
            poster_path:
              'https://image.tmdb.org/t/p/w500/8z96ZqkF8w4yA2xO92HnNNEcNxI.jpg',
            overview:
              'In the mountains of Sichuan, China, a researcher forms a bond with Qian Qian, a panda who is about to experience nature for the first time.',
            budget: 0,
            revenue: 0,
            genres: ['Documentary'],
            runtime: null
          },
          {
            id: 443009,
            title: 'Don’t Worry, He Won’t Get Far on Foot',
            tagline: '',
            vote_average: 0,
            vote_count: 1,
            release_date: '2018-04-04',
            poster_path:
              'https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg',
            overview:
              'A man becomes paralyzed after a car accident and discovers drawing as a therapy.',
            budget: 0,
            revenue: 0,
            genres: ['Comedy', 'Drama'],
            runtime: 113
          },
          {
            id: 485548,
            title: 'Parallel Love: The Story of a Band Called Luxury',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2018-04-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/qCvae8HztqvWANAD5UOs9GBWPxG.jpg',
            overview:
              'In the 1990s, alt-rock band Luxury is skyrocketing toward national fame until a life-threatening tour bus wreck shakes each band member to his core. Today, Luxury is led by three orthodox priests--and they\'re still rocking.',
            budget: 0,
            revenue: 0,
            genres: ['Documentary'],
            runtime: null
          },
          {
            id: 482560,
            title: 'Covet: The Island of Desire',
            tagline: '',
            vote_average: 0,
            vote_count: 0,
            release_date: '2017-01-01',
            poster_path:
              'https://image.tmdb.org/t/p/w500/jPxatX1ReNULfOOZEDuc5o6T9nT.jpg',
            overview:
              'People who are on fishing boats in a secluded countryside wake up to their deepest desires.  Money, sex, power ... In the uninhabited desert where there is endless desire, it turns out that somebody is found as a body and another person is on the island.  Can they escape safely from the island of desire?',
            budget: 0,
            revenue: 0,
            genres: ['Romance', 'Drama'],
            runtime: 81
          }
        ],
        limit: 10,
        offset: 0,
        total: 1136,
        selectedFilm: {
          id: 447365,
          title: 'Guardians of the Galaxy Vol. 3',
          tagline: '',
          vote_average: 0,
          vote_count: 9,
          release_date: '2020-05-01',
          poster_path:
            'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
          overview: 'The third film based on Marvel\'s Guardians of the Galaxy.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          runtime: null
        }
      }
    },
    { type: 'UNSELECT_FILM' }
  );
  expect(state).toEqual({
    films: {
      searchingFilters: [
        { name: 'title', value: 'title', active: true },
        { name: 'genres', value: 'genre', active: false }
      ],
      orderFilters: [
        {
          value: 'release date',
          name: 'release_date',
          active: false,
          sortingFilter: 'byDate'
        },
        {
          value: 'rating',
          name: 'rating',
          active: false,
          sortingFilter: 'byVote'
        }
      ],
      moviesList: [],
      limit: null,
      offset: null,
      total: null,
      selectedFilm: null
    }
  });
});
