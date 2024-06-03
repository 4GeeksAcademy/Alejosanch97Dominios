// dominios

let pronoun = ['the', 'our', 'his','I','he','it','we','them' ];
let adj = ['great', 'big', 'amazing' , 'calm', 'busy', 'charming', 'clear', 'clever' ];
let noun = ['jogger', 'racoon', 'cat', 'boy', 'mouse', 'computer', '4geeks', 'music' ];
let extension = ['.com', '.net', '.us','.io','.etc'];

// generating the domains
for(let i = 0; i < pronoun.length; i++) {
  for(let j = 0; j < adj.length; j++) {
    for(let k = 0; k < noun.length; k++) {
        for(let z = 0; z < extension.length; z++ ){
      console.log(pronoun[i] + adj[j] + noun[k]+ extension[z]); 
        }
    }
  }
}