$(function(){
    setTimeout(() => {
        $("#myModal").modal();
    }, 100);
    

    const cards = $('.card');
    const a = 5 ;
    const angle = [a,-a] ;
    
    cards.mouseenter(function(){
        for(let i=0 ; i < cards.length ; i++){
            if (this === cards[i]){
                if(this.dataset.angle)
                {
                    this.dataset.angle = -1 * parseInt(this.dataset.angle);
                    $(this).css("transform", `rotate(${this.dataset.angle}deg)`);
                }
                else{
                    newAngle = angle[Math.floor(Math.random() * angle.length)];
                    this.dataset.angle = newAngle;
                    $(this).css("transform", `rotate(${newAngle}deg)`);
                }
            }
        }
    });
    cards.mouseleave(function(){
        for(let i=0 ; i < cards.length ; i++){
            if (this === cards[i]){
                $(this).css("transform", `rotate(0deg)`).css("transform","scale(.8)");
            }
        }
    });
});