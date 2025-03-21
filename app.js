function showPage(page) {
    let content = {
        'home': '<h2>Home</h2><p>Lorem ipsum dolor sit amet...</p>',
        'seite1': `<h2>Stundenplan</h2>
        <table>
            <tr>
                <th></th>
                <th>Montag</th>
                <th>Dienstag</th>
                <th>Mittwoche</th>
                <th>Donnerstag</th>
                <th>Freitag</th>
            </tr>
            <tr>
                <td>07:35 - 09:20</td>
                <td><input type="text" id="11"></td>
                <td><input type="text" id="12"></td>
                <td><input type="text" id="13"></td>
                <td><input type="text" id="14"></td>
                <td><input type="text" id="15"></td>
            </tr>
            <tr>
                <td>09:40 - 10:25</td>
                <td><input type="text" id="21"></td>
                <td><input type="text" id="22"></td>
                <td><input type="text" id="23"></td>
                <td><input type="text" id="24"></td>
                <td><input type="text" id="25"></td>
            </tr>
            <tr>
                <td>10:30 - 11:15</td>
                <td><input type="text" id="31"></td>
                <td><input type="text" id="32"></td>
                <td><input type="text" id="33"></td>
                <td><input type="text" id="34"></td>
                <td><input type="text" id="35"></td>
            </tr>
            <tr>
                <td>11:25 - 12:10</td>
                <td><input type="text" id="41"></td>
                <td><input type="text" id="42"></td>
                <td><input type="text" id="43"></td>
                <td><input type="text" id="44"></td>
                <td><input type="text" id="45"></td>
            </tr>
            <tr>
                <td>12:15 - 13:00</td>
                <td><input type="text" id="51"></td>
                <td><input type="text" id="52"></td>
                <td><input type="text" id="53"></td>
                <td><input type="text" id="54"></td>
                <td><input type="text" id="55"></td>
            </tr>
            <tr>
                <td>13:00 - 13:45</td>
                <td><input type="text" id="61"></td>
                <td><input type="text" id="62"></td>
                <td><input type="text" id="63"></td>
                <td><input type="text" id="64"></td>
                <td><input type="text" id="65"></td>
            </tr>
            <tr>
                <td>13:50 - 14:35</td>
                <td><input type="text" id="71"></td>
                <td><input type="text" id="72"></td>
                <td><input type="text" id="73"></td>
                <td><input type="text" id="74"></td>
                <td><input type="text" id="74"></td>
            </tr>
        </table>
                    <button onclick="saveSchedule()">Speichern</button>`
    };

    document.getElementById('main-content').innerHTML = content[page] || '<p>Seite nicht gefunden.</p>';

    if (page === 'seite1') {
        setTimeout(loadSchedule, 10);  // Warten, bis das DOM gezeichnet wurde
    }
}

function saveSchedule() {
    let schedule = {};
    document.querySelectorAll('input').forEach(input => {
        schedule[input.id] = input.value;
    });
    localStorage.setItem('schedule', JSON.stringify(schedule));
}

function loadSchedule() {
    let savedSchedule = JSON.parse(localStorage.getItem('schedule'));
    if (savedSchedule) {
        document.querySelectorAll('input').forEach(input => {
            if (savedSchedule[input.id]) {
                input.value = savedSchedule[input.id];
            }
            // Live-Speicherung bei jeder Eingabe
            input.addEventListener('input', saveSchedule);
        });
    }
}
