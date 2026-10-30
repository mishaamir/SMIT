const URL = "https://jsonplaceholder.typicode.com/posts";

const form = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const userIdInput = document.getElementById("userId");
const message = document.getElementById("message");
const output = document.getElementById("output");

const sendRequest = async (url, method, body) => {
  let options = { method: method };
  if (body) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(body);
  }

  let response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("HTTP error: " + response.status);
  }

  let data = await response.json();
  return { status: response.status, data: data };
};

const showResult = async (name, url, method, body) => {
  message.innerText = name + " request in progress...";
  message.className = "message loading";
  output.innerText = "";

  try {
    let result = await sendRequest(url, method, body);
    console.log(name + " status:", result.status);
    message.innerText = name + " successful. Status: " + result.status;
    message.className = "message success";
    output.innerText = JSON.stringify(result.data, null, 2);
    return result;
  } 
  
  catch (err) {
    message.innerText = name + " failed: " + err.message;
    message.className = "message error";
  }
};

// POST
form.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  let result = await showResult("POST", URL, "POST", {
    title: titleInput.value,
    body: contentInput.value,
    userId: Number(userIdInput.value),
  });

  if (result) {
    message.innerText += " | Returned ID: " + result.data.id;
  }
});

// PUT: complete post object
document.getElementById("putBtn").addEventListener("click", () => {
  showResult("PUT", URL + "/1", "PUT", {
    id: 1,
    title: "Updated announcement",
    body: "This is the full replacement content.",
    userId: 1,
  });
});

// PATCH: only one field
document.getElementById("patchBtn").addEventListener("click", () => {
  showResult("PATCH", URL + "/1", "PATCH", { title: "Only the title changed" });
});

// DELETE
document.getElementById("deleteBtn").addEventListener("click", () => {
  showResult("DELETE", URL + "/1", "DELETE");
});
