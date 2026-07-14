class RubiksCube3D {


constructor(options={}){

this.container =
document.querySelector(options.container);


this.size =
options.size || 320;


this.speed =
options.speed || 0.08;


this.rotationX=-25;

this.rotationY=-35;


this.dragging=false;


this.lastX=0;

this.lastY=0;


this.velocityX=0;

this.velocityY=0;


this.init();

}



init(){

this.createCube();

this.events();

this.animate();

}




createCube(){


this.container.innerHTML="";


this.container.style.setProperty(
"--cube-size",
this.size+"px"
);



const scene =
document.createElement("div");

scene.className="rubiks-scene";



const wrapper =
document.createElement("div");

wrapper.className=
"rubiks-wrapper";



const cube =
document.createElement("div");

cube.className=
"rubiks-cube";



this.wrapper=wrapper;



const colors=[
"red",
"orange",
"blue",
"green",
"yellow",
"white"
];



const step=52;



for(let x=-1;x<=1;x++){

for(let y=-1;y<=1;y++){

for(let z=-1;z<=1;z++){



let cubie=
document.createElement("div");


cubie.className="cubie";



cubie.style.transform=
`
translate3d(
${x*step}px,
${y*step}px,
${z*step}px
)
`;



[
"front",
"back",
"right",
"left",
"top",
"bottom"

].forEach(face=>{


let div=
document.createElement("div");


div.className=
"face "+face;



// uniquement les faces extérieures

let visible = false;


if(face==="front" && z===1)
    visible=true;

if(face==="back" && z===-1)
    visible=true;

if(face==="right" && x===1)
    visible=true;

if(face==="left" && x===-1)
    visible=true;

if(face==="top" && y===1)
    visible=true;

if(face==="bottom" && y===-1)
    visible=true;



if(visible){

    div.classList.add(
        colors[
            Math.floor(
                Math.random()*colors.length
            )
        ]
    );

}
else{

    div.style.background="#111";

}



cubie.appendChild(div);



});



cube.appendChild(cubie);


}

}

}



wrapper.appendChild(cube);

scene.appendChild(wrapper);


this.container.appendChild(scene);



}





events(){



this.container.addEventListener(
"pointerdown",
e=>{

this.dragging=true;

this.lastX=e.clientX;

this.lastY=e.clientY;

});



window.addEventListener(
"pointerup",
()=>{

this.dragging=false;

});



this.container.addEventListener(
"pointermove",
e=>{


if(!this.dragging)
return;


let dx=
e.clientX-this.lastX;


let dy=
e.clientY-this.lastY;


this.rotationY+=dx*.5;

this.rotationX-=dy*.5;



this.lastX=e.clientX;

this.lastY=e.clientY;



});



}





animate(){



if(!this.dragging){

this.rotationY+=this.speed;

}



let float =
Math.sin(Date.now()*0.0015)*5;



this.wrapper.style.transform=
`
translateY(${float}px)

rotateX(${this.rotationX}deg)

rotateY(${this.rotationY}deg)
`;



requestAnimationFrame(
()=>this.animate()
);



}



}