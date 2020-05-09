var app = new Vue({
    el: '#app',
    data: {
      educationShown: false,
      experienceShown: false,
      displayed: {
      	aboutTitle: '',
      	about0: '',
      	about1: '',
      	about2: '',
      	about3: '',
      	about4: '',
      	about5: '',
      	about6: '',
      	about7: '',
      	about8: '',
      	about9: '',
      	about10: '',
      	about11: '',
      	about12: '',
      	about13: '',
      	about14: '',
      	about15: ''
      },
      about: {
      	aboutTitle: 'string isabelleWilliams() {',
      	about0: 'cout << ',
      	about1: '"Hi there! I\'m a University of Michigan 2020 graduate with a B.S. in Computer Science. Outside of class, I was an Instructional Aide for ',
      	about2: 'EECS 183',
      	about3: ', and a member of both ',
      	about4: 'Kappa Theta Pi',
      	about5: ' and Delta Phi Epsilon. ',
      	about6: 'I\'ll be a Program Manager at ',
      	about7: 'Microsoft',
      	about8: 'beginning fall 2020. Until then, I\'m learning to crochet, working on my distance running, and teaching at ',
      	about9: 'The Coding School',
      	about10: '."',
      	about11: ' << endl;',
      	about12: 'return ',
      	about13: '"isabellewilliams3@gmail.com"',
      	about14: '; ',
      	about15: '}',
      },
      
    },
    mounted () {
    	/* Fill displayed variables */
    	for (var key in this.about) {
    		this.displayed[key] = this.about[key]
    	}
    }
});
    
