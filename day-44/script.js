
const reelsData = [
  {
    userName: "rahul_verma",
    userProfile: "./userImage/img1.avif",
    caption: "Life hits different when you stay real.",
    likeCount: 1200,
    commentCount: 89,
    shareCount: 45,
    isFollowed: false,
    isLiked: false,
    video: "./video/video1.mp4"
  },
  {
    userName: "sana_khan",
    userProfile: "./userImage/img2.avif",
    caption: "Vibes speak louder than words ✨",
    likeCount: 950,
    commentCount: 60,
    shareCount: 30,
    isFollowed: true,
    isLiked: false,
    video: "./video/video2.mp4"
  },
  {
    userName: "the_traveler",
    userProfile: "./userImage/img3.avif",
    caption: "Exploring one city at a time 🌍",
    likeCount: 3100,
    commentCount: 140,
    shareCount: 110,
    isFollowed: false,
    isLiked: true,
    video: "./video/video3.mp4"
  },
  {
    userName: "fitness_adi",
    userProfile: "./userImage/img4.avif",
    caption: "No pain, no gain 💪",
    likeCount: 2100,
    commentCount: 95,
    shareCount: 50,
    isFollowed: true,
    isLiked: false,
    video: "./video/video4.mp4"
  },
  {
    userName: "foodie_girl",
    userProfile: "./userImage/img5.avif",
    caption: "Good food. Good mood 🍕",
    likeCount: 4500,
    commentCount: 325,
    shareCount: 122,
    isFollowed: false,
    isLiked: true,
    video: "./video/video5.mp4"
  },
];





let allReels = document.querySelector('.all-reels')
function addData(){
  allReels.innerHTML = ''
reelsData.forEach((elem,idx)=>{
 
let div = document.createElement('div')

div.innerHTML = `

 <div class="reel">
          <div class='mute'><i class="ri-volume-mute-fill"></i></div>
            <video autoplay  loop muted class="main-img" src="${elem.video}" alt=""> </video>
            <div class="bottom">
                <div class="user">
               <img src="${elem.userProfile}" alt="">
               <p class="username">${elem.userName}</p>
               <button id=${idx} class='follow' >${elem.isFollowed ? 'Unfollow': 'Follow'}</button>
            </div>
            <div class="caption">
                <h3>${elem.caption}</h3>
            </div>
            </div>
            
            <div class="media">
              <div id=${idx} class="like">
                <h4 class='like-icon'>${elem.isLiked ? '<i class=" love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                <p>${elem.likeCount}</p>
                </div>
                <div class="comment">
                <h4 class='like-icon'><i class="ri-chat-3-line"></i></h4>
                <p>${elem.commentCount}</p>
                </div>
                <div class="share">
                <h4 class='like-icon'><i class="ri-share-forward-line"></i></h4>
                <p>${elem.shareCount}</p>
                </div>
                <div class="more">
                <h4 class='like-icon'> <i class="ri-more-2-line"></i></h4>
               
              </div>
            </div>
        </div>
`

allReels.appendChild(div)
})
}


allReels.addEventListener('click',(elem)=>{


  if(elem.target.className == 'like'){
      if(reelsData[elem.target.id].isLiked == true){
        reelsData[elem.target.id].likeCount--
        reelsData[elem.target.id].isLiked = false
      }else{
        reelsData[elem.target.id].likeCount++
        reelsData[elem.target.id].isLiked = true
      }
      addData()
  }

  
  if(elem.target.className == 'follow'){
      if(!reelsData[elem.target.id].isFollowed){
        reelsData[elem.target.id].isFollowed = true
      }else{
    reelsData[elem.target.id].isFollowed = false
   }
   addData()
  }
   
})




addData()
