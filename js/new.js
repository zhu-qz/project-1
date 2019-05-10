function Goods(){
      this.goods = document.querySelector(".m-r-b ul");

      this.init();
      this.addEvent();
}
Goods.prototype.init = function(){
      var that = this;
      this.url = "http://localhost/yoho/data/data.json";
      ajaxGet(this.url).then(function(res){
            that.res = JSON.parse(res);
            //console.log(that.res)
            that.display();
      })
}
Goods.prototype.display = function(){
      var str = "";
      for(var i=0;i<this.res.length;i++){
            str += `    <li>
                              <div class="box-t">
                                    <a href="detail.html">
                                    <img src="${this.res[i].src}" alt="">
                                    </a>
                              </div>
                              <div class="box-b">
                                    <p>${this.res[i].name}</p>
                                    <p>${this.res[i].price}</p>
                                    <div class="shop" index="${this.res[i].id}">
                                          加入购物车
                                    </div>
                              </div>
                        </li>`;
      }
      this.goods.innerHTML = str;
}
Goods.prototype.addEvent = function(){
      var that = this;
      this.goods.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "shop"){
                  that.id = target.getAttribute("index");
                  //console.log(target)
                  that.setCookie();
            }
            //console.log(target.className)
      })
}
Goods.prototype.setCookie = function(){
      this.goods = getCookie("goods");
      if(this.goods == ""){
            this.goods = [{
                  id:this.id,
                  num:1
            }];
      }else{
            var onoff = true;
            this.goods = JSON.parse(this.goods);
            for(var i=0;i<this.goods.length;i++){
                  if(this.goods[i].id == this.id){
                        this.goods[i].num++;
                        onoff = false;
                        break;
                  }
            }
            if(onoff){
                  this.goods.push({
                        id:this.id,
                        num:1
                  })
            }
      }
      setCookie("goods",JSON.stringify(this.goods));
}
new Goods();