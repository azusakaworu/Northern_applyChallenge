let vm = new Vue({

    el: '#app',
    data: {
        email: "",
        errors: "",
        choose: "",
        formSection: true,
        ThanksSection: false,
        SignUp: true,
        loading: false,
        isActive: false
    },


    methods: {
        thankMSG() {
            // https://stackoverflow.com/questions/38399050/vue-equivalent-of-settimeout
            setTimeout(() => {
                console.log("submitting...");
                this.formSection = false;
                this.ThanksSection = true;
            }, 2000);

        },

        validEmail(email) {
            var emailReg = /^\w{3,}@[A-z]{2,6}\.[A-z]{2,5}$/;
            return emailReg.test(email);
        },

        checkForm(e) {
            e.preventDefault();
            console.log("trying to submit");

            if (this.email != "" && this.choose != "") {
                //let url = `./form.json`;
                let url = `https://api.npoint.io/ccea0508a78ed7724e5d`;
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        console.log(this.email);
                        if (!this.validEmail(this.email)) {
                            // console.log("Please enter a valid email address. ");
                            this.isActive = true;
                            this.errors = "Please enter a valid email address.";
                            return;
                        } else {
                            //works
                            console.log("you did!! tank you!!");

                            this.SignUp = false;
                            this.loading = true;
                            //tankyou page
                            this.thankMSG();
                        }
                    }).catch(function (error) {
                        console.error(error);
                    });
            }
        }
    }
});