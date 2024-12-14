   // Using async/await for better readability
   let list = document.querySelector(".list")
   async function fetchData() {
       try {
           const response = await fetch("./data.json");
           const data = await response.json();
           console.log(data); 
           data.forEach((d)=>{
               list.innerHTML+=`   <div class="profile">
           <img src=${d.img} class="image" alt="">
           <div class="name">${d.name}</div>`
           })
       } catch (error) {
           console.error('There was a problem with the fetch operation:', error);
       }
   }

   fetchData();