$(function(){
 /* $('#btns').click(function(){
      var un=$('#uname').val();
      var ups=$('#upassword').val();
      if(un===''){
         if(ups===''){
             var uname=localStorage.getItem('name');
             var upassword=localStorage.getItem('password');
             if(un===uname){
                 if(ups===upassword){
                     alert('登入成功，跳转中');
                     window.location.href='https://www.bilibili.com/'

                 }else{
                     alert('密码错误')
                 }

             }else{
                 alert('用户名不存在')
             }
         }else{
             alert('请输入你的密码')
         }
      }else{
          alert('请输入你的用户名')
      }

  })*/
    $('#btns').click(function(){
        var un=$('#uname').val();
        var ups=$('#upassword').val();
        if(un===''){
            alert('请输入用户名')
        }else{
            if(ups===''){
                alert('请输入密码')
            }else{
                var uname=localStorage.getItem('name');
                var upassword=localStorage.getItem('password');
                if(un===uname){
                    console.log(ups,upassword);
                    if(ups===upassword){
                        alert('登入成功，跳转中');
                        window.location.href='https://www.bilibili.com/'
                        window.open('https://www.baidu.com/')
                    }else{
                        alert('密码错误')
                    }
                }else{
                    alert('用户名不存在')
                }
            }
        }














    })


















});