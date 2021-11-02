var app = new Vue({
    el: '#container',
    data: {
        toDos: [
            'Fare i Compiti',
            'Fare la Spesa',
            'Fare il Bucato'
        ]
    },
    methods: {
        removeTask(index) {
            //console.log("click");
            this.toDos.splice(index, 1)
        },
        submit() {
            //console.log("click");
            let yourTask = document.querySelector(".input1").value
            console.log(yourTask);
            this.toDos.push(yourTask)
        }


    }
})