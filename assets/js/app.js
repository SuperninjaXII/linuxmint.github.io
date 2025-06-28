const converter = new showdown.Converter();
const nav = document.querySelector("nav");
const main = document.querySelector("main .container");

async function loadMarkdown(fileName) {
  await fetch(`/documentation/${fileName}`)
    .then((Response) => Response.text())
    .then((content) => {
      const html = converter.makeHtml(content);
      main.innerHTML = html;
    })
    .catch(console.error);
}

loadMarkdown("README.md");

async function getMarkdownFiles() {
  const res = await fetch("/documentation/index.json");
  const index = await res.json();
  nav.innerHTML = "";
  for (const topic in index) {
    const fileList = index[topic]
      .map((file) => `<li onclick="loadMarkdown('${file}')">${file}</li>`)
      .join("");
    nav.innerHTML += `
<div class="topics-group">
  <p class="topic-heading">${topic}</p>
  <ul>
    ${fileList}
  </ul>
</div>
`;
  }
}

getMarkdownFiles();
