
/** VUE */


new Vue({
  el: "#app",
  data: {
  	categories: [
    	'cat1',
      'cat2',
      'cat3'
    ],
    previews: [
    	{cat: 'cat1'},
      {cat: 'cat2'},
      {cat: 'cat5'},
      {cat: 'cat3'},
    ],
    selectedCat: 'all',
  },
  methods: {
  	filter(selection) {
    	this.selectedCat = selection;
    }
  },
  mounted() {
  	this.previews = _.shuffle(this.previews);
  }
})





