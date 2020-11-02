const canvas=document.querySelector("#canvas");
const ctx=canvas.getContext('2d');

let img=new Image();
let fileName='';
  
const downloadBtn=document.querySelector("#download-btn");
const uploadFile=document.querySelector("#upload-file");
const removeBtn=document.querySelector("#revert-btn");


document.addEventListener('click',(e)=>{
 if(e.target.classList.contains('filter-btn')){
    if(e.target.classList.contains('brightness-add')){
        Caman('#canvas',img,function(){
            this.brightness(5).render();
        })
     }else if(e.target.classList.contains('brightness-remove')){
         Caman("#canvas",img,function(){
             this.brightness(-5).render();
         })
     }
     else if(e.target.classList.contains('contrast-add')){
        Caman("#canvas",img,function(){
            this.contrast(5).render();
        })
    }
    else if(e.target.classList.contains('contrast-remove')){
        Caman("#canvas",img,function(){
            this.contrast(-5).render();
        })
    }
    else if(e.target.classList.contains('saturation-add')){
        Caman("#canvas",img,function(){
            this.saturation(5).render();
        })
    }
    else if(e.target.classList.contains('saturation-remove')){
        Caman("#canvas",img,function(){
            this.saturation(-5).render();
        })
    }
    else if(e.target.classList.contains('vibrance-add')){
        Caman("#canvas",img,function(){
            this.vibrance(5).render();
        })
    }
    else if(e.target.classList.contains('vibrance-remove')){
        Caman("#canvas",img,function(){
            this.vibrance(-5).render();
        });
    }
    else if(e.target.classList.contains('vintage-add')){
        Caman("#canvas",img,function(){
            this.vintage().render();
        });
    }
    else if(e.target.classList.contains('lomo-add')){
        Caman("#canvas",img,function(){
            this.lomo().render();
        });
    }
    else if(e.target.classList.contains('clarity-add')){
        Caman("#canvas",img,function(){
            this.clarity().render();
        });
    }
    else if(e.target.classList.contains('sincity-add')){
        Caman("#canvas",img,function(){
            this.sinCity().render();
        });
    }
    else if(e.target.classList.contains('crossprocess-add')){
        Caman("#canvas",img,function(){
            this.crossProcess().render();
        });
    }
    else if(e.target.classList.contains('pinhole-add')){
        Caman("#canvas",img,function(){
            this.pinhole().render();
        });
    }
    else if(e.target.classList.contains('nostalgia-add')){
        Caman("#canvas",img,function(){
            this.nostalgia().render();
        });
    }
    else if(e.target.classList.contains('hermajesty-add')){
        Caman("#canvas",img,function(){
            this.herMajesty().render();
        });
    }
 }
});

removeBtn.addEventListener('click',()=>{
    Caman("#canvas",img,function(){
        this.revert();
    })
})



uploadFile.addEventListener('change',()=>{
 const file=document.querySelector('#upload-file').files[0];

 const reader=new FileReader();
 if(file){
     fileName=file.name; 

     reader.readAsDataURL(file);
 }

reader.addEventListener('load',()=>{
    img=new Image();
    img.src=reader.result;

  img.onload=function(){
      canvas.width=img.width;
      canvas.height=img.height;
      ctx.drawImage(img,0,0,img.height,img.width);
      canvas.removeAttribute('data-caman-id');
  }

},false);

});

downloadBtn.addEventListener('click',(e)=>{

    const fileExtension=fileName.slice(-4);

     let newFile;
     if(fileExtension==='.jpg' || fileExtension===".png"){
         newFile=fileName.substring(0,fileName.length-4)+'-edited.jpg';
     }
      download(canvas,newFile);
})

function download(canvas,fileName){
let e;
const link=document.createElement('a');

link.href=canvas.toDataURL('img/jpeg',0.8);
link.download=fileName;
e=new MouseEvent('click');
link.dispatchEvent(e);
}