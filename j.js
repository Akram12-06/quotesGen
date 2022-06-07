let quotes=[`“Your hand touching mine. This is how galaxies collide.”`,`“I need you like a heart needs a beat.”`,`“Take my hand, take my whole life too. For I can’t help falling in love with you.”`,`“It’s always better when we’re together.”`,`“If you remember me, then I don’t care if everyone else forgets.”`,`”It was love at first sight, at last sight, at ever and ever sight.”`,`“True love is putting someone else before yourself.”`,`"You are the best thing that’s ever been mine."`,`”You make me want to be a better man.”`,`”I never want to stop making memories with you.” `]
let para=document.getElementById('para');
let btn=document.getElementById('btn');

function genrand(){
    let x=Math.floor((Math.random())*quotes.length);
    console.log(x);
    para.innerHTML=quotes[x];
    btn.style.color='red';
    para.style.color='rgb(169, 1, 1)';


}


