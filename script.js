var app = new Vue({
    el: '#app',
    data: {
      aboutMe: true,
      experience: false,
      education: false,
      skills: false,
      displayed: {
      	title: '',
      	openCout: '',
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
      	about15: '',
      },
      about: {
      	title: 'string isabelleWilliams() {',
      	openCout: 'cout << ',
      	about1: '"I\'m a University of Michigan 2020 graduate with a B.S. in Computer Science. Outside of class, I was an Instructional Aide for ',
      	about2: 'EECS 183',
      	about3: ', and a member of ',
      	about4: 'Kappa Theta Pi',
      	about5: '. ',
      	about6: 'I\'ll be a Program Manager at ',
      	about7: 'Microsoft',
      	about8: 'beginning fall 2020. Until then, I\'m learning to crochet, working on my distance running, and teaching at ',
      	about9: 'The Coding School',
      	about10: '."',
      	about11: ' << endl;',
      	about12: 'return ',
      	about13: '"isabellewilliams3[at]gmail.com"',
      	about14: '; ',
      	about15: '}',
      },
    },
    methods: {
      
    },
    mounted () {
    	/* Fill displayed variables */
    	for (var key in this.about) {
    		this.displayed[key] = this.about[key]
    	}
    }
});
    
