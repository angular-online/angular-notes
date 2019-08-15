function getTodos(success, failure) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://todos-api-dev.herokuapp.com/todos");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {
            success(this.responseText);
        } else {
            failure();
        }
    };
}