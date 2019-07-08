export default {
  async getCharInfo(characterUrl) {
    const response = await fetch(characterUrl);
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Something went wrong. There was a ${response.status} Error.`);

  },

  async getFilmInfo(filmUrl) {
    const response = await fetch(filmUrl);
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Something went wrong. There was a ${response.status} Error.`);
  }
};