document.querySelector('#left').addEventListener("mouseover", mouseOverLeft);
document.querySelector('.content').addEventListener("mouseout", mouseOut);
document.querySelector('#left').addEventListener("onclick", mouseClickLeft);
document.querySelector('#right').addEventListener("mouseover", mouseOverRight);
document.querySelector('#right').addEventListener("onclick", mouseClickRight);

function mouseOverLeft() {
  document.querySelector('.content').style.transform = "rotate(-10deg)";
  document.querySelector('.grinder').style.transform = "rotate(10deg) translateX(100px)";
  document.querySelector('#grind').classList.add("grind");
  document.querySelector('#grind').style.opacity = "1";
}

function mouseOut() {
  document.querySelector('.content').style.transform = "rotate(0deg)";
  document.querySelector('.content').classList.remove("clickedR");
  document.querySelector('.content').classList.remove("clickedL");
  document.querySelector('.bean').style.transform = "rotate(0deg) translateX(0px)";
  document.querySelector('.grinder').style.transform = "rotate(0deg) translateX(0px)";
  document.querySelector('#grind').classList.remove("grind");
  document.querySelector('#save').classList.remove("save");
  document.querySelector('#grind').style.opacity = "0";
  document.querySelector('#save').style.opacity = "0";
}

function mouseOverRight() {
  document.querySelector('.content').style.transform = "rotate(10deg)";
  document.querySelector('.bean').style.transform = "rotate(-10deg) translateX(-100px)";
  document.querySelector('#save').classList.add("save");
  document.querySelector('#save').style.opacity = "1";
}

// send a GET request to server
function get_request(where) {
  $.ajax({
    url: "favourites_handler",
    type: "get",
    // specify swipe direcion
    data: {
      direction: where
    },
    // handle server response if stuff goes well
    success: (data, status) => {
      // alert("Data: " + data + "\nStatus: " + status);
      parsed_data = JSON.parse(data);
      console.log(parsed_data);
      // console.log(`name: ${parsed_data.name}`);
      document.querySelector("#name").innerHTML = parsed_data.name;
      document.querySelector("#formatted_address").innerHTML = parsed_data.formatted_address;
      document.querySelector(".image").src = parsed_data.photo;
      document.querySelector("#isopen").innerHTML = parsed_data.isopen;
    },
    // idk what to do if we get to here
    error: (xhr) => {
    }
  });
}

function mouseClickRight() {
  document.querySelector('.content').classList.add("clickedR");
  document.querySelector('.content').style.opacity = "0";
  setTimeout(()=>{document.querySelector('.content').style.opacity = "1";},500)
  get_request("right");
}

function mouseClickLeft() {
  document.querySelector('.content').classList.add("clickedL");
  document.querySelector('.content').style.opacity = "0";
  setTimeout(()=>{document.querySelector('.content').style.opacity = "1";},500)
  get_request("left");

}
