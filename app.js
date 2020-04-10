function searchPhotos() {

    // your own client id or let me say your Access key on unsplash
    let clientId = "" // add you own access key here

    //get the search query result 
    let query = document.getElementById('search').value

    //api url, you need to concatenate the clientId and the search result
    let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query="+ query

    //time to make a request and display the images
    fetch(url).then(function (data){
        // console.log(data)
        return data.json() // this converts it to json after fetching the api link
    }).then(function (data) {
        console.log(data);
        
        // loop each of the photos
        data.results.forEach(photo => {
            
            let result = `
                <img src="${photo.urls.regular}" width=500 height=500>
                <a href="${photo.links.download}">
                `
            // document.getElementById("result").innerHTML(result)
            $("#result").append(result)
        });
    })

}