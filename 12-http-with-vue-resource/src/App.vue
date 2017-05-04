<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Requests with vue-resource</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <button class="btn btn-primary"@click="fetchData">Get data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users">{{user.username}} - {{user.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {username: '', email: ''},
                users: []
            }
        },
        methods: {
            submit(){
//                console.log('user', this.user)
                this.$http.post('https://vuejs-tinyapp.firebaseio.com/users.json', this.user)
                    .then( response => {
//                        console.log(response);
                        this.user =  {username: '', email: ''}
                    }, error => {
                        console.log(error)
                    })
            },
            fetchData() {
                this.$http.get('https://vuejs-tinyapp.firebaseio.com/users.json')
                    .then( response => {
                        //gets a promise....
                        //const data = response.json();
                        //console.log('users response', data);

                        return response.json();
                    })
                    .then( data => {
                        //console.log(data)
                        // gets an js object like
                        // { '-KjK1SA0OROi8tfylwzN': { email: 'test@test.com', username: 'test' },
                        //    '-KjK1jrM-iDgQQE9ZIpf': { email: 'fake@mail.com', username: 'make } }
                        //review howto extract the values and get and arra with them:
                        //http://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key
                        this.users = Object.keys(data).map( key => data[key] );
                    })
            }
        }
    }
</script>

<style>

</style>
