const converter = new showdown.Converter();
const nav = document.querySelector("nav");
const main = document.querySelector("main .container");

function toggleMenu() {
  nav.classList.toggle("showMenu");
}
function loadCopyButtons(containerSelector) {
  const container = document.querySelector(containerSelector);
  const blocks = container.querySelectorAll("pre > code");

  blocks.forEach((code) => {
    const pre = code.parentElement;
    if (pre.querySelector(".copy-btn")) return;

    const button = document.createElement("button");
    button.className = "copy-btn";
    button.innerHTML = `<p>copy</p><img src="../icons/copy.svg" alt="copy"/>`;
    pre.appendChild(button);
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(code.textContent).then(() => {
        button.textContent = "Copied";
        setTimeout(() => {
          button.innerHTML = `<img src="../icons/copy.svg" alt="copy"/>`;
        }, 1500);
      });
    });
  });
}

async function loadMarkdown(fileName) {
  await fetch(`/documentation/${fileName}`)
    .then((Response) => Response.text())
    .then((content) => {
      const html = converter.makeHtml(content);
      main.innerHTML = html;
      hljs.highlightAll();
    })
    .catch(console.error);
  generateNavlinks();
  loadCopyButtons("main .container");
}

loadMarkdown("welcome.md");

async function getMarkdownFiles() {
  const res = await fetch("../../documentation/index.json");
  const index = await res.json();
  nav.innerHTML = "";
  for (const topic in index) {
    const fileList = index[topic]
      .map((file) => `<li data-file="${file}">${file.replace(".md", "")}</li>`)
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
  const listItems = nav.querySelectorAll("li");
  listItems.forEach((li) => {
    li.addEventListener("click", () => {
      listItems.forEach((item) => item.classList.remove("active"));
      li.classList.add("active");
      const file = li.getAttribute("data-file");
      if (file) loadMarkdown(file);
    });
  });
}

getMarkdownFiles();

//generates aside links
function generateNavlinks() {
  const container = document.querySelector("main .container");
  const toc = document.querySelector(".topic-nav");

  if (!container || !toc) return;

  const headings = container.querySelectorAll("h1, h2, h3, h4, h5, h6");
  if (headings.length === 0) return;

  let currentLevel = 0;
  const stack = [];

  toc.innerHTML = "";
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1)); // h1 -> 1
    const text = heading.textContent.trim();
    const id = heading.id || `heading-${index}`;
    heading.id = id;

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = text;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });

    li.appendChild(a);

    // Add classes based on level
    if (level === 1) {
      li.classList.add("parent");
    } else {
      li.classList.add("child", `child-level-${level}`);
    }

    // Nesting logic
    if (level > currentLevel) {
      const newUl = document.createElement("ul");
      if (stack.length > 0) {
        const lastItem = stack[stack.length - 1].ul.lastElementChild;
        lastItem?.appendChild(newUl);
      } else {
        toc.appendChild(newUl);
      }
      newUl.appendChild(li);
      stack.push({ ul: newUl, level });
    } else {
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }
      const parentUl = stack.length > 0 ? stack[stack.length - 1].ul : toc;
      parentUl.appendChild(li);
      stack.push({ ul: parentUl, level });
    }

    currentLevel = level;
  });
}
