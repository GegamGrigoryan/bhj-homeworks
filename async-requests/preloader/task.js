



const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');

const items = document.querySelector("#items");


xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === xhr.DONE) {
        const get = JSON.parse(xhr.response)
        let valute = get.response.Valute;

        for (let key in valute) {
            let charCode = valute[key].CharCode;
            let value = valute[key].Value;

            items.insertAdjacentHTML('beforebegin', `
            <div class="item">
            <div class="item__code">
                    ${charCode} 
                </div>
                <div class="item__value">
                    ${value} 
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>
         `)

        }



        loader.classList.remove('loader_active');
    }

});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send()