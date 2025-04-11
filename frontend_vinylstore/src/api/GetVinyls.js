async function getVinylList() {
  try {
    const res = await fetch('http://localhost:3000/api/v1/products/');
    if (!res.ok) {
      const error = await res.json();
      console.error('Error: ', error);
      throw new Error(error.message);
    }
    const vinyls = await res.json();
    return vinyls;
  } catch (error) {
    console.error('Error bad: ', error);
    throw error;
  }
}

export default getVinylList;