$(function(){
    $('#btns').click(function(){
        var un=$('#uname').val();
        var up=$('#upassword').val();
        var upa=$('#passworda').val();
        var xy=/^[A-Za-z0-9]+$/;
        var xy2=/^[A-Za-z0-9]{6,12}$/;
        if(un===''|| up===''|| upa===''){
            alert('请输入正确数值')
        }else{

            if(xy.test(un)){
                if(xy2.test(up) ){
                    if(up===upa){
                        alert('注册成功');

                        localStorage.setItem('name',un);
                        localStorage.setItem('password',up);

                        $('#uname').val('');
                        $('#upassword').val('');
                        $('#passworda').val('');



                    }
                }else{
                    alert('请输入正确数值')
                }
            }else{
                alert('未通过校验')
            }
        }
    })

});