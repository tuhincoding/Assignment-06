
    const buttonSurch = document.getElementById('surchbuton')
     const apiURL = `https://fakestoreapi.com/products`
     function productsDiscrib(){
        fetch(apiURL)
        .then (Response => Response.json())
        .then (data => 
            data.forEach(product => {
                console.log(product)
                const productAll =`

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap flex-row">
                    
                        <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="${product.image}">
                        <div class="flex flex-col text-center w-full">
                            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">${product.title}</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base h-[100px]" style="overflow: scroll; ">${product.description
                            }.</p>
                        </div>
                        <div class="flex mx-auto flex-wrap mb-20">
                        
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1 text-[#454545]" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                </svg>$  <span class="ml-1">${product.price}</span>
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span class="mr-2">${product.id}</span><svg class="w-4 h-4 mr-1 text-[#F5D426]" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path
                                    d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
                                ></path>
                                </svg>
                            </span>
                            
                        </div>
                    </div>
              </section>
    
                `
                buttonSurch.innerHTML += productAll;
            })
            )
     }




     const buttonSurch1 = document.getElementById('showProducts')
     const apiURL1 = `https://fakestoreapi.com/products`
     function productsDiscrib1(){
        fetch(apiURL1)
        .then (Response => Response.json())
        .then (data => 
            data.slice(0,3).forEach(product1 => {
                console.log(product1)
                const productAll1 =`

                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap flex-row">
                    
                        <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="${product1.image}">
                        <div class="flex flex-col text-center w-full">
                            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">${product1.title}</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base h-[100px]" style="overflow: scroll; ">${product1.description
                            }.</p>
                        </div>
                        <div class="flex mx-auto flex-wrap mb-20">
                        
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1 text-[#454545]" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                </svg>$  <span class="ml-1">${product1.price}</span>
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span class="mr-2">${product1.id}</span><svg class="w-4 h-4 mr-1 text-[#F5D426]" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path
                                    d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
                                ></path>
                                </svg>
                            </span>
                            
                        </div>
                    </div>
              </section>
    
                `
                buttonSurch1.innerHTML += productAll1;
            })
            )
     }
     productsDiscrib1()



     
    //  second
    const buttonSurch2 = document.getElementById('colar')
     const apiURL2 = `https://api.escuelajs.co/api/v1/products`
     function productsDiscrib2(){
        fetch(apiURL2)
        .then (Response => Response.json())
        .then (data => 
            data.forEach(product2 => {
                console.log(product2)
                const productAll2 =`

                <section class="text-[black] body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap flex-row">
                    
                        <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="${product2.images}">
                        <div class="flex flex-col text-center w-full">
                            <h1 class="text-xl font-medium title-font mb-4 text-gray-900">${product2.title}</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base h-[100px]" style="overflow: scroll; ">${product2.description
                            }.</p>
                        </div>
                        <div class="flex mx-auto flex-wrap mb-20">
                        
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1 text-[#454545]" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                </svg>$  <span class="ml-1">${product2.price}</span>
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <span class="mr-2">${product2.id}</span><svg class="w-4 h-4 mr-1 text-[#F5D426]" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path
                                    d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
                                ></path>
                                </svg>
                            </span>
                            
                        </div>
                    </div>
              </section>
    
                `
                buttonSurch2.innerHTML += productAll2;
            })
            )
     }
     productsDiscrib2()






     const countDownData = new Date("febuaray 20,2024 ,00:00:00").getTime();
     let daysHoursMinit = setInterval(function(){
        let now = new Date().getTime();
        let t = countDownData - now;

        
 
                // Getting values of days,hours,minutes, seconds
                let days = Math.floor(
                    t / (1000 * 60 * 60 * 24)
                );
                let hours = Math.floor(
                    (t % (1000 * 60 * 60 * 24)) /
                        (1000 * 60 * 60)
                );
                let minutes = Math.floor(
                    (t % (1000 * 60 * 60)) / (1000 * 60)
                );
                let seconds = Math.floor(
                    (t % (1000 * 60)) / 1000
                );

                document.getElementById("days").innerHTML = days;
                document.getElementById ("hours").innerHTML = hours;
                document.getElementById("minit").innerHTML =minutes;
                document.getElementById("second").innerHTML= seconds;
            if(t<0){
            clearInterval(daysHoursMinit)
            document.getElementById("days").innerHTML = "00"
            document.getElementById ("hours").innerHTML = "00"
            document.getElementById("minit").innerHTML ="00"
            document.getElementById("second").innerHTML= "00"
        }
     },1000)




     



     


     


   
     