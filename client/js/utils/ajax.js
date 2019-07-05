export default {
  async getCharInfo (characterUrl) {
    try {
      const response = await fetch(characterUrl);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  async getFilmInfo (filmUrl) {
    try {
      const response = await fetch(filmUrl);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
};