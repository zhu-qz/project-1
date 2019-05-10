function Img(){
      // this.simg = document.querySelector(".m-l .small");
      // this.bimg = document.querySelector(".m-l .big");
      this.imgs = document.querySelector(".m-l")
      // this.main = document.querySelector("main")
      // console.log(this.main)
      console.log(this.imgs)
      
      this.init();
}
Img.prototype.init = function(){
      var that = this;
      this.url = "http://localhost/yoho/data/data.json";
      ajaxGet(this.url).then(function(res){
            that.res = JSON.parse(res);
            // console.log(that.res);
            that.display();
      })
}
Img.prototype.display = function(){
      var str = "";
      for(var i=0;i<this.res.length;i++){
            str += `<div class="small" index=${this.res[i].id}>
                        <img src="${this.res[i].small}" alt="">
                    </div>
                    <div class="big" index=${this.res[i].id}>
                        <img src="${this.res[i].big}" alt="">
                    </div>`
      }
      // console.log(str)
      // this.simg.innerHTML = str;
      // this.bimg.innerHTML =str;
      this.imgs.innerHTML = str;
}
new Img();


//放大镜
// function Magnifier(){
//       this.sBox = document.querySelector(".m-l .small");
//       this.span = document.querySelector(".m-l .small span");
//       this.bBox = document.querySelector(".m-l .big");
//       this.bImg = this.bBox.children[0];

//       this.init()
// }
// Magnifier.prototype.show = function(){
//       this.span.style.display = "block";
//       this.bBox.style.display = "block";
// }
// Magnifier.prototype.hide = function(){
//       this.span.style.display = "none";
//       this.bBox.style.display = "none";
// }
// Magnifier.prototype.move = function(pos){
//       var l = pos.x - this.span.offsetWidth/2;
//       var t = pos.y - this.span.offsetHeight/2
//       if(l<0) l=0;
//       if(t<0) t=0;
//       (l>this.sBox.offsetWidth-this.span.offsetWidth) && 
//       (l=this.sBox.offsetWidth-this.span.offsetWidth);
      
//       (t>this.sBox.offsetHeight-this.span.offsetHeight) && 
//       (t=this.sBox.offsetHeight-this.span.offsetHeight);

//       this.span.style.left = l + "px";
//       this.span.style.top = t + "px";

//       // 计算比例
//       var x=  l / (this.sBox.offsetWidth-this.span.offsetWidth)
//       var y = t / (this.sBox.offsetHeight-this.span.offsetHeight)
//       console.log(x,y)

//       // 根据比例移动大图
//       this.bImg.style.left = -x * (this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
//       this.bImg.style.top = -y * (this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
// }
// Magnifier.prototype.init = function(){
//       var that = this;
//       this.sBox.onmouseover = function(){
//           that.show()
//       this.onmousemove = function(eve){
//             var e = eve || window.event;
//             that.move({
//                   x:e.pageX - this.offsetLeft,
//                   y:e.pageY - this.offsetTop
//             })
//           }
//       }
//       this.sBox.onmouseout = function(){
//           that.hide()
//       }
// }
// new Magnifier;