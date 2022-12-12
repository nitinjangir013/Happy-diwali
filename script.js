let deepImage = document.getElementById("image2");
let litImage = document.getElementById("image3");
function getCursorPosition(event) {
let valueClientX = event.clientX;
let valueClientY = event.clientY;
  // console.log(valueClientX);
  // console.log(valueClientY);
  litImage.style.left = (valueClientX-215)+"px";
  litImage.style.top = (valueClientY-15)+"px";
  if(valueClientX>320 && valueClientY>180) //&& valueClientX<300 &&valueClientY<200
    {
      deepImage.style.opacity = "1";
    }
  else
    {
      deepImage.style.opacity = "0";
    }
}