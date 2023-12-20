document.addEventListener('DOMContentLoaded', function() {
    const fakeResults = [
        { title: 'Sissejuhatus infotehnoloogiasse ITI0101' },
        { title: 'Robotite programmeerimine ITI0201' },
        { title: 'Programmeerimise algkursus ITI0102' },
        { title: 'Programmeerimise põhikursus ITI0202' },
        { title: 'Algoritmid ja andmestruktuurid ITI0204' },
        { title: 'Andmebaasid I ITI0206' },
        { title: 'Tehisintellekti ja masinõppe alused ITI0210' },
        { title: 'Andmekaevandamine ITI0217' },
        { title: 'Arvutid IAX0043' },
        { title: 'Operatsioonisüsteemid ja nende haldamine ICA0001' },
        { title: 'Arvutivõrkude alused ICA0019' },
        { title: 'Küberturbe alused ITI0216' },
        { title: 'Bakalaureusetöö seminar ITI0218' },
        { title: 'Ettevõtluse alused TMJ0130' },
        { title: 'Diskreetne matemaatika IAX0010' },
        { title: 'Diskreetne matemaatika II ITT0030' },
        { title: 'Loodusteaduste alused ja säästlik areng YFX0060' },
        { title: 'Tõenäosusteooria ja matemaatiline statistika YMX0030' },
        { title: 'Kõrgem matemaatika I YMX0221' },
        { title: 'Erialatutvustus ITI0105' },
        { title: 'Tarkvaraarenduse projekt ITI0301' },
        { title: 'Veebirakenduse projekt ITI0302' },
        { title: 'Finantsarvestuse alused TAF0070' },
        { title: 'Rahanduse alused TER0440' },
        { title: 'Protsessid majanduskeskkonnas TET0150' },
        { title: 'Ettevõtluse alused TMJ0140' },
        { title: 'Tarkvara arhitektuur ja disain IDU1550' },
        { title: 'IT juhtimise ja ülalhoiu alused ITB1708' },
        { title: 'Info- ja küberturbe alused ITB1711' },
        { title: 'Infosüsteemid ja nende sotsiaalsed ning majanduslikud aspektid ITB1801' },
        { title: 'Infosüsteemide arendamine I: baasoskused ITB2201' },
        { title: 'Infosüsteemide arendamise meeskonnaprojekt: tellimus ITB1706' },
        { title: 'Insenerigraafika EMT0200' },
        { title: 'Küberelektroonika ISC0100' },
        { title: 'Hüdraulika ja pneumaatika MES0085' },
        { title: 'Masinamehaanika MES0235' },
        { title: 'Tugevusõpetus MES0240' },
        { title: 'Tehnomaterjalid MTM0010' },
        { title: 'Konstruktsioonimaterjalide tehnoloogia MTT0010' },
        { title: 'Ettevõtluse alused TMJ0130' },
        { title: 'Eraisiku rahandus TER0520' },
        { title: 'Keskkonnakaitse ja säästev areng YTG0060' },
        { title: 'Akadeemiline suhtlus inglise keeles HLI0070' },
        { title: 'Klassikaline mehaanika EMT0020' },
    ];

    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');


    function displayResults(filter = '') {
        resultsContainer.innerHTML = ''; // Clear current results
        fakeResults.forEach(result => {
            if (result.title.toLowerCase().includes(filter.toLowerCase())) {
                const resultElement = document.createElement('div');
                resultElement.innerHTML = `<h2>${result.title}</h2>`;
                resultElement.style.cursor = 'pointer'; // Make it look clickable
                resultElement.onclick = function() {
                    window.location.href = `subject.html`;
                };
                resultsContainer.appendChild(resultElement);
            }
        });

        if (resultsContainer.innerHTML === '') {
            resultsContainer.innerHTML = '<div>Tulemusi ei leitud</div>';
        }
    }

    // Populate results on page load
    displayResults();

    searchInput.addEventListener('input', () => {
        displayResults(searchInput.value);
    });
});
