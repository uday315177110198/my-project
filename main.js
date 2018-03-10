function getfile(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  let data = JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
});

function basicinfo(basics){
  var first_child = document.querySelector(".profile");
  //var profile_pic=document.createElement("img");
  var profile_pic = new Image();
  profile_pic.src=basics.photo;
  first_child.appendChild(profile_pic);
  var name=document.createElement("h4");
  name.textContent=basics.name;
  first_child.appendChild(name);
  var mobile=document.createElement("p");
  mobile.innerHTML=basics.phone;
  first_child.appendChild(mobile);
  var mail=document.createElement("a");
  mail.href="mailto:surya@gmail.com";
  mail.innerHTML=basics.email;
  first_child.appendChild(mail);
  var ad = document.createElement("p");
  ad.textContent="Address";
  first_child.appendChild(ad);
  var hr =document.createElement("HR");
  first_child.appendChild(hr);
  // console.log(basics.address);
  var address = document.createElement("div");
  address.classList.add("contact");
  // address.style.fontSize="20px";
  address.textContent=basics.Address;
  first_child.appendChild(address);
}
