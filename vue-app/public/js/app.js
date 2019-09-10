
new Vue({
  el: '#root',

  data: {
    skills: []
  },

  created() {
    axios.get('/skills').then(repsonse => this.skills = repsonse.data);
  }

});