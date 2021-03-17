const api_url =
  "https://api.github.com/repos/vigneshshettyin/Bulk-Mailer/commits";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);

  document.getElementById("mentor-name1").innerHTML =
    data[0].commit.author.name;
  document.getElementById("mentor-name2").innerHTML =
    data[1].commit.author.name;
  document.getElementById("mentor-name3").innerHTML =
    data[5].commit.author.name;
  document.getElementById("mentor-name4").innerHTML =
    data[3].commit.author.name;
  document.getElementById("img1").src = data[0].author.avatar_url;
  document.getElementById("img2").src = data[1].author.avatar_url;
  document.getElementById("img3").src = data[5].author.avatar_url;
  document.getElementById("img4").src = data[3].author.avatar_url;
}
// Calling that async function
getapi(api_url);
