const fetch = require('node-fetch');

async function downloadTikTokVideo(url) {
  const apiUrl = `https://sensui-useless-apis.codersensui.repl.co/api/tools/tiktokdl?url=${encodeURIComponent(url)}`;
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult;
}

async function generateRandomBibleVerse() {
  const apiUrl = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/biblerandom';
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.verse;
}

async function fetchGptAiResponse(question) {
  const apiUrl = `https://sensui-useless-apis.codersensui.repl.co/api/tools/ai?question=${encodeURIComponent(question)}`;
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.answer;
}

async function fetchBardAiResponse(question) {
  const apiUrl = `https://sensui-useless-apis.codersensui.repl.co/api/tools/bard?question=${encodeURIComponent(question)}`;
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.message;
}

async function generateRandomInfo() {
  const apiUrl = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/random-info';
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  const formattedResult = Object.entries(jsonResult)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  return formattedResult;
}

async function fetchNewsPh() {
  const apiUrl = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/news';
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  const formattedResult = jsonResult.map(item => `Title: ${item.title}\nSource: ${item.source}`).join('\n\n');
  return formattedResult;
}

async function genLoremPic() {
  const apiUrl = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/lorem-picsumV2';
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.imageUrl;
}

async function fetchWeather() {
  const apiUrl = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/weatherV2?loc=manila';
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.image;
}

async function unscrambleWord() {
  const apiUrl = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/unscramble?word=amide';
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.Words.join(', ');
}

module.exports = {
  downloadTikTokVideo,
  generateRandomBibleVerse,
  fetchGptAiResponse,
  fetchBardAiResponse,
  generateRandomInfo,
  fetchNewsPh,
  genLoremPic,
  fetchWeather,
  unscrambleWord
};
