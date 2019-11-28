window.onload = () => {
    
    const API_KEY = '12d329a0';
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
    
    let movie = "joker";


    let xhr = new XMLHttpRequest();

    xhr.open('GET', `${API_URL}t=${movie}`);
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                console.log(json);

                document.querySelector(".title").textContent = json.Title;
                document.querySelector(".poster").setAttribute("src", json.Poster);
                document.querySelector(".year").textContent = json.Year;

            } else {
                console.log('error msg: ' + xhr.status);
            }
        }
    }
    xhr.send();

} 