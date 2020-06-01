const LinkedInProfileScraper = require('linkedin-profile-scraper');

const cookies = [
  'AQEDARKhR1IBteg7AAABckr9XskAAAFyk_KnW00AHwKKQ5UhZP1TXF5BPwENyv-OFJ3HW9RHk_QQIoMJB786UjS9USbMsT3TeWkmtBbH9EAMHwq0OvBl9iRgNkDHwq8PmVV0xQ2CVAKPlpwVObI94T-m',
  'AQEDARKhR1ICE46KAAABcRwNE5MAAAFyk_4XF1YAi6dSogDl6ZjxdlP11wh8yblmbK61BfYFi-3w5H96cIh9JzAVWBsQMlc-jGnhWQByItl6mDfA3pRg0eh5DJg8POZn2zdlrAKFgDeoJ_wXgwBG4maZ',
  'AQEDARKhR1IF7cp3AAABclYmdRQAAAFyejL5FE0Ac1FC5M7ooiXl3hMoMA_LB4XUKAfYtSvdINzKmQGj1JgfO6gZVeDhpE7CvKBGCO97_jYVDDUzVZsCpBUJ7e26suWLe4ZVeHS_ZDBx9VX0fOyfHmzm',
  'AQEDARKhR1IAwRQZAAABcm_zPbkAAAFyk__BuU0AysruBgaKoJRqV8Sv7vsuEV5rEQDl_tpAwMrN_mAq-r8qCl2zGAxlQjC7wSDWezRhpKjAxJgXj79dR2qT8cXhGIGRBRM68l98karZ9x8nm2FtzWY-'
]

const scrape = async (url) => {
  if (!url) {
    throw new Error('Url is not valid');
  }
  const scraper = new LinkedInProfileScraper({
    sessionCookieValue: cookies[Math.floor(Math.random() * cookies.length)],
    keepAlive: true,
    timeout: 3000000
  });

  await scraper.setup()

  const result = await scraper.run(url);

  return result;
};

module.exports = scrape;
