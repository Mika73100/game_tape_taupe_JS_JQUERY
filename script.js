    $(document).ready(function(){

        //je défini mes variables (ici le nombre de random).
        let min = 1;
        let max = 9;
        let compteur = 0;
        let sound = new Audio("assets/smash.mp3");
        let img = ("asset/hammer.png");

        //je crée une variable rand pour définir le random.
        let rand;

        //je crée une fonction show.
        function show(){

            $('.hole').children('.img').css('visibility', 'hidden')
            //je fais appel a math flor pour calculé le random minimum et maximum.
            rand = Math.floor(Math.random() * (max - min) + min)

            //j'appel mon image enfant de ma div et je recupere le rand, en css je change la visibilité de mon image.
            $('.hole').children('.img').eq(rand).css('visibility', 'visible')
            
        };

        //je setinterval ma fonction show avec 1000ms.
        setInterval(show, 1500);
        
        
        $('.hole').children('.img').click(function() {
            compteur++;
        $('.hole').children('.img').css('visibility', 'hidden')
        sound.play();
        $('#score').text(compteur);
            console.log(compteur);
        });

    });


