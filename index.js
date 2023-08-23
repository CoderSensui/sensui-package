const fetch = require('node-fetch');

async function downloadTikTokVideo(url) {
  const apiUrl = `https://sensui-useless-apis.codersensui.repl.co/api/tools/tiktokdl?url=${encodeURIComponent(url)}`;
  const response = await fetch(apiUrl);
  const jsonResult = await response.json();
  return jsonResult;
}

module.exports = {
  downloadTikTokVideo
};
