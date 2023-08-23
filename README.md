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

<details>
  <summary><h3>Download TikTok Video</h3></summary>
  <pre><code>
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
  </code></pre>
</details>

<details>
  <summary><h3>Generate Random Bible Verse</h3></summary>
  <pre><code>
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
  </code></pre>
</details>

<details>
  <summary><h3>Fetch GptAi Response</h3></summary>
  <pre><code>
const { askGptAi } = require('sensui-package');

async function main() {
  try {
    const response = await askGptAi('hi');
    console.log('GptAi response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
  </code></pre>
</details>

<details>
  <summary><h3>Fetch BardAi Response</h3></summary>
  <pre><code>
const { askBardAi } = require('sensui-package');

async function main() {
  try {
    const response = await askBardAi('hi');
    console.log('BardAi response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
  </code></pre>
</details>

<details>
  <summary><h3>Generate Random Info</h3></summary>
  <pre><code>
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
  </code></pre>
</details>

<h2>License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>. See the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>

</html>
