images = document.getElementsByClassName('slides');
count = 0;
slide_show();
function slide_show(){
for(i=0;i<images.length;i++){
  images[i].style.display = "none";
}
images[count%images.length].style.display = "block";
count++;
setTimeout(slide_show, 2000)
}
function menu_view() {
  if (document.getElementById("menu_list").style.display == "none") {
    document.getElementById("menu_list").style.display = "block";
  } else {
    document.getElementById("menu_list").style.display = "none";
  }
}
