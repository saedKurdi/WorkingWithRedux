const decreaseProductCountById = (value: number) => {
  return {
    type: "products/decreasecount",
    payload: value,
  };
};

export { decreaseProductCountById };
