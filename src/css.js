const string = `
*{box-sizing: border-box;}
*::before{box-sizing: border-box;}
*::after{box-sizing: border-box;}

body{
    min-height: 100vh;
}
.skin{
    background-color: #FFE500;
    position: relative;
    /* height: 100vh; */
}
.nose{
    position: relative;
    top: 200px;
    left: 50%;
    margin-left: -10px;
}
@keyframes wave{
    0%{
        transform: rotate(0deg );
    }
    33%{
        transform: rotate(1deg );
    }
    66%{
        transform: rotate(-1deg );
    }
    100%{
        transform: rotate(0deg );
    }

}
.nose:hover{
    animation: wave 200ms infinite linear;
}
.san{
    position: absolute;
    border: 10px solid #000;
    width: 0;
    height: 0;
    border-color:#000 transparent transparent transparent ;
    position: absolute;

}
.halfc{
    position: absolute;
    width: 20px;
    height:6px;
    border: 1px solid #000;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: #000;
}
.eye{
    border: 2px solid #000;
    background-color: #2e2e2e;
    width: 50px;
    height: 50px;
    position: absolute;
    top:170px;
    left: 50%;
    margin-left: -25px;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: 2px;
}
.eye.left{
    transform: translateX(-120px);
}
.eye.right{
    transform: translateX(120px);
}
.mouth{
    /* border: 1px solid #000; */
    width: 200px;
    height: 300px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top:236px
}
.mouth .up .lip{
    border: 4px solid #000;
    width: 100px;
    height: 30px;
    background-color: #FFE500;
    border-top-color: transparent;}
   
.mouth .up .lip.left{
    border-radius: 0 0 0 85%;
    transform:rotate(-20deg);
    border-right-color: transparent; 
}
.mouth .up .lip.right{
    margin-left: 94px;
    margin-top: -30px;
    border-radius: 0 0 85% 0;
    transform: rotate(20deg);
    border-left-color: transparent; 
}
.mouth .down{
    /* border: 1px solid #00f; */
    height: 190px;
    position: absolute;
    top: 11px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid #000;
    position:absolute;
    bottom: 0;
    left: 50%;
    margin-left: -68px;
    width: 136px;
    height: 420px;
    border-radius:296px/903px;
    background-color: #9B000A;
    z-index: -88;
    overflow: hidden;
}
.mouth .down .yuan1 .tongue{
    /* border: 2px solid #000; */
    width: 200px;
    height: 150px;
    position: absolute;
    bottom: -3px;
    left: 50%;
    margin-left: -100px;
    border-radius: 55%;
    background-color: #FF4760;
}
.face{
    position: absolute;
    width: 88px;
    height: 88px;
    top: 280px;
    left: 50%;
    margin-left: -44px;
    border: 2px solid #333;
    background-color: red;
    border-radius: 50%;
}
.face.left{
    transform: translateX(-170px);
}
.face.right{
    transform: translateX(170px);
}`

export default string;