import { expect } from "chai";
import { describe, it } from "vitest";

import { Transaction } from "./app";
import { mapTransactionToDisplayRows } from "./map-transaction-to-display-rows";

describe(mapTransactionToDisplayRows.name, () => {
  describe("given 'clearings' is empty", () => {
    describe("given 'authorization' is nil", () => {
      it("throw error", () => {
        const t: Transaction = {
          authorization: null,
          clearings: [],
        };

        expect(() => mapTransactionToDisplayRows(t)).to.throw();
      });
    });
  });

  describe("given 'clearings' is not empty", () => {
    describe("given 'location' is defined", () => {
      it("transforms data correctly", () => {
        const t: Transaction = {
          authorization: {
            amount: "100",
            date: "10-10-2024",
            location: {
              city: "Z",
              country: "C",
            },
          },
          clearings: [
            {
              amount: "22",
              date: "10-11-2024",
            },
          ],
        };

        const left = mapTransactionToDisplayRows(t);
        const right: ReturnType<typeof mapTransactionToDisplayRows> = [
          {
            amount: "22",
            date: "10-11-2024",
            location: "Z (C)",
          },
        ];

        expect(left).to.deep.equal(right);
      });
    });
  });
});
