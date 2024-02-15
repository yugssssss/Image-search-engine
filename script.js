let url= "https://api.unsplash.com/search/photos?page=1&per_page=30&query="

let search= document.querySelector("#search");
let searchbtn= document.querySelector("#searchbtn");
let r1= document.querySelector(".r1");
let main_container= document.querySelector(".photos");
let show= document.querySelector("#showmore");

var count = 0;
var data='';

searchbtn.addEventListener("click", async ()=>{
   
    let val= search.value;
    let response= await fetch(url+val+"&client_id=n5B6aC0b0GjF-GzZWiydxmOsbHpk_vzxo65RybD_92w");
    data=  await response.json();
    console.log(data);
    
    pics();
   
    
})


function pics(){
   
    show.style.display="block";
    let  r2 = document.createElement("div");
    let r3 = document.createElement("div");
    for(let i=0; i<9; i++)
    {
        let img= document.createElement("img");
        img.src= data.results[i].urls.regular;
        img.classList="img";
        r1.appendChild(img);
        count++;

        if(count > 3)
        {
            r2.classList="r1";
            main_container.appendChild(r2);

            r2.appendChild(img);
        }

        if(count > 6)
         {
            r3.classList="r1";
            main_container.appendChild(r3);
             r3.appendChild(img)   
         }
    }
}

var flag=0;
show.addEventListener("click",()=>{
if(flag === 0)
{
    flag=1;
    let r4= document.createElement("div");
    let  r5 = document.createElement("div");
    let r6 = document.createElement("div");
    
    for(let i=9; i<18; i++)
    {
        let img= document.createElement("img");
        img.src= data.results[i].urls.regular;
        img.classList="img";
        r4.appendChild(img);
        r4.classList="r1";
        main_container.appendChild(r4);
        count++;
        
        if(count > 12)
        {
            r5.classList="r1";
            main_container.appendChild(r5);
    
            r5.appendChild(img);
        }
        
        if(count > 15)
        {
            r6.classList="r1";
            main_container.appendChild(r6);
            r6.appendChild(img) 
        }
    }
}
        
else if(flag === 1)
        {
            
            let r7= document.createElement("div");
            let r8= document.createElement("div");
            let r9= document.createElement("div");
            
            
            for(let i=18; i<27 ; i++)
            {
                let img= document.createElement("img");
                img.src= data.results[i].urls.regular;
                img.classList="img";
                r7.classList="r1";
                main_container.appendChild(r7);
                r7.appendChild(img)
                count++;

                    if(count > 21)
                    {
                        r8.classList="r1";
                        main_container.appendChild(r8);
                        r8.appendChild(img)
                    }
                    if(count > 24)
                    {
                        r9.classList="r1";
                        main_container.appendChild(r9);
                        r9.appendChild(img)
                    }
            }
            show.style.display="none";
        }
        

         
    
})