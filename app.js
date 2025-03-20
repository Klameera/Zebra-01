function showPage(page) {
            let content = {
                'home': '<h2>Home</h2><p>Lorem ipsum dolor sit amet...</p>',
                'seite1': '<h2>Seite 1</h2><p>Dies ist Seite 1 mit Lückenfüllertext.</p>',
                'seite2': '<h2>Seite 2</h2><p>Noch mehr Inhalt für Seite 2...</p>',
                'seite3': '<h2>Seite 3</h2><p>Hier könnte dein Text stehen!</p>'
            };
            document.getElementById('main-content').innerHTML = content[page] || '<p>Seite nicht gefunden.</p>';
        }
