import { data as countries } from 'emoji-flags';

export const single = [
  {
    name: 'Germany',
    value: 40632
  },
  {
    name: 'United States',
    value: 49737
  },
  {
    name: 'France',
    value: 36745
  },
  {
    name: 'United Kingdom',
    value: 36240
  },
  {
    name: 'Spain',
    value: 33000
  },
  {
    name: 'Italy',
    value: 35800
  }
];

export const multi = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        value: 40632
      },
      {
        name: '2000',
        value: 36953
      },
      {
        name: '1990',
        value: 31476
      }
    ]
  },
  {
    name: 'United States',
    series: [
      {
        name: '2010',
        value: 49737
      },
      {
        name: '2000',
        value: 45986
      },
      {
        name: '1990',
        value: 37060
      }
    ]
  },
  {
    name: 'France',
    series: [
      {
        name: '2010',
        value: 36745
      },
      {
        name: '2000',
        value: 34774
      },
      {
        name: '1990',
        value: 29476
      }
    ]
  },
  {
    name: 'United Kingdom',
    series: [
      {
        name: '2010',
        value: 36240
      },
      {
        name: '2000',
        value: 32543
      },
      {
        name: '1990',
        value: 26424
      }
    ]
  }
];


export const bubble = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 80.3,
        r: 80.4
      },
      {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 80.3,
        r: 78
      },
      {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.4,
        r: 79
      }
    ]
  },
  {
    name: 'United States',
    series: [
      {
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 78.8,
        r: 310
      },
      {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 76.9,
        r: 283
      },
      {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.4,
        r: 253
      }
    ]
  },
  {
    name: 'France',
    series: [
      {
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 81.4,
        r: 63
      },
      {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 79.1,
        r: 59.4
      },
      {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 77.2,
        r: 56.9
      }
    ]
  },
  {
    name: 'United Kingdom',
    series: [
      {
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 80.2,
        r: 62.7
      },
      {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 77.8,
        r: 58.9
      },
      {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.7,
        r: 57.1
      }
    ]
  }
];
