import axios from "axios";
import cheerio from "cheerio";
export const cryptopriceScraper = async () => {
  const url = "https://pec.ac.in";
  const result = [];
  try {
    const response = await axios.get(url);
    const html_data = response.data;
    const $ = cheerio.load(html_data);

    $("h2").each((index, element) => {
      const title = $(element).text().trim();
      result.push({ title });
    });
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};
