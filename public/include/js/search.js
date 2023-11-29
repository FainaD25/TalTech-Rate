document.addEventListener('DOMContentLoaded', function() {
    const fakeResults = [
        { title: 'Sissejuhatus infotehnoloogiasse' },
        { title: 'Diskreetne matemaatika' },
        { title: 'Andmestruktuurid ja Algoritmid' },
        { title: 'Veebirakenduse projekt' },
        { title: 'Kõrgem matemaatika' },
        { title: 'Enesejuhtimine' },
        { title: 'Avalik esinemine' },
        { title: 'Programmeerimse algkursus' },
        { title: 'Programmeerimise täiendkursus' },
        { title: 'Fundamentals to Networking' },
        { title: 'Ago Luberg' },
        { title: 'Organisatsioonipsühholoogia alused' },
        { title: 'Tanel Tammet' },
        { title: 'Matemaatika täiendkursus' },
        { title: 'Rahandus' },
        { title: 'Mobiilirakenduste Arendamine' },
        { title: 'Infoturve' },
        { title: 'Analüütika' },
        { title: 'Makroökonoomika' },
        { title: 'Veebidisain' },
        { title: 'Eraisiku rahandus' },
        { title: 'Füüsika täiendusõpe' },
        { title: 'Biokeemia' },
        { title: 'Tehisintelekti alused' },
    ];

    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    function displayResults(filter = '') {
        resultsContainer.innerHTML = ''; // Clear current results
        fakeResults.forEach(result => {
            if (result.title.toLowerCase().includes(filter.toLowerCase())) {
                const resultElement = document.createElement('div');
                resultElement.innerHTML = `<h2>${result.title}</h2>`;
                resultsContainer.appendChild(resultElement);
            }
        });

        if (resultsContainer.innerHTML === '') {
            resultsContainer.innerHTML = '<div>No results found</div>';
        }
    }

    // Populate results on page load
    displayResults();

    searchInput.addEventListener('input', () => {
        displayResults(searchInput.value);
    });
});
