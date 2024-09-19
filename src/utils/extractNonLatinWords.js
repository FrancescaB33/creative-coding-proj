export function extractNonLatinWords(dataset) {
  // Regular expression to identify non-Latin characters
  const nonLatinPattern = /[^\x00-\x7F]/;

  // Regular expression to extract words inside parentheses
  const parenthesesPattern = /\(([^)]+)\)/;

  // Iterate over each country in the dataset
  Object.keys(dataset).forEach((country) => {
    console.log(`Processing ${country}:`);

    // Access all categories within each country
    const categories = dataset[country];

    Object.keys(categories).forEach((category) => {
      console.log(`  ${category}:`);

      const translations = categories[category];

      // Iterate over each language in the category
      Object.keys(translations).forEach((language) => {
        const translation = translations[language];

        // Check if the translation contains non-Latin characters
        if (nonLatinPattern.test(translation)) {
          // Extract the word inside parentheses
          const match = translation.match(parenthesesPattern);
          if (match) {
            // Print the extracted word
            console.log(`    ${language}: ${match[1]}`);
          }
        }
      });
    });
  });
}
