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

<h3>Fetch GptAi Response</h3>

<p>Import and use the package in your Node.js script to fetch a response from GptAi:</p>

<pre>
const { fetchGptAiResponse } = require('sensui-package');

async function main() {
  try {
    const response = await fetchGptAiResponse('hi');
    console.log('GptAi response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Fetch BardAi Response</h3>

<p>Import and use the package in your Node.js script to fetch a response from BardAi:</p>

<pre>
const { fetchBardAiResponse } = require('sensui-package');

async function main() {
  try {
    const response = await fetchBardAiResponse('hi');
    console.log('BardAi response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Generate Random Information</h3>

<p>Import and use the package in your Node.js script to generate random information:</p>

<pre>
const { generateRandomInfo } = require('sensui-package');

async function main() {
  try {
    const info = await generateRandomInfo();
    console.log('Random information:', info);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Fetch Weather Information with A Image</h3>

<p>Import and use the package in your Node.js script to fetch a weather information with a image:</p>

<pre>
const { fetchWeather } = require('sensui-package');

async function main() {
  try {
    const imageUrl = await fetchWeather();
    console.log('Weather info with image URL:', imageUrl);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Unscramble Word</h3>

<p>Import and use the package in your Node.js script to unscramble a word:</p>

<pre>
const { unscrambleWord } = require('sensui-package');

async function main() {
  try {
    const unscrambledWords = await unscrambleWord();
    console.log('Unscrambled words:', unscrambledWords);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Generate Lorem Picsum Image</h3>

<p>Import and use the package in your Node.js script to generate a random Lorem Picsum image:</p>

<pre>
const { genLoremPic } = require('sensui-package');

async function main() {
  try {
    const imageUrl = await genLoremPic();
    console.log('Lorem Picsum image URL:', imageUrl);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Fetch News</h3>

<p>Import and use the package in your Node.js script to fetch news articles:</p>

<pre>
const { fetchNewsPh } = require('sensui-package');

async function main() {
  try {
    const newsArticles = await fetchNewsPh();
    console.log('News articles:', newsArticles);
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
