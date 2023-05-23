class keywordCard extends HTMLElement {
    constructor() {
      super(); // Inheret everything from HTMLElement

      //document.addEventListener()
  
      // Attach the shadow DOM and append this markup / stlying inside
      this.attachShadow({ mode: 'open' });

      console.log("Keyword cards")

      //createCard()
     //  createCard()

      this.shadowRoot.append(document.createElement('style'), createCard());
     // this.shadowRoot.append(document.createElement('style'), createCard());

      function createCard() {
        const divWrapper = document.createElement('div');
        divWrapper.style.width = '70%'

        const img = document.createElement('div')
        const a = document.createElement('a')
        a.innerHTML = `
          <a href="#"> 
              <img src="../img/boxed_water_unsplash.jpg" alt="water" height=100px/>
          </a>
      `;

        // img.style.height = '50%'
        // img.style.width = '50%'
        // img.classList.add("card-img-top")

        const cardBody = document.createElement('div') //.classList.add("card-body text-center")
        const title = document.createElement('h5') //.classList.add('card-title')
        title.innerHTML = "Alzheimer's Disease" // insert given text
        const description = document.createElement('p') //.classList.add('card-text')
        // insert given description
        description.innerHTML = "Alzheimer's disease is a brain disorder that slowly destroys memory and thinking skills and, eventually, the ability to carry out the simplest tasks"
        const button = document.createElement('a') //.classList.add('btn btn-primary')
        // button links to nothing at the moment
        button.innerHTML = 'Read more'
        button.addEventListener('click',function(){
            window.location.href = "../articlesList.html"
        });
        // must add an id to the divWrapper to identify a particular keyword/subject

        cardBody.appendChild(title)
        cardBody.appendChild(description)
        cardBody.appendChild(button)

        divWrapper.appendChild(a)
        divWrapper.appendChild(cardBody)

        return divWrapper
      }
      
    }
}
customElements.define('keyword-card', keywordCard);
  