function showPage(page) {
            let content = {
                'home': '<h2>Home</h2><p>Lorem ipsum dolor sit amet...</p>',
                 'seite1': `<h2>Stundenplan</h2>
                    <table>
                        <tr>
                            <th>Tag</th>
                            <th>08:00 - 09:30</th>
                            <th>09:45 - 11:15</th>
                            <th>11:30 - 13:00</th>
                            <th>14:00 - 15:30</th>
                        </tr>
                        <tr>
                            <td>Montag</td>
                            <td><input type="text" id="mo1"></td>
                            <td><input type="text" id="mo2"></td>
                            <td><input type="text" id="mo3"></td>
                            <td><input type="text" id="mo4"></td>
                        </tr>
                        <tr>
                            <td>Dienstag</td>
                            <td><input type="text" id="di1"></td>
                            <td><input type="text" id="di2"></td>
                            <td><input type="text" id="di3"></td>
                            <td><input type="text" id="di4"></td>
                        </tr>
                        <tr>
                            <td>Mittwoch</td>
                            <td><input type="text" id="mi1"></td>
                            <td><input type="text" id="mi2"></td>
                            <td><input type="text" id="mi3"></td>
                            <td><input type="text" id="mi4"></td>
                        </tr>
                        <tr>
                            <td>Donnerstag</td>
                            <td><input type="text" id="do1"></td>
                            <td><input type="text" id="do2"></td>
                            <td><input type="text" id="do3"></td>
                            <td><input type="text" id="do4"></td>
                        </tr>
                        <tr>
                            <td>Freitag</td>
                            <td><input type="text" id="fr1"></td>
                            <td><input type="text" id="fr2"></td>
                            <td><input type="text" id="fr3"></td>
                            <td><input type="text" id="fr4"></td>
                        </tr>
                    </table>
                    <button onclick="saveSchedule()">Speichern</button>
                    <script>
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
                                });
                            }
                        }
                        setTimeout(loadSchedule, 100);
                    <\/script>`,
                'seite2': '<h2>Seite 2</h2><p>Noch mehr Inhalt für Seite 2...</p>',
                'seite3': '<h2>Seite 3</h2><p>Hier könnte dein Text stehen!</p>'
            };
            document.getElementById('main-content').innerHTML = content[page] || '<p>Seite nicht gefunden.</p>';
        }
