function Car(){
      this.cgoods = document.querySelector(".m-c ul");
      this.url = "http://localhost/yoho/data/data.json";
      this.init();
      this.addEvent();
}
Car.prototype.init = function(){
      // console.log(1)
      var that = this;
      ajaxGet(this.url).then(function(res){
            that.res = JSON.parse(res);
            // console.log(that.res);
            that.getCookie();
      })
}
Car.prototype.getCookie = function(){
      this.goods = getCookie("goods")!= "" ? JSON.parse(getCookie("goods")) : [];
      // console.log(this.goods);
      this.display();
}
Car.prototype.display = function(){
      var str = "";
      for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                  if(this.res[i].id == this.goods[j].id){
                        str += `<li index="${this.goods[j].id}">
                                    <i><input type="checkbox" value="" class="btn"></i>
                                    <div class="msg">
                                          <img src="${this.res[i].src}" alt="">
                                          <div class="box">
                                                <a href="">${this.res[i].name}</a>
                                                <p>颜色：蓝色 尺码：S</p>
                                          </div>
                                    </div>
                                    <div class="price">
                                          ${this.res[i].price}
                                    </div>
                                    <div class="num">
                                          <input type="number" min=1 value="${this.goods[j].num}" class="add">
                                    </div>
                                    <div class="total">
                                          ${this.res[i].price}
                                    </div>
                                    <div class="act">
                                          <span class="dele">删除</span>
                                    </div>
                        </li>`
                  }
            }
      }
      // console.log(str);
      this.cgoods.innerHTML = str;
}
Car.prototype.addEvent = function(){
      var that = this;
      this.cgoods.addEventListener("input",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "add"){
                  that.num = target.value;
                  that.id = target.parentNode.parentNode.getAttribute("index");
                  that.changeCookie();
            }
            // console.log(this.tagName);
      })
      this.cgoods.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "dele"){
                  that.num = target.value;
                  that.id = target.parentNode.parentNode.getAttribute("index");
                  console.log(target)
                  target.parentNode.parentNode.remove();
                  that.removeCookie();
            }
      })
}
Car.prototype.changeCookie = function(){
      for(var i=0;i<this.goods.length;i++){
            if(this.id == this.goods[i].id){
                  console.log(this.value)
                  this.goods[i].num = this.num;
            }
      }
      setCookie("goods",JSON.stringify(this.goods));
}
Car.prototype.removeCookie = function(){
      for(var i=0;i<this.goods.length;i++){
            if(this.id == this.goods[i].id){
                  this.goods.splice(0,1);
            }
      }
      setCookie("goods",JSON.stringify(this.goods));
}
new Car();