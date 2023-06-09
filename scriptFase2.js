const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "https://images.squarespace-cdn.com/content/v1/59a1bc2fa803bb46c79b860c/1521521195299-2XUPLE1EQQR3HZQ5UW35/Things+Fall+Apart+cover.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "https://m.media-amazon.com/images/I/71Ad4CektEL.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "https://m.media-amazon.com/images/I/91vybHeMSxL._AC_UF1000,1000_QL80_.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "https://m.media-amazon.com/images/I/61JsISaVN1L._SX498_BO1,204,203,200_.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "https://m.media-amazon.com/images/I/51+gFh0FW1L.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }];

    
    
    // * FASE 2:
    const biblio = document.querySelector('.biblio'); 
    
    for (i = 0; i < books.length; i++) {
        let textAuthor = document.createTextNode(`Autor : ${books[i].author}`);
        let imagen = document.createElement('img');
        imagen.src = books[i].imageLink;  
        let textCountry = document.createTextNode(`País : ${books[i].country}`);
        let textLanguage = document.createTextNode(`Idioma : ${books[i].language}`);
        let textPages = document.createTextNode(`Páginas : ${books[i].pages}`);
        let textTitle = document.createTextNode(`${books[i].title}`);
        let textYear = document.createTextNode(`Año : ${books[i].year}`);
        
        const bookCard = `
        <article class="bookCard" > 
        <p> ${ textAuthor } </p>
        <p> ${ textCountry } </p>
        <p> ${ textLanguage } </p>
        <p> ${ textPages } </p>
        <p> ${ textTitle } </p>
        <p> ${ textYear } </p>
        </article>  `
        
        biblio.appendChild(bookCard)
    }
    
    
    const h1Tag = document.createElement('h1');
    const header = document.querySelector('header');
    h1Tag.textContent = 'Biblioteca Molona';
    header.appendChild(h1Tag);