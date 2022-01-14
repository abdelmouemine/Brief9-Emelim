

fetch('https://theaudiodb.com/api/v1/json/2/album.php?i=111304')
    .then(response => response.json())
    .then((albums) => {
      console.log(albums.album);
      albums.album.map(album => {
        var img = album.strAlbumThumb
        if(img == "")
        {
          img = "Album2.jpg"
        }
        
        
        // document.querySelector('.row').innerHTML += 
        document.querySelector('.myContainer').innerHTML += 
            `<div class="cardUI"><img src="${img}" alt="${album.strAlbum}"  />
            <p>Title: ${album.strAlbum}</p>
            <p>Year Released: ${album.intYearReleased}</p></div>`
            
            


                       

        //   `<div><img src="${album.strAlbumThumb}" alt="${album.strAlbum}" />` 
        // + `<p>Title: ${album.strAlbum}</p>` 
        // + `<p>Year Released: ${album.intYearReleased}</p></div>`;
        

          
      })
      
    })

    // if (){
    //     console.log("omage is not avaolable");
    // } else{
    //     albums.album.map(album => {
    //         document.querySelector('.row').innerHTML +=
    //           `<div><img src="${album.strAlbumThumb}" alt="${album.strAlbum}" />` 
    //         + `<p>Title: ${album.strAlbum}</p>` 
    //         + `<p>Year Released: ${album.intYearReleased}</p></div>`;
            
    
              
    //       })
          
    //     })
    // }

    
    



    // onSubmit = () => {
    //     fetch("http://example.com/movies.json", {
    //       method: "post",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email: this.state.signinEmail,
    //         password: this.state.signinPassword,
    //       }),
    //     })
    //       .then((response) => response.text())
    //       .then((data) => console.log(data));
    //   };
    