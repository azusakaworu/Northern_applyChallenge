let vm = new Vue({

    el:'#app',
    data:{
        input:{email:"",choose:""}
    },


    methods:{
        ajaxFun(){
            console.log("trying to submit");

             if(this.input.email != "" && this.input.choose != ""){

                let url = `admin/form.php`;
                fetch(url, {method: 'POST'})
                .then(res => res.json())
                .then(data => {
                    if (data == "worng"){
                        // if the php file returns a failure, try again
                        console.log("authentication failed, try again");
                        return;
                    } else {
                        // if the back-end authentication works, then go to the users page
                        
                    }

                }) .catch(function(error) {
                    console.error(error);
                });


                }
        }

    }



});