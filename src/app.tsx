import { useEffect, useState } from "react";

import { mapTransactionToDisplayRows } from "./map-transaction-to-display-rows";

import styles from "@/app.module.css";

export type Nullable<T> = T | null | undefined;

export type Response = {
  transactions: Transaction[];
};

export type Transaction = {
  authorization: Nullable<Authorization>;
  clearings: Clearing[];
};

export type Authorization = {
  amount: string;
  date: string;
  location: Location;
};

export type Location = { city: string; country: string };

export type Clearing = { amount: string; date: string };

export function App(): JSX.Element {
  const [data, setData] = useState<Nullable<Response>>(null);

  useEffect(() => {
    void fetch("http://127.0.0.1:3000/transactions")
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        setData(json);
        // console.log({ json });
      });
  }, []);

  // data?.transactions.

  return (
    <div className={styles.layout}>
      {data?.transactions
        .flatMap(mapTransactionToDisplayRows)
        .map((it, idx) => {
          return (
            <div key={idx} className={styles.row}>
              <div className={styles.cell}>
                <div className={styles.label}>Date</div>
                <div className={styles.value}>
                  {new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(new Date(it.date))}
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.label}>Amount</div>
                <div className={styles.value}>{it.amount}</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.label}>Location</div>
                <div className={styles.value}>{it.location}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
