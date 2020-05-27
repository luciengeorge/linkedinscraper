const LinkedInProfileScraper = require('linkedin-profile-scraper');

const scrape = async (url) => {
  if (!url) {
    throw new Error('Url is not valid');
  }
  const scraper = new LinkedInProfileScraper({
    sessionCookieValue: 'AQEDARKhR1IBteg7AAABckr9XskAAAFybwniyU0Akb4mSxjBwu7owZqhxv4koxwe6w0DObugrRYNQ9dYLsi1U6J-FESM6DMdLcI6kFTV2VK_VQVKoO0aCVNjCQi6fBX6mKW0xzHJp7gYGJ7HmCwwjqP0',
    keepAlive: true,
    timeout: 3000000
  });

  // Prepare the scraper
  // Loading it in memory
  await scraper.setup()

  const result = await scraper.run('https://www.linkedin.com/in/luciengeorge/');

  await scraper.close();

  return result;
};

module.exports = scrape;
