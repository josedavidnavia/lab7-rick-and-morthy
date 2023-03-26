function createPost(name, message, imageURL) {
    return '<div>' +
                '<img src="' + imageURL + '">' +
                '<h2>' + name + '</h2>' +
                '<p>' + message + '</p>' +
            '</div>';
}

var posts = document.getElementById("posts");

for (var i = 1; i <= 826; i++) {
    var imageURL = "https://rickandmortyapi.com/api/character/avatar/" + i + ".jpeg";
    var postHTML = createPost("Post " + i, "Lorem ipsum dolor sit amet", imageURL);
    posts.innerHTML += postHTML;
}