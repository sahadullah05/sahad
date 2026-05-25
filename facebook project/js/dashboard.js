let postContainer = document.querySelector(".postContainer");

let description = document.getElementById("description")
let image = document.getElementById("file")

let currentUser = {
        fullName : "Sahad",
        email:"sahad.rajabali75@gmail.com",
        password : "12345678"
    }

function postHandler () {

    const file = image.files[0] 

    if(file){

      var imageUrl = URL.createObjectURL(file) 
  
      console.log(imageUrl);
    }

    console.log("mera post handler chlaa -->")
    

    postContainer.innerHTML += `<!-- single post -->
    <div class="post mb-4">
    
      <!-- post header -->
      <div class="postHeader  d-flex justify-content-between align-items-center px-4">
        <div class="d-flex align-items-center gap-3 margin">
          <img src="data:image/png;base64,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" alt=""
            width="50" height="50" id="postLogo">
          <div class="d-flex flex-column align-items-center">
            <h5>Fifa</h5>
            <span>Football</span>
          </div>
        </div>
    
        <div>
          <i class="fa-solid fa-x"></i>
        </div>
      </div>
    
    
      <!-- post Description -->
      <div class="postDescription text-start  px-4">
        <p class="mb-2 mt-4">${description.value}</p>

      </div>
    
      <!-- postImage -->
      <div class= ${imageUrl ? 'postImage' : "hidden"} >
        <img
          src=${imageUrl}
          alt="">
      </div>
    
    
      <!-- post like area -->
      <div class="postLike d-flex  justify-content-between px-4 mt-3">
        <div>
          <i class="fa-solid fa-thumbs-up text-primary"></i>
          <i class="fa-solid fa-heart text-danger"></i>
          <span>4.2M</span>
        </div>
        <div>
          <span>2K comments</span> · <span>4.2K shares</span>
        </div>
      </div>
    
    
      <hr>
    
      <div class="postBtnLikeShareComment d-flex justify-content-around">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    
    </div>`

    description.value = ""
    image.value = ''
}



function logoutHandler (){
console.log("mera logout handler chlaa -->");


currentUser = null;

console.log("mery dashboard mai current user -->",currentUser);

if(!currentUser){
  window.location.href = "../login.html"
}

}








 


