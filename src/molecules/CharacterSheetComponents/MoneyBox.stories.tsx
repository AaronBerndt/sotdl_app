import React from "react";
import MoneyBox from "./MoneyBox";

export default {
  title: "Molecules/CharacterSheetComponents/MoneyBox",
  component: MoneyBox,
};

const createMoneyObject = (b, c, s, g) => ({
  bits: b,
  copper: c,
  silver: s,
  gold: g,
});

export const noMoney = () => (
  <MoneyBox moneyObject={createMoneyObject(0, 0, 0, 0)} />
);

export const withBits = () => (
  <MoneyBox moneyObject={createMoneyObject(1, 0, 0, 0)} />
);
export const withCopper = () => (
  <MoneyBox moneyObject={createMoneyObject(1, 1, 0, 0)} />
);

export const withSilver = () => (
  <MoneyBox moneyObject={createMoneyObject(1, 1, 1, 0)} />
);
export const withGold = () => (
  <MoneyBox moneyObject={createMoneyObject(1, 1, 1, 1)} />
);
