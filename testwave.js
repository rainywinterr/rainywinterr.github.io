let canvas=document.querySelector("#anime");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
cx=canvas.getContext('2d');
cx.strokeStyle="white";
var drops=[];
var drop;
for (var i=0;i<30;i++){
	drop=new Drops(Math.random()*window.innerWidth,Math.random()*window.innerWidth,Math.random()*70);
	drops.push(drop);
}
$('document').ready(function(){
	animateInterval=setInterval(Animate,Math.random()*(30-20)+20);
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
Drops.prototype.animatedrop=function(){
	 cx.beginPath();
	if (this.radius<this.radiuslimit){
		this.radius++;
		this.persentage=(this.radius*100)/this.radiuslimit;
		this.persentage=Math.abs(this.persentage-100);
		this.num = this.persentage/100;
		this.num=this.num.toString();
		cx.strokeStyle="rgba(255, 255, 255,"+this.num+")";
	
	}else{
		this.radius=0;
		this.x=Math.random()*window.innerWidth;
		this.y=Math.random()*window.innerHeight;
		this.radioslimit=Math.random()*(70-40)+40;
	}
	 cx.arc(this.x,this.y ,this.radius, 0, 2 * Math.PI);

	 cx.stroke();
 }


