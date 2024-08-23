export const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3004/categories`);
    const jsonData = await res.json();
    let product = jsonData.find((item) => item.id === id);
    return product;
  } catch (error) {
    console.log(error);
  }
};
