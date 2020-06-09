import {
  filterByLevel,
  filterByLevelAndName,
  filterByLevelAndMutiple,
} from "./filterUtil";

describe("filterUtil Tests", () => {
  const characteristicsData = [
    { name: "Strength", value: 10, level: 0 },
    { name: "Agility", value: 9, level: 0 },
    { name: "Intellect", value: 10, level: 0 },
    { name: "Will", value: 10, level: 0 },
    { name: "Will", value: 10, level: 1 },
    { name: "Perception", value: 1, level: 0 },
    { name: "Health", value: 4, level: 0 },
    { name: "Size", value: 0.5, level: 0 },
    { name: "Speed", value: 8, level: 0 },
  ];

  const featureData = [
    {
      name: "Robust Constitution",
      description:
        "You take half damage from poison. You make challenge rolls with 1 boon to avoid or remove the poisoned affliction.",
      level: 0,
    },
    {
      name: "Shake it Off",
      description:
        "You can use an action to heal damage equal to your healing rate and remove one of the following afflictions: fatigued, impaired, or poisoned. Once you use this talent, you cannot use it again until after you complete a rest.",
      level: 4,
    },
  ];

  it("filterByLevelAndName", () => {
    expect(
      filterByLevelAndName(characteristicsData, "Strength", 0)
    ).toHaveLength(1);

    expect(filterByLevelAndName(characteristicsData, "Will", 2)).toHaveLength(
      2
    );
  });

  it("filterByLevel", () => {
    expect(filterByLevel(featureData, 4)).toHaveLength(2);
    expect(filterByLevel(featureData, 0)).toHaveLength(1);
  });
  it("filterByLevelAndMutiple", () => {
    expect(
      filterByLevelAndMutiple(
        characteristicsData,
        ["Intellect", "Perception"],
        2
      )
    ).toHaveLength(2);
  });
});
