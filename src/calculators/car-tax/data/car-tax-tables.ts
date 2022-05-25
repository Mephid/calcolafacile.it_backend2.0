import { Region } from '../enum/regions.enum';
import { EuroCategory } from '../enum/euro-categories.enum';

const {
  ABRUZZO,
  BASILICATA,
  CALABRIA,
  CAMPANIA,
  E_ROMAGNA,
  F_V_G,
  LAZIO,
  LIGURIA,
  LOMBARDIA,
  MARCHE,
  MOLISE,
  PIEMONTE,
  PUGLIA,
  SARDEGNA,
  SICILIA,
  TOSCANA,
  T_A_A_B,
  T_A_A_T,
  UMBRIA,
  VENETO,
  V_D_A,
} = Region;

const { E0, E1, E2, E3, E4, E5, E6 } = EuroCategory;

const standardTab = [
  {
    regioni: [ABRUZZO, CAMPANIA],
    tariffe: [
      { classeEuro: [E0], prezzi: [3.63, 5.45] },
      { classeEuro: [E1], prezzi: [3.51, 5.27] },
      { classeEuro: [E2], prezzi: [3.39, 5.08] },
      { classeEuro: [E3], prezzi: [3.27, 4.91] },
      {
        classeEuro: [E4, E5, E6],
        prezzi: [3.12, 4.96],
      },
    ],
  },
  {
    regioni: [
      BASILICATA,
      E_ROMAGNA,
      LOMBARDIA,
      SICILIA,
      PUGLIA,
      UMBRIA,
      V_D_A,
      F_V_G,
      SARDEGNA,
    ],
    tariffe: [
      { classeEuro: [E0], prezzi: [3.0, 4.5] },
      { classeEuro: [E1], prezzi: [2.9, 4.35] },
      { classeEuro: [E2], prezzi: [2.8, 4.2] },
      { classeEuro: [E3], prezzi: [2.7, 4.05] },
      {
        classeEuro: [E4, E5, E6],
        prezzi: [2.58, 3.87],
      },
    ],
  },
  {
    regioni: [T_A_A_B],
    tariffe: [
      { classeEuro: [E0], prezzi: [2.7, 4.05] },
      { classeEuro: [E1], prezzi: [2.61, 3.92] },
      { classeEuro: [E2], prezzi: [2.52, 3.78] },
      { classeEuro: [E3], prezzi: [2.43, 3.65] },
      { classeEuro: [E4], prezzi: [2.32, 3.48] },
      { classeEuro: [E5, E6], prezzi: [2.09, 3.13] },
    ],
  },
  {
    regioni: [CALABRIA, LAZIO, LIGURIA, VENETO],
    tariffe: [
      { classeEuro: [E0], prezzi: [3.3, 4.95] },
      { classeEuro: [E1], prezzi: [3.19, 4.79] },
      { classeEuro: [E2], prezzi: [3.08, 4.62] },
      { classeEuro: [E3], prezzi: [2.97, 4.46] },
      {
        classeEuro: [E4, E5, E6],
        prezzi: [2.84, 4.26],
      },
    ],
  },
  {
    regioni: [TOSCANA],
    tariffe: [
      { classeEuro: [E0], prezzi: [3.47, 5.45] },
      { classeEuro: [E1], prezzi: [3.35, 5.37] },
      { classeEuro: [E2], prezzi: [3.23, 5.08] },
      { classeEuro: [E3], prezzi: [3.12, 4.91] },
      {
        classeEuro: [E4, E5, E6],
        prezzi: [2.71, 4.26],
      },
    ],
  },
  {
    regioni: [T_A_A_T],
    tariffe: [
      { classeEuro: [E0], prezzi: [3.0, 4.5] },
      { classeEuro: [E1], prezzi: [2.9, 4.35] },
      { classeEuro: [E2], prezzi: [2.8, 4.2] },
      { classeEuro: [E3], prezzi: [2.7, 4.05] },
      { classeEuro: [E4], prezzi: [2.58, 3.87] },
      { classeEuro: [E5, E6], prezzi: [2.06, 3.1] },
    ],
  },
  {
    regioni: [MOLISE],
    tariffe: [
      { classeEuro: [E0], prezzi: [3.53, 5.3] },
      { classeEuro: [E1], prezzi: [3.38, 5.07] },
      { classeEuro: [E2], prezzi: [3.24, 4.85] },
      { classeEuro: [E3], prezzi: [3.09, 4.63] },
      {
        classeEuro: [E4, E5, E6],
        prezzi: [2.76, 4.14],
      },
    ],
  },
  {
    regioni: [MARCHE],
    tariffe: [
      { classeEuro: [E0], prezzi: [3.24, 4.86] },
      { classeEuro: [E1], prezzi: [3.13, 4.7] },
      { classeEuro: [E2], prezzi: [3.02, 4.54] },
      { classeEuro: [E3], prezzi: [2.92, 4.37] },
      {
        classeEuro: [E4, E5, E6],
        prezzi: [2.79, 4.18],
      },
    ],
  },
];

const piemonteTab = {
  regioni: [PIEMONTE],
  tariffe: [
    {
      classeEuro: [E0],
      prezzi: [
        [3.0, 3.18],
        [3.24, 4.86],
        [3.3, 4.95],
      ],
    },
    {
      classeEuro: [E1],
      prezzi: [
        [2.9, 3.07],
        [3.13, 4.7],
        [3.19, 4.79],
      ],
    },
    {
      classeEuro: [E2],
      prezzi: [
        [2.8, 2.97],
        [3.02, 4.54],
        [3.08, 4.62],
      ],
    },
    {
      classeEuro: [E3],
      prezzi: [
        [2.7, 2.86],
        [2.92, 4.37],
        [2.97, 4.46],
      ],
    },
    {
      classeEuro: [E4, E5, E6],
      prezzi: [
        [2.58, 2.73],
        [2.79, 4.18],
        [2.84, 4.26],
      ],
    },
  ],
};

export default { piemonteTab, standardTab };
