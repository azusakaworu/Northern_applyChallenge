let vm = new Vue({

    el: '#app',
    data: {
        email:"",
        errors:[],
        choose:""
    },


    methods: {
        checkForm(e){
            if(this.email) return true;
            this.errors = [];
             if(!this.email) this.errors.push("Please enter a valid email address.");
     
            e.preventDefault();

        },

        // thankMSG() {
        //     alert("hahaha");

        // },



        ajaxFun(){
            console.log("trying to submit");

             if (this.email != "" && this.choose != "") {

                let url = `admin/form.php`;
                fetch(url, { method: 'POST' })
                    .then(res => res.json())
                    .then(data => {
                        if (data == "worng") {
                            // if the php file returns a failure, try again
                            console.log(" error message ");
                            return;
                        } else {
                            // if the back-end authentication works, then go to the users page
                            thankMSG();

                        }

                    }).catch(function (error) {
                        console.error(error);
                    });


           }
        }

    }



});