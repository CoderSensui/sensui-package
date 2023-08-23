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

<h3>Download TikTok Video</h3>

<p>Import and use the package in your Node.js script to download a TikTok video:</p>

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

<h3>Generate Random Bible Verse</h3>

<p>Import and use the package in your Node.js script to generate a random Bible verse:</p>

<pre>
const { generateRandomBibleVerse } = require('sensui-package');

async function main() {
  try {
    const verse = await generateRandomBibleVerse();
    console.log('Random Bible verse:', verse);
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
