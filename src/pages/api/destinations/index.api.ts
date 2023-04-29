// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    boston: [
      {
        id: 1,
        city: 'Boston',
        img: '/assets/LSI.jpg',
        alt: 'LSI Boston',
        school: 'LSI Boston',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 3.295,88',
      },
      {
        id: 2,
        city: 'Boston',
        img: '/assets/LSI.jpg',
        alt: 'LSI Boston',
        school: 'LSI Boston',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 6.281,55',
      },
      {
        id: 3,
        city: 'Boston',
        img: '/assets/LSI.jpg',
        alt: 'LSI Boston',
        school: 'LSI Boston',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '12 semanas',
        hoursWeek: '26 horas por semana',
        price: 'R$ 21.062,58',
      },
      {
        id: 4,
        city: 'Boston',
        img: '/assets/LSI.jpg',
        alt: 'LSI Boston',
        school: 'LSI Boston',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 30.489,92',
      },
      {
        id: 5,
        city: 'Boston',
        img: '/assets/EC.jpg',
        alt: 'EC Boston',
        school: 'EC Boston',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 30.833,88',
      },
      {
        id: 6,
        city: 'Boston',
        img: '/assets/EC.jpg',
        alt: 'EC Boston',
        school: 'EC Boston',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '24 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 34.742,40',
      },
      {
        id: 7,
        city: 'Boston',
        img: '/assets/LSI.jpg',
        alt: 'LSI Boston',
        school: 'LSI Boston',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '24 semanas',
        hoursWeek: '20.83 horas por semana',
        price: 'R$ 35.481,60',
      },
      {
        id: 8,
        city: 'Boston',
        img: '/assets/LSI.jpg',
        alt: 'LSI Boston',
        school: 'LSI Boston',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '24 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 39.473,28',
      },
      {
        id: 9,
        city: 'Boston',
        img: '/assets/EC.jpg',
        alt: 'EC Boston',
        school: 'EC Boston',
        courseName: 'Curso geral de ingles',
        quantityWeek: '36 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 46.250,82',
      },
      {
        id: 10,
        city: 'Boston',
        img: '/assets/LSI.jpg',
        alt: 'LSI Boston',
        school: 'LSI Boston',
        courseName: 'Curso geral de ingles',
        quantityWeek: '36 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 47.234,88',
      },
    ],
    newyork: [
      {
        id: 1,
        city: 'New York',
        img: '/assets/RENNERT.jpg',
        alt: 'Rennert New York',
        school: 'Rennert New York',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 3.157,44',
      },
      {
        id: 2,
        city: 'New York',
        img: '/assets/LSI.jpg',
        alt: 'LSI New York',
        school: 'LSI New York',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 3.603,60',
      },
      {
        id: 3,
        city: 'New York',
        img: '/assets/LSI.jpg',
        alt: 'LSI New York',
        school: 'LSI New York',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '2 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 4.514,40',
      },
      {
        id: 4,
        city: 'New York',
        img: '/assets/RENNERT.jpg',
        alt: 'Rennert New York',
        school: 'Rennert New York',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 6.314,88',
      },
      {
        id: 5,
        city: 'New York',
        img: '/assets/LSI.jpg',
        alt: 'LSI New York',
        school: 'LSI New York',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 8.220,30',
      },
      {
        id: 6,
        city: 'New York',
        img: '/assets/EC.jpg',
        alt: 'EC New York',
        school: 'EC New York',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '15 horas por semana',
        price: 'R$ 15.016,32',
      },
      {
        id: 7,
        city: 'New York',
        img: '/assets/EC.jpg',
        alt: 'EC New York',
        school: 'EC New York',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '18.5 horas por semana',
        price: 'R$ 17.297,28',
      },
      {
        id: 8,
        city: 'New York',
        img: '/assets/RENNERT.jpg',
        alt: 'Rennert New York',
        school: 'Rennert New York',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 18.944,64',
      },
      {
        id: 9,
        city: 'New York',
        img: '/assets/LSI.jpg',
        alt: 'LSI New York',
        school: 'LSI New York',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 34.151,04',
      },
      {
        id: 10,
        city: 'New York',
        img: '/assets/RENNERT.jpg',
        alt: 'Rennert New York',
        school: 'Rennert New York',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '24 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 40.822,32',
      },
      {
        id: 11,
        city: 'New York',
        img: '/assets/RENNERT.jpg',
        alt: 'Rennert New York',
        school: 'Rennert New York',
        courseName: 'Curso geral de ingles',
        quantityWeek: '36 semanas',
        hoursWeek: '13.33 horas por semana',
        price: 'R$ 48.391,20',
      },
      {
        id: 12,
        city: 'New York',
        img: '/assets/RENNERT.jpg',
        alt: 'Rennert New York',
        school: 'Rennert New York',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '36 semanas',
        hoursWeek: '20.83 horas por semana',
        price: 'R$ 56.223,75',
      },
    ],
    sydney: [
      {
        id: 1,
        city: 'Sydney',
        img: '/assets/ENGLISHUNLIMITED.jpg',
        alt: 'English Unlimited Sydney',
        school: 'English Unlimited',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 2.000,70',
      },
      {
        id: 2,
        city: 'Sydney',
        img: '/assets/ELC.jpg',
        alt: 'ELC Sydney',
        school: 'ELC Sydney',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '2 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 2.246,40',
      },
      {
        id: 3,
        city: 'Sydney',
        img: '/assets/OHC.jpg',
        alt: 'OHC Sydney',
        school: 'OHC Sydney',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '20 horas por semana',
        price: 'R$ 2.632,50',
      },
      {
        id: 4,
        city: 'Sydney',
        img: '/assets/ENGLISHUNLIMITED.jpg',
        alt: 'English Unlimited Sydney',
        school: 'English Unlimited',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas(Noite)',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 3.238,40',
      },
      {
        id: 5,
        city: 'Sydney',
        img: '/assets/ENGLISHUNLIMITED.jpg',
        alt: 'English Unlimited Sydney',
        school: 'English Unlimited',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas(Manhã)',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 4.012,80',
      },
      {
        id: 6,
        city: 'Sydney',
        img: '/assets/ENGLISHUNLIMITED.jpg',
        alt: 'English Unlimited Sydney',
        school: 'English Unlimited',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas ',
        hoursWeek: '20 horas por semana',
        price: 'R$ 9.715,20',
      },
      {
        id: 7,
        city: 'Sydney',
        img: '/assets/NAVITAS.jpg',
        alt: 'Navitas English Sydney',
        school: 'Navitas English',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas ',
        hoursWeek: '20 horas por semana',
        price: 'R$ 10.855,68',
      },
      {
        id: 8,
        city: 'Sydney',
        img: '/assets/OHC.jpg',
        alt: 'OHC Sydney',
        school: 'OHC Sydney',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas ',
        hoursWeek: '20 horas por semana',
        price: 'R$ 18.532,80',
      },
      {
        id: 9,
        city: 'Sydney',
        img: '/assets/ELC.jpg',
        alt: 'ELC Sydney',
        school: 'ELC Sydney',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas ',
        hoursWeek: '20 horas por semana',
        price: 'R$ 21.902,40',
      },
      {
        id: 10,
        city: 'Sydney',
        img: '/assets/ELC.jpg',
        alt: 'ELC Sydney',
        school: 'ELC Sydney',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '24 semanas ',
        hoursWeek: '25 horas por semana',
        price: 'R$ 26.114,40',
      },
    ],
    toronto: [
      {
        id: 1,
        city: 'Toronto',
        img: '/assets/EC.jpg',
        alt: 'EC Toronto',
        school: 'EC Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '15 horas por semana',
        price: 'R$ 1.825,20',
      },
      {
        id: 2,
        city: 'Toronto',
        img: '/assets/EC.jpg',
        alt: 'EC Toronto',
        school: 'EC Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '18 horas por semana',
        price: 'R$ 1.989,00',
      },
      {
        id: 3,
        city: 'Toronto',
        img: '/assets/EC.jpg',
        alt: 'EC Toronto',
        school: 'EC Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '15 horas por semana',
        price: 'R$ 3.650,40',
      },
      {
        id: 4,
        city: 'Toronto',
        img: '/assets/EC.jpg',
        alt: 'EC Toronto',
        school: 'EC Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '18 horas por semana',
        price: 'R$ 3.978,00',
      },
      {
        id: 5,
        city: 'Toronto',
        img: '/assets/OHC.jpg',
        alt: 'OHC Toronto',
        school: 'OHC Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '20.83 horas por semana',
        price: 'R$ 4.387,50',
      },
      {
        id: 6,
        city: 'Toronto',
        img: '/assets/OHC.jpg',
        alt: 'OHC Toronto',
        school: 'OHC Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '20.83 horas por semana',
        price: 'R$ 12.460,50',
      },
      {
        id: 7,
        city: 'Toronto',
        img: '/assets/LSI.jpg',
        alt: 'LSI Toronto',
        school: 'LSI Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 13.162,50',
      },
      {
        id: 8,
        city: 'Toronto',
        img: '/assets/LSI.jpg',
        alt: 'LSI Toronto',
        school: 'LSI Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 24.921,00',
      },
      {
        id: 9,
        city: 'Toronto',
        img: '/assets/LSI.jpg',
        alt: 'LSI Toronto',
        school: 'LSI Toronto',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 29.835,00',
      },
    ],
    vancouver: [
      {
        id: 1,
        city: 'Vancouver',
        img: '/assets/LSI.jpg',
        alt: 'LSI Vancouver',
        school: 'LSI Vancouver',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '20.83 horas por semana',
        price: 'R$ 5.304,00',
      },
      {
        id: 2,
        city: 'Vancouver',
        img: '/assets/LSI.jpg',
        alt: 'LSI Vancouver',
        school: 'LSI Vancouver',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '4 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 7.254,00',
      },
      {
        id: 3,
        city: 'Vancouver',
        img: '/assets/KAPLAN.jpg',
        alt: 'Kaplan Vancouver',
        school: 'Kaplan Vancouver',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '15 horas por semana',
        price: 'R$ 13.104,00',
      },
      {
        id: 4,
        city: 'Vancouver',
        img: '/assets/KAPLAN.jpg',
        alt: 'Kaplan Vancouver',
        school: 'Kaplan Vancouver',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '20 horas por semana',
        price: 'R$ 14.742,00',
      },
      {
        id: 5,
        city: 'Vancouver',
        img: '/assets/KAPLAN.jpg',
        alt: 'Kaplan Vancouver',
        school: 'Kaplan Vancouver',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '12 semanas',
        hoursWeek: '26 horas por semana',
        price: 'R$ 16.216,20',
      },
      {
        id: 6,
        city: 'Vancouver',
        img: '/assets/KAPLAN.jpg',
        alt: 'Kaplan Vancouver',
        school: 'Kaplan Vancouver',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas',
        hoursWeek: '26 horas por semana',
        price: 'R$ 27.378,00',
      },
      {
        id: 7,
        city: 'Vancouver',
        img: '/assets/KAPLAN.jpg',
        alt: 'Kaplan Vancouver',
        school: 'Kaplan Vancouver',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '24 semanas',
        hoursWeek: '26 horas por semana',
        price: 'R$ 28.828,80',
      },
    ],
    dublin: [
      {
        id: 1,
        city: 'Dublin',
        img: '/assets/IH.jpg',
        alt: 'IH Dublin',
        school: 'IH Dublin',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '15 horas por semana',
        price: 'R$ 4.927,80',
      },
      {
        id: 2,
        city: 'Dublin',
        img: '/assets/IH.jpg',
        alt: 'IH Dublin',
        school: 'IH Dublin',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '20 horas por semana',
        price: 'R$ 5.265,00',
      },
      {
        id: 3,
        city: 'Dublin',
        img: '/assets/KAPLAN.jpg',
        alt: 'Kaplan Dublin',
        school: 'Kaplan Dublin',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '15 horas por semana',
        price: 'R$ 6.054,75',
      },
      {
        id: 4,
        city: 'Dublin',
        img: '/assets/IH.jpg',
        alt: 'IH Dublin',
        school: 'IH Dublin',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '20 horas por semana',
        price: 'R$ 13.752,00',
      },
      {
        id: 5,
        city: 'Dublin',
        img: '/assets/EMERALD.jpg',
        alt: 'Emerald Cultural Institute',
        school: 'Emerald Cultural Institute',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '20 horas por semana',
        price: 'R$ 17.690,40',
      },
      {
        id: 6,
        city: 'Dublin',
        img: '/assets/EMERALD.jpg',
        alt: 'Emerald Cultural Institute',
        school: 'Emerald Cultural Institute',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas',
        hoursWeek: '20 horas por semana',
        price: 'R$ 29.635,50',
      },
      {
        id: 7,
        city: 'Dublin',
        img: '/assets/EMERALD.jpg',
        alt: 'Emerald Cultural Institute',
        school: 'Emerald Cultural Institute',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '24 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 34.655,00',
      },
    ],
    londres: [
      {
        id: 1,
        city: 'Londres',
        img: '/assets/LSI.jpg',
        alt: 'LSI Londres',
        school: 'LSI Londres',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 3.483,47',
      },
      {
        id: 2,
        city: 'Londres',
        img: '/assets/LSI.jpg',
        alt: 'LSI Londres',
        school: 'LSI Londres',
        courseName: 'Curso geral de inglês',
        quantityWeek: '2 semanas',
        hoursWeek: '20 horas por semana',
        price: 'R$ 4.04,32',
      },
      {
        id: 3,
        city: 'Londres',
        img: '/assets/OHC.jpg',
        alt: 'OHC Londres',
        school: 'OHC Londres',
        courseName: 'Curso geral de inglês',
        quantityWeek: '4 semanas',
        hoursWeek: '18.33 horas por semana',
        price: 'R$ 5.499,52',
      },
      {
        id: 4,
        city: 'Londres',
        img: '/assets/OHC.jpg',
        alt: 'OHC Londres',
        school: 'OHC Londres',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '4 semanas',
        hoursWeek: '27.5 horas por semana',
        price: 'R$ 6.980,16',
      },
      {
        id: 5,
        city: 'Londres',
        img: '/assets/LSI.jpg',
        alt: 'LSI Londres',
        school: 'LSI Londres',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 18.402,24',
      },
      {
        id: 6,
        city: 'Londres',
        img: '/assets/IH.jpg',
        alt: 'IH Londres',
        school: 'IH Londres',
        courseName: 'Curso geral de inglês',
        quantityWeek: '12 semanas',
        hoursWeek: '18.33 horas por semana',
        price: 'R$ 25.687,78',
      },
      {
        id: 7,
        city: 'Londres',
        img: '/assets/OHC.jpg',
        alt: 'OHC Londres',
        school: 'OHC Londres',
        courseName: 'Curso de inglês intensivo',
        quantityWeek: '24 semanas',
        hoursWeek: '27.5 horas por semana',
        price: 'R$ 34.266,24',
      },
      {
        id: 8,
        city: 'Londres',
        img: '/assets/LSI.jpg',
        alt: 'LSI Londres',
        school: 'LSI Londres',
        courseName: 'Curso geral de inglês',
        quantityWeek: '24 semanas',
        hoursWeek: '20 horas por semana',
        price: 'R$ 37.439,04',
      },
    ],
    madrid: [
      {
        id: 1,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso de espanhol intensivo',
        quantityWeek: '2 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 3.393,00',
      },
      {
        id: 2,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso de espanhol(Grupo + aulas individuais)',
        quantityWeek: '2 semanas',
        hoursWeek: '20.83 horas por semana',
        price: 'R$ 5.148,00',
      },
      {
        id: 3,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso de espanhol(Grupo + aulas individuais)',
        quantityWeek: '2 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 7.254,00',
      },
      {
        id: 4,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso geral de espanhol',
        quantityWeek: '4 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 5.031,00',
      },
      {
        id: 5,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso de espanhol(Grupo + aulas individuais)',
        quantityWeek: '4 semanas',
        hoursWeek: '20.83 horas por semana',
        price: 'R$ 10.296,00',
      },
      {
        id: 6,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso geral de espanhol',
        quantityWeek: '12 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 10.838,88',
      },
      {
        id: 7,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso de espanhol intensivo',
        quantityWeek: '12 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 14.656,76',
      },
      {
        id: 8,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso geral de espanhol',
        quantityWeek: '24 semanas',
        hoursWeek: '16.67 horas por semana',
        price: 'R$ 18.083,52',
      },
      {
        id: 9,
        city: 'Madrid',
        img: '/assets/EXPANISH.jpg',
        alt: 'Expanish Madrid',
        school: 'Expanish Madrid',
        courseName: 'Curso de espanhol intensivo',
        quantityWeek: '24 semanas',
        hoursWeek: '25 horas por semana',
        price: 'R$ 24.373,44',
      },
    ],
  })
}
