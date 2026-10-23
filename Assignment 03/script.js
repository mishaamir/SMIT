let heading = document.getElementById("title");
let paragraph = document.getElementById("message");

document.getElementById("showBtn").onclick = function() {
    alert(heading.innerText);
    console.log(paragraph.innerText);
};

document.write("<p>Welcome! This message is displayed using document.write().</p>");