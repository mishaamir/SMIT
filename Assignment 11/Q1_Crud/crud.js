const URL = "https://jsonplaceholder.typicode.com/posts";

const form = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const userIdInput = document.getElementById("userId");
const bodyInput = document.getElementById("body");
const reloadBtn = document.getElementById("reloadBtn");
const message = document.getElementById("message");
const postsBox = document.getElementById("posts");
const count = document.getElementById("count");

let posts = [];

const showMessage = (text, type) => {
  message.innerText = text;
  message.className = "message show " + type;
};

const showPosts = () => {
  postsBox.innerHTML = "";
  count.innerText = posts.length + " posts shown";

  posts.forEach((post) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="ids">Post ID: ${post.id} · User ID: ${post.userId}</div>
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <div class="actions">
        <button class="btn green" onclick="updatePost(${post.id})">PUT full update</button>
        <button class="btn orange" onclick="updateTitle(${post.id})">PATCH title</button>
        <button class="btn red" onclick="deletePost(${post.id})">DELETE</button>
      </div>
    `;
    postsBox.appendChild(card);
  });
};

// GET
const getPosts = async () => {
  showMessage("Loading posts...", "loading");
  try {
    let response = await fetch(URL + "?_limit=6");
    console.log("GET status:", response.status);
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }
    posts = await response.json();
    showPosts();
    showMessage("GET successful! Posts loaded. Check the console for response status 200.", "success");
  } catch (err) {
    showMessage("Something went wrong: " + err.message, "error");
  }
};

// POST
const addPost = async (evt) => {
  evt.preventDefault();
  showMessage("Adding post...", "loading");

  try {
    let response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleInput.value,
        body: bodyInput.value,
        userId: Number(userIdInput.value),
      }),
    });

    console.log("POST status:", response.status);

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    let newPost = await response.json();
    newPost.id = Date.now(); // API always returns id 101
    posts.unshift(newPost);
    showPosts();
    form.reset();
    userIdInput.value = 1;
    showMessage("POST successful! New post added (status 201).", "success");
  } 
  
  catch (err) {
    showMessage("Something went wrong: " + err.message, "error");
  }
};

// PUT: replace the full post
const updatePost = async (id) => {
  let post = posts.find((p) => p.id === id);
  let newTitle = prompt("New title:", post.title);
  let newBody = prompt("New content:", post.body);

  if (newTitle === null || newBody === null) return;

  showMessage("Updating post...", "loading");

  try {
    let updated = { id: id, userId: post.userId, title: newTitle, body: newBody };
    let response = await fetch(URL + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    console.log("PUT status:", response.status);

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    Object.assign(post, updated); // API does not save, so update locally
    showPosts();
    showMessage("PUT successful! Post " + id + " updated.", "success");
  } 
  
  catch (err) {
    showMessage("Something went wrong: " + err.message, "error");
  }
};

// PATCH: change only the title
const updateTitle = async (id) => {
  let post = posts.find((p) => p.id === id);
  let newTitle = prompt("New title:", post.title);

  if (newTitle === null) return;

  showMessage("Updating title...", "loading");

  try {
    let response = await fetch(URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });

    console.log("PATCH status:", response.status);

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }
    post.title = newTitle;
    showPosts();
    showMessage("PATCH successful! Title of post " + id + " updated.", "success");
  } 
  
  catch (err) {
    showMessage("Something went wrong: " + err.message, "error");
  }
};

// DELETE
const deletePost = async (id) => {
  showMessage("Deleting post...", "loading");

  try {
    let response = await fetch(URL + "/" + id, { method: "DELETE" });
    console.log("DELETE status:", response.status);

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    posts = posts.filter((p) => p.id !== id);
    showPosts();
    showMessage("DELETE successful! Post " + id + " removed.", "success");
  } 
  
  catch (err) {
    showMessage("Something went wrong: " + err.message, "error");
  }
};

form.addEventListener("submit", addPost);
reloadBtn.addEventListener("click", getPosts);
window.addEventListener("load", getPosts);
