var quotes = [];
quotes[0] = "“An image is not simply a trademark, a design, a slogan or an easily \
            remembered picture. It is a studiously crafted personality profile of an \
            individual, institution,corporation, product or service”";

quotes[1] = "“When I started Dylan's Candy Bar in 2001, I wanted it to be a place that\
             merged my love of pop culture, fashion, art and music with candy. Since then, \
             we have been fortunate to pioneer artistic partnerships with many legends”";
            
quotes[2] = "“It is an absolute human certainty that no one can know his own beauty or \
            perceive a sense of his own worth until it has been reflected back to him  \
            in the mirror of another loving, caring human being”";

quotes[3] = "“Don’t make the mistake of looking down on your partner. You’re only on\
            that pedestal because they put you up there”";

var authors = ["Daniel J. Boorstin", "Meredith Duran", "Leo Buscaglia", "Charles Martin"];

         

$('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        switch(navBtnId){
             case 0: 
                document.getElementById('slideQuote').children[0].innerHTML = quotes[0];
                document.getElementById('nameAuthor').innerHTML = authors[0];
                break;
             case 1: 
                document.getElementById('slideQuote').children[0].innerHTML = quotes[1];
                document.getElementById('nameAuthor').innerHTML = authors[1];
                break;
             case 2: 
                document.getElementById('slideQuote').children[0].innerHTML = quotes[2];
                document.getElementById('nameAuthor').innerHTML = authors[2];
                break;
             case 3: 
                document.getElementById('slideQuote').children[0].innerHTML = quotes[3];
                document.getElementById('nameAuthor').innerHTML = authors[3];
                break;
        }
});