let team = [
  {
    team: "CSK",
    primaryClr: "yellow",
    secondaryClr: "blue",
    color: "black",
    fullName: "Chennai Super Kings",
    trophies: 5,
    captain: "Ruturaj Gaikwad",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCqe_SSY2pqmw13BEpzMdrmedl07eOTq5KrYu5hQhzuaaJRvFwdC98JXUHKbCTjMS00E&usqp=CAU",
  },
  {
    team: "DC",
    primaryClr: "blue",
    secondaryClr: "red",
    color: "white",
    fullName: "Delhi Capitals",
    trophies: 0,
    captain: "Axar Patel",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg",
  },
  {
    team: "GT",
    primaryClr: "blue",
    secondaryClr: "yellow",
    color: "black",
    fullName: "Gujarat Titans",
    trophies: 1,
    captain: "Shubman Gill",
    logo: "https://imgk.timesnownews.com/media/Gujarat_Titans_logo.png",
  },
  {
    team: "KKR",
    primaryClr: "purple",
    secondaryClr: "gold",
    color: "white",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    captain: "Ajinkya Rahane",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiKUO1WZoqqdpVs6pAlu_G_bwXLnzndyqjQ&s",
  },
  {
    team: "LSG",
    primaryClr: "green",
    secondaryClr: "gold",
    color: "yellow",
    fullName: "Lucknow Super Giants",
    trophies: 0,
    captain: "Rishabh Pant",
    logo: "https://i.pinimg.com/736x/0a/81/5e/0a815e9a05d8e90a938ccc42e3e80712.jpg",
  },
  {
    team: "MI",
    primaryClr: "blue",
    secondaryClr: "gold",
    color: "white",
    fullName: "Mumbai Indians",
    trophies: 5,
    captain: "Hardik Pandya",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyKVv6HY6XQq7ZB8HR4JQJYVhCDAxLVfnLA&s",
  },
  {
    team: "PBKS",
    primaryClr: "red",
    secondaryClr: "gold",
    color: "black",
    fullName: "Punjab Kings",
    trophies: 0,
    captain: "KL Rahu",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqlsRJm6VuxEtnx-mLBlvOUWC-6pslzOkIQ&s",
  },
  {
    team: "RR",
    primaryClr: "pink",
    secondaryClr: "blue",
    color: "black",
    fullName: "Rajasthan Royals",
    trophies: 1,
    captain: "Sanju Samson",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqlsRJm6VuxEtnx-mLBlvOUWC-6pslzOkIQ&s",
  },
  {
    team: "RCB",
    primaryClr: "red",
    secondaryClr: "gold",
    color: "white",
    fullName: "Royal Challengers Bengaluru",
    trophies: 1,
    captain: "Rajat Patidar",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgooKb876EL_CcqKA6aDIiLjf5XFBb_Q_pbLEqkgL2KRZ9MxcF1tJzcRPl28aiRFoUf4&usqp=CAU",
  },
  {
    team: "SRH",
    primaryClr: "orange",
    secondaryClr: "black",
    color: "white",
    fullName: "Sunrisers Hyderabad",
    trophies: 1,
    captain: "Pat Cummins",
    logo: "https://i.pinimg.com/736x/59/db/7a/59db7a925413a2b7838e77bd378b1655.jpg",
  },
];

let btn = document.querySelector("button");
let box = document.querySelector(".box");
let teamcode = document.querySelector(".box .teamcode");
let fullname = document.querySelector(".box .fullname");
let trophie = document.querySelector(".box .trophie");
let captain = document.querySelector(".box .captain");
let image = document.querySelector(".box img");

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * team.length);
  box.style.backgroundColor = team[random].primaryClr;
  box.style.color = team[random].color;
  teamcode.style.backgroundColor = team[random].secondaryClr;
  teamcode.innerHTML = team[random].team;
  fullname.innerHTML = team[random].fullName;
  trophie.innerHTML = team[random].trophies;
  captain.innerHTML = team[random].captain;

  image.src = team[random].logo;
  console.log(image);

  console.log(team[random]);
});



let obj = [
  {
    video: ''
  }
]

// console.log(let video.src = );

addEventListener('mouseenter',()=>{
        obj[].video
})