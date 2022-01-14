//  async function getData() {
//     let response = await fetch('https://api.deezer.com/artist/52463032/albums')
//     const data = await response.json()
//     data = JSON.parse(this.response)


//   console.log(data)
//  }
//  getData();



async function loadAlbums() {
    const response = await fetch ('https://theaudiodb.com/api/v1/json/2/album.php?i=111304');
    const albums = await response.json();

    return albums;
}

    document.addEventListener("DOMContentLoaded" , async () => {
        let albums = [];
        albums.forEach(myFunction);
    document.getElementById("demo").innerHTML = text;
    function myFunction(item, index) {
        text += index + ": " + item + "<br>"; 
      }
        try {
            albums = await loadAlbums();
        }
        catch (e) {
            console.log("Error!");
            console.log(e);
        }
        console.log(albums);
    });
    
    

  
    
    