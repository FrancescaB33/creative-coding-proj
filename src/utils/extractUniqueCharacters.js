export function extractUniqueCharacters(dataset) {
  // Regular expression to match only Latin alphabet characters (a-z, A-Z)
  const latinPattern = /[a-z]/i;

  // Helper function to get unique Latin characters from a string
  function getUniqueLatinCharacters(str) {
    if (typeof str !== "string") {
      return [];
    }

    // Normalize string to remove accents and convert to lowercase
    const normalizedStr = str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    // Use a Set to store unique Latin characters, filtering by Latin pattern
    return [
      ...new Set(
        normalizedStr.split("").filter((char) => latinPattern.test(char))
      ),
    ];
  }

  // Object to store unique Latin characters by country and word
  const uniqueCharactersByCountryAndWord = {};

  // Iterate over each country in the dataset
  Object.keys(dataset).forEach((country) => {
    uniqueCharactersByCountryAndWord[country] = {};

    const countryData = dataset[country];

    // Iterate over each category in the country's data
    Object.keys(countryData).forEach((category) => {
      // Skip "Most_spoken" and "Immigrant_languages"
      if (category === "Most_spoken" || category === "Immigrant_languages") {
        return; // Skip this category
      }

      // Process each language translation in the category
      const translations = countryData[category];
      if (translations && typeof translations === "object") {
        const allUniqueCharacters = new Set();

        Object.keys(translations).forEach((language) => {
          const translation = translations[language];
          if (translation) {
            const characters = getUniqueLatinCharacters(translation);

            // Add characters to the Set to ensure uniqueness
            characters.forEach((char) => allUniqueCharacters.add(char));
          }
        });

        // Convert Set to Array for the specific category (word) in the country
        uniqueCharactersByCountryAndWord[country][category] = [
          ...allUniqueCharacters,
        ];
      }
    });
  });

  return uniqueCharactersByCountryAndWord;
}
