var app = new Vue({
    el: '#container',
    data: {
        toDos: [
            'Fare i Compiti',
            'Fare la Spesa',
            'Fare il Bucato'
        ],
        nothing: false,
        short: false

    },
    methods: {
        removeTask(index) {
            //console.log("click");
            this.toDos.splice(index, 1)
            if (this.toDos.length == 0) {
                this.nothing = true;


            }
        },
        submit() {
            //console.log("click");
            let yourTask = document.querySelector(".input1").value
            // console.log(yourTask);

            if (yourTask.length < 4) {
                //console.log("errore");
                this.short = true;

            } else {
                this.toDos.push(yourTask)
            }
        }




    }
})