// Funktion zum Laden der Seiten
function loadPage(page) {
    const contentDiv = document.getElementById("page-content");

    let pageContent = "";

    switch (page) {
        case 'home':
            pageContent = "<h2>Home</h2><p>Willkommen auf der Startseite!</p>";
            break;
        case 'stundenplan':
            pageContent = `<h1>Interaktiver Stundenplan</h1>
<table id="stundenplan">
<thead>
<tr>
<th>Zeit</th>
<th>Montag</th>
<th>Dienstag</th>
<th>Mittwoch</th>
<th>Donnerstag</th>
<th>Freitag</th>
</tr>
</thead>
<tbody>
<tr>
<td><input type="text" value="07:35 - 09:20"></td>
<td><input type="text" placeholder="HU OS"></td>
<td><input type="text" placeholder="HU OS"></td>
<td><input type="text" placeholder="HU OS"></td>
<td><input type="text" placeholder="HU OS"></td>
<td><input type="text" placeholder="HU OS"></td>
</tr>
<tr>
<td><input type="text" value="09:40 - 10:25"></td>
<td><input type="text" placeholder="Mathe"></td>
<td><input type="text" placeholder="Französisch"></td>
<td><input type="text" placeholder="English"></td>
<td><input type="text" placeholder="Mathe"></td>
<td><input type="text" placeholder="Ethik"></td>
</tr>
<tr>
<td><input type="text" value="10:30 - 11:15"></td>
<td><input type="text" placeholder="English"></td>
<td><input type="text" placeholder="Mathe"></td>
<td><input type="text" placeholder="Deutsch"></td>
<td><input type="text" placeholder="English"></td>
<td><input type="text" placeholder="HKU"></td>
</tr>
<tr>
<td><input type="text" value="11:25 - 12:10"></td>
<td><input type="text" placeholder="Französisch"></td>
<td><input type="text" placeholder="HKL"></td>
<td><input type="text" placeholder="Französisch"></td>
<td><input type="text" placeholder="Französisch"></td>
<td><input type="text" placeholder="HKU"></td>
</tr>
<tr>
<td><input type="text" value="12:15 - 13:00"></td>
<td><input type="text" placeholder="Französisch"></td>
<td><input type="text" placeholder="HKL"></td>
<td><input type="text" placeholder="Französisch"></td>
<td><input type="text" placeholder="Pause"></td>
<td><input type="text" placeholder="English"></td>
</tr>
<tr>
<td><input type="text" value="13:00 - 13:45"></td>
<td><input type="text" placeholder="HKL"></td>
<td><input type="text" placeholder="Pause"></td>
<td><input type="text" placeholder="Pause"></td>
<td><input type="text" placeholder="Deutsch"></td>
<td><input type="text" placeholder=""></td>
</tr>
<tr>
<td><input type="text" value="13:50 - 14:35"></td>
<td><input type="text" placeholder="HKL"></td>
<td><input type="text" placeholder=""></td>
<td><input type="text" placeholder="Sport Jungs"></td>
<td><input type="text" placeholder="Musik"></td>
<td><input type="text" placeholder=""></td>
</tr>
<tr>
<td><input type="text" value="14:35 - 15:20"></td>
<td><input type="text" placeholder="Sport Mädchen"></td>
<td><input type="text" placeholder=""></td>
<td><input type="text" placeholder="Sport Jungs"></td>
<td><input type="text" placeholder=""></td>
<td><input type="text" placeholder=""></td>
</tr>
<tr>
<td><input type="text" value="15:20 - 16:05"></td>
<td><input type="text" placeholder="Sport Mädchen"></td>
<td><input type="text" placeholder=""></td>
<td><input type="text" placeholder=""></td>
<td><input type="text" placeholder=""></td>
<td><input type="text" placeholder=""></td>";`
            break;

        case 'speiseplan':
            pageContent = `
                <div class="tafel">
                    <div class="verzierung tl"></div>
                    <div class="verzierung tr"></div>
                    <div class="verzierung bl"></div>
                    <div class="verzierung br"></div>
        
                    <h1>Mensaplan (Montag - Donnerstag)</h1>
                    <table>
                        <tr>
                            <th>Wochentag</th>
                            <th>Mittagessen</th>
                        </tr>
                        <tr>
                            <td>Montag</td>
                            <td>Spaghetti Bolognese</td>
                        </tr>
                        <tr>
                            <td>Dienstag</td>
                            <td>Hähnchenbrust mit Reis</td>
                        </tr>
                        <tr>
                            <td>Mittwoch</td>
                            <td>Vegetarische Lasagne</td>
                        </tr>
                        <tr>
                            <td>Donnerstag</td>
                            <td>Rindersteak mit Kartoffeln</td>
                        </tr>
                    </table>
                </div>`;
            break;
        
        case 'vertretungsplan':
            pageContent = `<div class="table-container">
            <table>
                <tr>
                    <th>Uhrzeit</th>
                    <th>Klasse</th>
                    <th class="wide-column">Krank</th>
                    <th class="wide-column">Vertretung</th>
                </tr>
                <tr><td>7:35 - 9:20</td><td></td><td></td><td></td></tr>
                <tr><td>9:40 - 10:25</td><td></td><td></td><td></td></tr>
                <tr><td>10:30 - 11:15</td><td></td><td></td><td></td></tr>
                <tr><td>11:25 - 12:10</td><td></td><td></td><td></td></tr>
                <tr><td>12:15 - 13:00</td><td></td><td></td><td></td></tr>
                <tr><td>13:00 - 13:45</td><td></td><td></td><td></td></tr>
                <tr><td>13:50 - 14:35</td><td></td><td></td><td></td></tr>
                <tr><td>14:35 - 15:20</td><td></td><td></td><td></td></tr>
                <tr><td>15:20 - 16:05</td><td></td><td></td><td></td></tr>
            </table>
        </div>;`
            break;

        case 'einstellungen':
            pageContent = `<div id="startseite">
        <h1>Gebe hier an, in welcher Klasse du bist<br>(diese Einstellung kann später wieder geändert werden)</h1>
        <div class="button-container">
            <button onclick="showKlasse(9)">9</button>
            <button onclick="showKlasse(10)">10</button>
            <button onclick="showKlasse(11)">11</button>
            <button onclick="showKlasse(12)">12</button>
            <button onclick="showKlasse(13)">13</button>
        </div>
    </div>
    
    <div id="klasse9" style="display: none; flex-direction: column; align-items: center;">
        <h1>Willkommen in Klasse 9</h1>
        <div class="button-container">
            <button>Essensplan</button>
            <button>Kalender</button>
            <button>Epochenplan</button>
            <button>Vertretungsplan</button>
            <button>Stundenplan</button>
            <button>Spiel</button>
        </div>
        <button onclick="showStartseite()" style="margin-top: 20px; background-color: red;">Home</button>
    </div>
    
    <div id="klasse10" style="display: none; flex-direction: column; align-items: center;">
        <h1>Willkommen in Klasse 10</h1>
        <div class="button-container">
            <button>Essensplan</button>
            <button>Kalender</button>
            <button>Epochenplan</button>
            <button>Vertretungsplan</button>
            <button>Stundenplan</button>
            <button>Spiel</button>
        </div>
        <button onclick="showStartseite()" style="margin-top: 20px; background-color: red;">Home</button>
    </div>
    
    <div id="klasse11" style="display: none; flex-direction: column; align-items: center;">
        <h1>Willkommen in Klasse 11</h1>
        <div class="button-container">
            <button>Essensplan</button>
            <button>Kalender</button>
            <button>Epochenplan</button>
            <button>Vertretungsplan</button>
            <button>Stundenplan</button>
            <button>Spiel</button>
        </div>
        <button onclick="showStartseite()" style="margin-top: 20px; background-color: red;">Home</button>
    </div>
    
    <div id="klasse12" style="display: none; flex-direction: column; align-items: center;">
        <h1>Willkommen in Klasse 12</h1>
        <div class="button-container">
            <button>Essensplan</button>
            <button>Kalender</button>
            <button>Epochenplan</button>
            <button>Vertretungsplan</button>
            <button>Stundenplan</button>
            <button>Spiel</button>
        </div>
        <button onclick="showStartseite()" style="margin-top: 20px; background-color: red;">Home</button>
    </div>
    
    <div id="klasse13" style="display: none; flex-direction: column; align-items: center;">
        <h1>Willkommen in Klasse 13</h1>
        <div class="button-container">
            <button>Essensplan</button>
            <button>Kalender</button>
            <button>Epochenplan</button>
            <button>Vertretungsplan</button>
            <button>Stundenplan</button>
            <button>Spiel</button>
        </div>
        <button onclick="showStartseite()" style="margin-top: 20px; background-color: red;">Home</button>
    </div>`;
            break;
        default:
            pageContent = "<h2>Fehler</h2><p>Seite nicht gefunden.</p>";
    }

    contentDiv.innerHTML = pageContent;
}

function showKlasse(klasse) {
    document.getElementById('startseite').style.display = 'none';
    document.getElementById('klasse' + klasse).style.display = 'flex';
}
function showStartseite() {
    document.getElementById('klasse9').style.display = 'none';
    document.getElementById('klasse10').style.display = 'none';
    document.getElementById('klasse11').style.display = 'none';
    document.getElementById('klasse12').style.display = 'none';
    document.getElementById('klasse13').style.display = 'none';
    document.getElementById('startseite').style.display = 'flex';
    document.querySelector('#startseite .button-container').style.marginTop = '20px';
}


// Beim Laden der Seite die Home-Seite anzeigen
window.onload = function() {
    loadPage('home');
};
