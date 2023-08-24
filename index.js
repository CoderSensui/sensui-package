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
  return jsonResult;
}

async function fetchNewsPh() {
  const apiUrl = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/news';
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.map(news => `${news.title} - ${news.source}`).join('\n');
}

async function genLoremPic() {
  const apiUrl = 'https://sensui-useless-apis.codersensui.repl.co/api/tools/lorem-picsumV2';
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.imageUrl;
}

async function fetchWeather(location) {
  const apiUrl = `https://sensui-useless-apis.codersensui.repl.co/api/tools/weatherV2?loc=${encodeURIComponent(location)}`;
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.image;
}

async function pasteNekoBin(code) {
  const apiUrl = `https://sensui-useless-apis.codersensui.repl.co/api/tools/nekobin?code=${encodeURIComponent(code)}`;
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.url;
}

async function correctGrammar(text) {
  const apiUrl = `https://sensui-useless-apis.codersensui.repl.co/api/tools/grammar?text=${encodeURIComponent(text)}`;
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult.correctedText;
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
  pasteNekoBin,
  correctGrammar
};
