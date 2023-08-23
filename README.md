<!DOCTYPE html>
<html>

<body>

<h1>sensui-package</h1>

<p>A Node.js package for interacting with the Sensui API.</p>

<h2>Installation</h2>

<p>Install the package using npm:</p>

<pre>
npm install sensui-package
</pre>

<h2>Usage</h2>

<p>Import and use the package in your Node.js script:</p>

<pre>
const { fetchSensuiData } = require('sensui-package');

// Example usage
async function main() {
  try {
    const data = await fetchSensuiData();
    console.log('Sensui data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h2>Download TikTok Video</h2>

<p>Import and use the package to download a TikTok video:</p>

<pre>
const { downloadTikTokVideo } = require('sensui-package');

const tiktokUrl = 'https://vt.tiktok.com/ZSLsWJJbF/';

async function main() {
  try {
    const videoInfo = await downloadTikTokVideo(tiktokUrl);
    console.log('Video information:', videoInfo);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h2>License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>. See the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>

</html>
