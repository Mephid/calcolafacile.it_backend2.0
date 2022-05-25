import { EuroCategory } from '../enum/euro-categories.enum';
import { Region } from '../enum/regions.enum';

import carTaxTables from '../data/car-tax-tables';

type PiemonteTableModel = {
  regioni: Region[];
  tariffe: {
    classeEuro: EuroCategory[];
    prezzi: number[][];
  }[];
};

type StandardTableModel = {
  regioni: Region[];
  tariffe: {
    classeEuro: EuroCategory[];
    prezzi: number[];
  }[];
};

export class CarTaxTablesRepository {
  public static getRegionPrices(
    region: Region,
    euroCategory: EuroCategory,
    powerValueQuantity: number,
  ): { min: number; max: number } {
    let regionPrices = null;

    const { piemonteTab, standardTab } = carTaxTables;

    if (region === Region.PIEMONTE) {
      regionPrices = this.getPiemontePrices(
        powerValueQuantity,
        euroCategory,
        piemonteTab,
      );
    } else {
      regionPrices = this.getStandardPrices(region, euroCategory, standardTab);
    }

    return { min: regionPrices[0], max: regionPrices[1] };
  }

  private static getStandardPrices(
    region: Region,
    euroCategory: EuroCategory,
    tables: StandardTableModel[],
  ): number[] {
    const regionTable = tables.find((table) => table.regioni.includes(region));
    const euroPrices = regionTable.tariffe.find((tariffa) =>
      tariffa.classeEuro.includes(euroCategory),
    );

    return euroPrices.prezzi;
  }

  private static getPiemontePrices(
    kwQuantity: number,
    euroCategory: EuroCategory,
    table: PiemonteTableModel,
  ): number[] {
    const euroPrices = table.tariffe.find((tariffa) =>
      tariffa.classeEuro.includes(euroCategory),
    );

    const euroPricesPerKw =
      kwQuantity > 130
        ? euroPrices.prezzi[2]
        : kwQuantity > 100
        ? euroPrices.prezzi[1]
        : euroPrices.prezzi[0];

    return euroPricesPerKw;
  }
}
