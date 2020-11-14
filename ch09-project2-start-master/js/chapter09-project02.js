function addListener(){
   document.getElementById("thumbnails").addEventListener("click", showLargeImage);
   }
   
   function showLargeImage(event){
   let clickedItemSrc = event.target.src;
   let clickedItemTitle = event.target.title;
   
   // getting larger image source by using smaller image source
   let fileProp = clickedItemSrc.split("/");
   let largeImage = "images/medium/"+fileProp[fileProp.length -1 ];
   let featuredDiv = document.getElementById("featured");
   let image = featuredDiv.querySelector("img");
   image.src = largeImage;
   image.title = clickedItemTitle;
   
   let caption = featuredDiv.querySelector("figcaption");
   caption.innerHTML = clickedItemTitle;
   }