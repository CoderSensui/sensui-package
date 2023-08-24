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

<h3>Generate Random Info</h3>

<p>Import and use the package in your Node.js script to generate random information:</p>

<pre>
const { generateRandomInfo } = require('sensui-package');

async function main() {
  try {
    const info = await generateRandomInfo();
    console.log('Random info:', info);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Fetch News PH</h3>

<p>Import and use the package in your Node.js script to fetch news headlines from the Philippines:</p>

<pre>
const { fetchNewsPh } = require('sensui-package');

async function main() {
  try {
    const news = await fetchNewsPh();
    console.log('News headlines:', news);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Generate Lorem Picsum</h3>

<p>Import and use the package in your Node.js script to generate a Lorem Picsum image link:</p>

<pre>
const { genLoremPic } = require('sensui-package');

async function main() {
  try {
    const imageUrl = await genLoremPic();
    console.log('Lorem Picsum image:', imageUrl);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Fetch Weather</h3>

<p>Import and use the package in your Node.js script to fetch weather information for a location:</p>

<pre>
const { fetchWeather } = require('sensui-package');

const location = 'manila';

async function main() {
  try {
    const weatherImage = await fetchWeather(location);
    console.log('Weather image:', weatherImage);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Paste to Nekobin</h3>

<p>Import and use the package in your Node.js script to paste text to Nekobin:</p>

<pre>
const { pasteNekoBin } = require('sensui-package');

const code = 'input your text here';

async function main() {
  try {
    const nekoBinUrl = await pasteNekoBin(code);
    console.log('Nekobin URL:', nekoBinUrl);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
</pre>

<h3>Correct Grammar</h3>

<p>Import and use the package in your Node.js script to correct grammar in a text:</p>

<pre>
const { correctGrammar } = require('sensui-package');

const text = 'your input here';

async function main() {
  try {
    const correctedText = await correctGrammar(text);
    console.log('Corrected text:', correctedText);
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
