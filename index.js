const fetch = require('node-fetch');

async function downloadTikTokVideo(url) {
  const apiUrl = `https://sensui-useless-apis.codersensui.repl.co/api/tools/tiktokdl?url=${encodeURIComponent(url)}`;
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult;
}

async function generateRandomBibleVerse() {
  try {
    const response = await fetch('https://sensui-useless-apis.codersensui.repl.co/api/tools/biblerandom');
    const data = await response.json();
    return data.verse;
  } catch (error) {
    throw new Error('Unable to fetch random Bible verse');
  }
}

module.exports = {
  downloadTikTokVideo,
  generateRandomBibleVerse
};
