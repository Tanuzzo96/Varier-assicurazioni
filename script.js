const loginBtn = document.querySelectorAll(".login-btn");
const loginOverlay = document.getElementById('overlay')
const closeFormBtn = document.getElementById('close-log-btn')


const formInputsContainer = document.getElementById('form-inputs')
const formBtns = document.querySelectorAll('.form-btn');
const plate = document.getElementById('kind')


loginBtn.forEach(btn => {
 btn.addEventListener('click', () => {
 loginOverlay.style.display = 'block'
 })
})

closeFormBtn.addEventListener('click', () => {
    loginOverlay.style.display = 'none'
})
loginOverlay.addEventListener('click', () => {
    loginOverlay.style.display = 'none'
})

formBtns.forEach( btn => {
     
    btn.addEventListener('click', () => {
        formBtns.forEach(btn => {
            btn.setAttribute('aria-selected', 'false');
            
        })

        if(btn.innerText === 'Salute' || btn.innerText === 'Casa'){
              btn.setAttribute('aria-selected', 'true')
             formInputsContainer.style.display = 'block'
         formInputsContainer.innerHTML = `<button type="submit" class="form-btn tre green-btns">Fai un preventivo ></button>`;
        } else {
             formInputsContainer.style.display = 'grid'
            formInputsContainer.innerHTML = `<label for="targa">Targa <span id="kind">auto</span></label>
                <input type="text" placeholder="Targa" class="form-input"> 
                <label for="data-nascita">Data di nascita del proprietario</label>
                <input type="text" placeholder="Data di nascita del proprietario" class="form-input">
                
                <a href="#">Non ricordo la targa</a>
                <button type="submit" class="form-btn due green-btns">Fai un preventivo ></button>`
        plate.innerText = btn.innerText
        btn.setAttribute('aria-selected', 'true')
        }
    })
})