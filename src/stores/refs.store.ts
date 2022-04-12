import { defineStore } from 'pinia';

export const useRefsStore = defineStore({
  id: 'images',
  state() {
    return {
      slides: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'],
      links: [
        { name: 'Home', url: '#home', data: 'Home' },
        { name: 'About', url: '#about', data: 'About' },
        { name: 'Gallery', url: '#gallery', data: 'Gallery' },
        { name: 'News', url: '#news', data: 'News' },
      ],
      cards: [
        {
          title:
            'Help bring clean and safe water to every person on the planet.The water crisis is massive. But together, we can solve it',
          subtitle: 'Water',
          goal: 45000,
          raised: 35000,
          togo: 10000,
          image: 'card1',
        },
        {
          title:
            'Making real change happen by providing poverty alleviation through Education, we can solve it',
          subtitle: 'Education',
          goal: 45000,
          raised: 38000,
          togo: 7000,
          image: 'card2',
        },
        {
          title:
            'Our role in the last decade was on health service improvement via the education of health workers.',
          subtitle: 'Medicine',
          goal: 45000,
          raised: 24000,
          togo: 16000,
          image: 'card3',
        },
      ],
      news: [
        {
          title:
            'Help bring clean and safe water to every person on the planet.',
          subtitle: 'Education',
          owner: 'by Admin',
          date: 'Jun 25, 2021',
          image: 'insights1',
        },
        {
          title:
            'Making real change happen by providing poverty through Education',
          subtitle: 'Water',
          owner: 'by Admin',
          date: 'Jun 25, 2021',
          image: 'insights2',
        },
        {
          title:
            'Our role in the last decade was on health service improvement.',
          subtitle: 'Food',
          owner: 'by Admin',
          date: 'Jun 25, 2021',
          image: 'insights3',
        },
      ],
      images: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
      ],
    };
  },
});
