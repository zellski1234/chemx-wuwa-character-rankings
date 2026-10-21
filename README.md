# Wuthering Waves — Team DPS Rankings

An independent fan-made ranking website for comparing **Wuthering Waves** characters and their team damage performance. The website presents team DPS calculations in both a ranked list and an interactive scatter graph, with additional information about team setups, rotations, and Team Investment Scores.

## Features

- **Team DPS rankings** — compare teams by their calculated damage per second.
- **List mode** — browse ranked team calculations, character portraits, total team damage, and average rotation times.
- **Investment graph** — compare Team Investment Scores against Team DPS using an interactive scatter plot.
- **Interactive character portraits** — hover over a portrait to view team statistics and click it to reveal expanded calculation details.
- **Search and filtering** — search for characters, team setups, and calculation information.
- **Detailed team information** — view total team damage, main DPS damage and share, rotation duration, team composition, and calculation notes.
- **Source attribution** — links to the original calculation spreadsheet and character image source.

## Data and Rankings

The rankings use team damage calculations and team setup information sourced from **ChemX Calcs — Wuthering Waves DPS Tier List**.

The displayed team DPS is calculated from the supplied team damage and rotation data. Results may use different calculation conditions, including different rotation ranges, team compositions, and calculation methods. Refer to the individual entries and the original spreadsheet when comparing results.

The website ranks entries by Team DPS in list mode. Graph mode plots Team DPS against the Team Investment Score.

### Team Investment Score

The Team Investment Score is intended to indicate how expensive or restrictive a character's team options can be compared with their weakest alternative team.

- **Higher scores** indicate greater investment pressure or fewer competitive team alternatives.
- **Lower scores** indicate more accessible alternatives or less restrictive team options.

For example, Hsin (Flare) can use the E Rover team option, whereas Hsin (Unison) has fewer alternatives. This illustrates why their investment scores can differ.

The scores are displayed as supplied. The exact scoring formula and weighting were not provided, so this website does not independently calculate or verify them.

## Sources and Credits

### Team damage calculations

**ChemX Calcs — Wuthering Waves DPS Tier List**

[Open the original calculation spreadsheet](https://docs.google.com/spreadsheets/u/0/d/1eoCTrwYIsRpacvL3KrcvQpR5rwY3pbJ6gEljZdBj_DHs/htmlview#gid=1601409732)

The spreadsheet is the source for the team damage calculations, team setups, and associated calculation information used for the rankings.

### Character portraits

**Prydwen — Wuthering Waves Characters**

[View the Prydwen character database](https://www.prydwen.gg/wuthering-waves/characters)

Character portraits are loaded from Prydwen's image CDN.

## Data Freshness

**Calculations last used for this website: 20 October 2026**

This date records when the calculations were last used on this website. It does **not** necessarily indicate when ChemX Calcs last updated the original spreadsheet.

The website uses a manually selected snapshot of the available data and does not automatically synchronise with the spreadsheet. Rankings and calculations may therefore become outdated. Check the linked spreadsheet for the newest available figures.

## Technology

The website is built using:

- **HTML** — page structure.
- **CSS** — layout, styling, and responsive presentation.
- **JavaScript** — ranking display, search, filtering, interactive graph, tooltips, and calculation details.

The project uses separate `index.html`, `styles.css`, and `app.js` files and can be developed in a browser-based environment such as StackBlitz.

## Running the Project

1. Open the project in StackBlitz or another development environment that supports HTML, CSS, and JavaScript.
2. Ensure `index.html`, `styles.css`, and `app.js` are in the correct project locations.
3. Start the development preview or local web server.
4. Open the page and switch between List Mode and Investment Graph to explore the rankings.

The project can also be hosted as a static website using GitHub Pages, making it easy to share without maintaining a separate application server.

## Disclaimer

This is an independent, fan-made project and is **not an official publication of Prydwen or ChemX Calcs**. It is not affiliated with or endorsed by either source.

All original calculations and character images remain attributed to their respective sources. This website presents selected data for comparison and informational purposes; displayed figures and investment scores should be checked against the original source material.

*Wuthering Waves and its associated characters and intellectual property belong to their respective rights holders.*
