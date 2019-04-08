const fetch = require('node-fetch');


async function getBlogpost() {
  const response = await fetch('https://forni.se/livsstil/graviditet/vecka-for-vecka/min-graviditet-vecka-19/')
    .then(r => r.text());
  return response.split('class="entry-content">');
}

getBlogpost();
