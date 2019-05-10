class Login{
      constructor(){
            this.user = document.getElementById("user");
            this.pass = document.getElementById("pass");
            this.btn = document.getElementsByClassName("btn");
            this.span = document.getElementsByClassName("tips");

            this.init();
            this.getData();
      }
      init(){
            var that = this;
            this.btn.onclick= function(){
                  that.verify();
            }
      }
      getData(){
            this.abc = localStorage.getItem("abc");
            if(this.abc == null){
                  this.abc = [];
            }else{
                  this.abc = JSON.parse(this.abc)
            }
      }
      verify(){
            for(var i=0;i<this.abc.length;i++){
                  if(this.abc[i].user == this.user.value && this.abc[i].pass == this.pass.value){
                        this.span.innerHTML = "登录成功，3秒后跳转";

                        this.abc[i].onoff = 1;

                        localStorage.setItem("abc",JSON.stringify(this.abc));
                        
                        setTimeout(() => {
                              location.href = "index.html";
                        }, 3000);
                        return;
                  }
            }
            this.span.innerHTML = "用户名密码不符"
      }
}
new Login();
