export default function groceriesList() {
  const foodItems = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const foodMap = new Map(foodItems);
  return foodMap;
}
