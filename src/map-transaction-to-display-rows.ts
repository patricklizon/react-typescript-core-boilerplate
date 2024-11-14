import { Nullable, Location, Transaction } from "./app";

type DisplayRow = {
  date: string;
  amount: string;
  location: string;
};

export function mapTransactionToDisplayRows(t: Transaction): DisplayRow[] {
  if (!t.clearings.length) {
    if (!t.authorization) {
      throw new Error("Authorization is ont defined");
    }

    return [
      {
        amount: t.authorization.amount,
        date: t.authorization.date,
        location: formatLocationToDisplayString(t.authorization.location),
      },
    ];
  }

  return t.clearings.map((it) => {
    return {
      amount: it.amount,
      date: it.date,
      location: formatLocationToDisplayString(t.authorization?.location),
    };
  });
}

function formatLocationToDisplayString(l: Nullable<Location>): string {
  if (!l) return "N/A";
  return `${l.city} (${l.country})`;
}
