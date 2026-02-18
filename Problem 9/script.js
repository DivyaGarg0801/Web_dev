const changecolor={
    color(){
        c=["#aaa7cc", "#f8ad9d", "#fdf1cb", "#f8ad9d", "#fdf1cb"];
        document.body.style.backgroundColor = c[Math.floor(Math.random() * c.length)];
    }
}
