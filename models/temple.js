class Temple {
  constructor(
    id,
    categoryIds,
    title,
    address,
    timings,
    imageUrl,
    distance,
    details,
    isGlutenFree,
    isVegan,
    status,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.address = address;
    this.timings = timings;
    this.imageUrl = imageUrl;
    this.distance = distance;

    this.details = details;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.status = status;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Temple;
