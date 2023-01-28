let canvas=document.querySelector("#anime");
const dimensions = getObjectFitSize(
	true,
    canvas.clientWidth,
    canvas.clientHeight,
    canvas.width,
    canvas.height
	);

canvas.width=dimensions.width;
canvas.height=dimensions.height;
console.log(dimensions.width);
cx=canvas.getContext('2d');
var drops=[];
var drop;
var colors=["#C5C5C5","#AEAEAE","#979797","#808080","#696969","#525252","#3B3B3B"];
for (var i=0;i<20;i++){
	drop=new Drops(Math.random()*1200,Math.random()*600,Math.random()*70);
	drops.push(drop);

}
$('document').ready(function(){
	animateInterval=setInterval(Animate,Math.random()*(20-10)+10);
});
function Animate(){
	cx.clearRect(0,0,canvas.width,canvas.height);
	$.each(drops,function(){
		this.animatedrop(cx);
	})
}
	

function Drops(x,y,radius){
	this.x=x;
	this.y=y;
	this.radius=0;
	this.radiuslimit=radius;
	this.num=0
	this.persentage=0;
}
var posx=100;
var posy=100;
Drops.prototype.animatedrop=function(){
	 // cx.clearRect(0,0,canvas.width,canvas.height);
	 cx.beginPath();
	if (this.radius<this.radiuslimit){
		this.radius++;
		this.persentage=(this.radius*100)/this.radiuslimit;
		this.persentage=Math.abs(this.persentage-100);
		num = this.persentage/100;
		num=num.toString();
		cx.strokeStyle="rgba(255, 255, 255,"+num+")";
	
	}else{
		this.radius=0;
		this.x=Math.random()*1200;
		this.y=Math.random()*600;
		this.radioslimit=Math.random()*(70-40)+40;
		cx.strokeStyle="white";
		// setTimeout(this.animatedrop,Math.random()*(50-30)+30);
	}
	 cx.arc(this.x,this.y ,this.radius, 0, 2 * Math.PI);

	 cx.stroke();
 }


// adapted from: https://www.npmjs.com/package/intrinsic-scale
function getObjectFitSize(
  contains /* true = contain, false = cover */,
  containerWidth,
  containerHeight,
  width,
  height
) {
  var doRatio = width / height;
  var cRatio = containerWidth / containerHeight;
  var targetWidth = 0;
  var targetHeight = 0;
  var test = contains ? doRatio > cRatio : doRatio < cRatio;

  if (test) {
    targetWidth = containerWidth;
    targetHeight = targetWidth / doRatio;
  } else {
    targetHeight = containerHeight;
    targetWidth = targetHeight * doRatio;
  }

  return {
    width: targetWidth,
    height: targetHeight,
    x: (containerWidth - targetWidth) / 2,
    y: (containerHeight - targetHeight) / 2
  };
}

