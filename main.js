const dropdown = document.querySelector('.dropdown');
const dropdownHam = document.querySelector('.dropdown_ham'); // Use querySelector for a single element
const dropdownClose = document.querySelector('.dropdown_close');

dropdownHam.addEventListener('click', () => {
    dropdown.style.display = 'block';
      setTimeout(() => {
        dropdown.classList.add('show');
    }, 10); 
    document.body.classList.add('no-scroll');
});

dropdownClose.addEventListener('click', () => {
    dropdown.classList.remove('show');
        setTimeout(() => {
            dropdown.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 500);
});

