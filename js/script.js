window.addEventListener("load", ()=>{

    var redes = document.querySelectorAll(".redes img");
    
    redes.forEach(element =>{
        element.addEventListener("mouseover", event =>{
            console.log("click");
            if (event.target == redes[0]){
                redes[0].src = "../imagenes/iconos/IGnoodle.png"
            }
            if (event.target == redes[1]){
                redes[1].src = "../imagenes/iconos/F2d.png"
            }
            if (event.target == redes[2]){
                redes[2].src = "../imagenes/iconos/YTrussel.png"
            }
            if (event.target == redes[3]){
                redes[3].src = "../imagenes/iconos/Tmurdock.png"
            }
        });
        element.addEventListener("mouseout", event =>{
            console.log("click");
            if (event.target == redes[0]){
                redes[0].src =  "../imagenes/iconos/Insta.png"
            }
            if (event.target == redes[1]){
                redes[1].src = "../imagenes/iconos/face.png"
            }
            if (event.target == redes[2]){
                redes[2].src = "../imagenes/iconos/youtube.png"
            }
            if (event.target == redes[3]){
                redes[3].src = "../imagenes/iconos/Twit.png"
            }
        });
    });
    

});