{/* <body>
    <!-- <img src="assets/leo.png"/> -->
    <div id= "edit">
        <input v-model= "message"> <br/>
            {{ message }}
            <div v-for='zodiac in zodiac_signs'>{{ zodiac }}</div>
            <div v-for='img in zodiapp_img'><img class="circles" v-bind:src="img" /></div>
        <!-- view data will render here -->
    </div>

<!--     <div id="edit-5">
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
    </div>

    <div id="edit-7">
        <ol>

            Now we provide each todo-item with the todo object
            it's representing, so that its content can be dynamic.
            We also need to provide each component with a "key",
            which will be explained later.

            <todo-item
            v-for="item in groceryList"
            v-bind:todo="item"
            v-bind:key="item.id">
            </todo-item>
        </ol>
    </div> -->

    <script>
        // view object --
        //initalizes vue edit >
        new Vue ({
            el: '#edit',
            data: {
                'message':' Zodiac',
                'zodiac_signs':['Aquarius ♒️','Pisces ♓️','Aries ♈️','Taurus ♉️','Gemini ♊️','Cancer ♋️','Leo ♌️','Virgo ♍️','Libra ♎️','Scorpio ♏️','Sagittarius ♐️','Capricorn ♑️'],
                // 'zodiapp_img':["assets/leo.png","assets/libra.png"]
                'zodiapp_img':["./assets/leo.png","./assets/libra.png"]
            }
            // methods: {
            //     lookupHoroscopeAPI: _.debounce(function() {
            //         this.HoroscopeAPI = "Fetching your horoscope ... "
            //         axios.get('url' + horoscope)
            //             .then(function(response){
            //                 this.horoscope = response.data.sunsign
            //             }) //what to do after server
            //             .catch(function(error){
            //                 this.horoscope = 'No No No ☝🏼'
            //             })
            //     }, 400)
            // }
        });

        // var app5 = new Vue({
        //     el: '#app-5',
        //     data: {
        //         message: 'Hello Vue.js!'
        //         },
        //         methods: {
        //             reverseMessage: function () {
        //             this.message = this.message.split('').reverse().join('')
        //         }
        //     }
        // });

        // Vue.component('todo-item', {
        //         props: ['todo'],
        //         template: '<li>{{ todo.text }}</li>'
        //     })
        //     var app7 = new Vue({
        //     el: '#app-7',
        //     data: {
        //         groceryList: [
        //             { id: 0, text: 'Vegetables' },
        //             { id: 1, text: 'Cheese' },
        //             { id: 2, text: 'Whatever else humans are supposed to eat' }
        //         ]
        //     }
        // })

    </script>
</body> */}