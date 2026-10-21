
/* =========================================================
   WUTHERING WAVES — TEAM DPS RANKINGS v1
   List Mode + Team Investment Scatter Graph

   GRAPH:
   X-axis: Team Investment Score (0–100)
   Y-axis: Team DPS (damage per second)

   Hover over portraits for concise team statistics.
   Click a portrait for expanded details.

   SOURCES:
   Character images: Prydwen
   Team damage calculations: ChemX Calcs
   Website data last updated: 20 October 2026
   ========================================================= */

/* =========================================================
   SOURCE LINKS & WEBSITE UPDATE DATE
   ========================================================= */

   const IMAGE_SOURCE_URL =
   'https://www.prydwen.gg/wuthering-waves/characters';
 
 const CALCULATION_SOURCE_URL =
   'https://docs.google.com/spreadsheets/u/0/d/1eoCTrwYIsRpacvL3KrcvQpR5rwY3pbJ6gEljZdBj_DHs/htmlview#gid=1601409732';
 
 const CALCULATIONS_LAST_USED = '20 October 2026';
 
 /* =========================================================
    CHARACTER DATA
    ========================================================= */
 
 const CHARACTER_DATA = [
   {
     name: 'Hsin (Unison)',
     damage: 2702532.85,
     teamDps: 98273.92,
     mainDpsDamage: 1931842.31,
     mainDpsShare: 71.48,
     worstTeamMainDps: 911167.53,
     relianceScore: 81.36,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Suoming S0R1 HoSV, SK S0R1',
     calculation: 'Average over 4 loops',
     source: 'Hsin Unison team calculation',
   },
   {
     name: 'Hsin (Flare)',
     damage: 2265616.94,
     teamDps: 82386.07,
     mainDpsDamage: 1811779.44,
     mainDpsShare: 79.97,
     worstTeamMainDps: 1530382.92,
     relianceScore: 35.56,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'ERover S6R0, Suisui S0R1*',
     calculation: 'Average over 4 loops  ',
     source: 'Hsin Flare team calculation',
   },
   {
     name: 'Suoming (Main DPS)',
     damage: 2381697.44,
     teamDps: 86607.18,
     mainDpsDamage: 1824248.97,
     mainDpsShare: 76.59,
     worstTeamMainDps: 1585910.82,
     relianceScore: 36.47,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Lynae S0R1, Mornye S0R1',
     calculation: 'Team damage calculation',
     source: 'Suoming Main DPS calculation',
   },
   {
     name: 'Jinhsi',
     damage: 2082222.44,
     teamDps: 78574.43,
     mainDpsDamage: 948975.31,
     mainDpsShare: 45.57,
     worstTeamMainDps: 824195.54,
     relianceScore: 67.58,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 28,
     setup: 'Hsin S0R1, SK S0R1',
     calculation: 'On loop; longer rotation without quickswap',
     source: 'Jinhsi calculation',
   },
   {
     name: 'Xuanling',
     damage: 2675931.16,
     teamDps: 97306.59,
     mainDpsDamage: 2127087.15,
     mainDpsShare: 79.49,
     worstTeamMainDps: 1153453.42,
     relianceScore: 66.28,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Xuanling S0R1, Chisa S0R1 MC',
     calculation: 'Average over 4 loops',
     source: 'Calculation originally found on the Suisui tab',
   },
   {
     name: 'Hiyuki',
     damage: 2617047.97,
     teamDps: 95165.38,
     mainDpsDamage: 2052631.29,
     mainDpsShare: 78.43,
     worstTeamMainDps: 967355.01,
     relianceScore: 74.44,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Hiyuki S0R1, Lucilla S0R1',
     calculation: 'Average over 4 loops',
     source: 'Calculation originally found on the Suisui tab',
   },
   {
     name: 'Qingxiao',
     damage: 2646556.43,
     teamDps: 96238.42,
     mainDpsDamage: 2055938.84,
     mainDpsShare: 77.68,
     worstTeamMainDps: 1471345.48,
     relianceScore: 50.75,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Denia S0R1 RoSM, Mornye S0R1',
     calculation: 'Average over 4 loops',
     source: 'Qingxiao team calculation',
   },
   {
     name: 'Jingran',
     damage: 2490261.23,
     teamDps: 90554.95,
     mainDpsDamage: 1797572.94,
     mainDpsShare: 72.18,
     worstTeamMainDps: 1239400.33,
     relianceScore: 58.87,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Iuno S0R1 CoV, Mornye S1R0',
     calculation: 'Selected S0R1 result; excludes inflated duplicate results',
     source: 'Jingran team calculation',
   },
   {
     name: 'Aemeath (Fusion Burst)',
     damage: 2280857.53,
     teamDps: 86070.1,
     mainDpsDamage: 1286126.74,
     mainDpsShare: 56.39,
     worstTeamMainDps: 1046045.61,
     relianceScore: 62.28,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 28,
     setup: 'Denia S0R1, Chisa S0R1',
     calculation: 'Single-target calculation; on loop',
     source: 'Fusion Burst calculation; single-target result',
   },
   {
     name: 'Aemeath (2x Rupture)',
     damage: 2372919.27,
     teamDps: 89544.12,
     mainDpsDamage: 1563582.46,
     mainDpsShare: 65.89,
     worstTeamMainDps: 889142.49,
     relianceScore: 77.24,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 28,
     setup: 'Lynae S0R1, Mornye S0R1',
     calculation: 'Tune Break with 2x Rupture; average over 4 rotations',
     source: 'Aemeath Tune Break calculation',
   },
   {
     name: 'Lucy (1x Break)',
     damage: 1964615.93,
     teamDps: 71440.58,
     mainDpsDamage: 1200165.82,
     mainDpsShare: 61.09,
     worstTeamMainDps: 1273689.21,
     relianceScore: 38.91,
     relianceNote: 'Base DPS exceeds BiS',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Rebecca S0R1, Mornye S0R1',
     calculation: '1x Break; on loops',
     source: 'Lucy calculation',
   },
   {
     name: 'Sigrika',
     damage: 2430378.73,
     teamDps: 88377.41,
     mainDpsDamage: 2054205.58,
     mainDpsShare: 84.52,
     worstTeamMainDps: 674940.12,
     relianceScore: 82.64,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Lucilla S0R1, SK S0R1',
     calculation: 'Double Outburst; longer rotation',
     source: 'Sigrika team calculation',
   },
   {
     name: 'Luuk',
     damage: 2329163.88,
     teamDps: 84696.87,
     mainDpsDamage: 1728572.56,
     mainDpsShare: 74.22,
     worstTeamMainDps: 1162870.26,
     relianceScore: 58.51,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Denia S0R1 RoSM, Mornye S0R1',
     calculation: 'Average over 4 rotations',
     source: 'Luuk team calculation',
   },
   {
     name: 'Cartethyia',
     damage: 2241987.78,
     teamDps: 84603.31,
     mainDpsDamage: 1280477.18,
     mainDpsShare: 57.11,
     worstTeamMainDps: 878500.04,
     relianceScore: 74.28,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 28,
     setup: 'Ciaccona S0R1 GoW, Chisa S0R1 ToSF',
     calculation: 'On loop; S0R1 team',
     source: 'Cartethyia team calculation',
   },
   {
     name: 'Augusta',
     damage: 1829351.32,
     teamDps: 69032.13,
     mainDpsDamage: 1201850.29,
     mainDpsShare: 65.7,
     worstTeamMainDps: 457779.41,
     relianceScore: 96.21,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 28,
     setup: 'Iuno S0R1 CoV, SK S0R1',
     calculation: 'On loop',
     source: 'Augusta team calculation',
   },
   {
     name: 'Galbrena (Echo team)',
     damage: 2001116.62,
     teamDps: 72767.88,
     mainDpsDamage: 1431808.55,
     mainDpsShare: 71.55,
     worstTeamMainDps: 1085616.31,
     relianceScore: 52.63,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Galbrena S0R1, QY S0R1',
     calculation: 'Average over 4 rotations',
     source: 'Echo team calculation originally found on the Lucilla tab',
   },
   {
     name: 'Phrolova (Echo team)',
     damage: 1841467.28,
     teamDps: 66962.45,
     mainDpsDamage: 1169199.51,
     mainDpsShare: 63.49,
     worstTeamMainDps: 751828.01,
     relianceScore: 72.21,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Phrolova S0R1, Lucilla RoSM/DoTL S0R1, QY S0R1',
     calculation: 'Average over 4 rotations',
     source: 'Echo team calculation originally found on the Lucilla tab',
   },
   {
     name: 'Iuno (Main DPS)',
     damage: 2033007.76,
     teamDps: 81320.31,
     mainDpsDamage: 1477120.58,
     mainDpsShare: 72.66,
     worstTeamMainDps: 955629.77,
     relianceScore: 62.64,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 25,
     setup: 'Iuno S0R1, Mornye S0R1',
     calculation: 'On loop',
     source: 'Calculation originally found on the Lynae tab',
   },
   {
     name: 'Carlotta (1x Rupture)',
     damage: 1714530.79,
     teamDps: 68581.23,
     mainDpsDamage: 1150130.76,
     mainDpsShare: 67.08,
     worstTeamMainDps: 1009742.1,
     relianceScore: 45.13,
     relianceNote: '',
     rotationMin: 25,
     rotationMax: 25,
     setup: 'Lynae S0R1 (1x Rupture), Mornye S0R1',
     calculation: '1x Rupture; on loop',
     source: 'Carlotta calculation',
   },
   {
     name: 'Changli',
     damage: 1463942.63,
     teamDps: 53234.28,
     mainDpsDamage: 567912.59,
     mainDpsShare: 38.79,
     worstTeamMainDps: null,
     relianceScore: 100.0,
     relianceNote:
       'High investment score — no recent calculations for other teams',
     rotationMin: 25,
     rotationMax: 30,
     setup: 'Brant S0R1, Lupa S0R1',
     calculation: 'On loop',
     source: 'Changli team calculation; no recent calculations for other teams',
   },
   {
     name: 'Brant (Main DPS)',
     damage: 1508896.32,
     teamDps: 53889.15,
     mainDpsDamage: 1151042.25,
     mainDpsShare: 76.28,
     worstTeamMainDps: null,
     relianceScore: 100.0,
     relianceNote:
       'High investment score — no recent calculations for other teams',
     rotationMin: 26,
     rotationMax: 30,
     setup: 'Brant S0R1, SK S0R1*',
     calculation: 'Double Anchor; on loop; against bosses',
     source:
       'Main DPS calculation originally found on the Lupa tab; no recent calculations for other teams',
   },
 ];
 
 // Phoebe is excluded because the source sheet marks the result
 // as "Not Applicable".
 
 /* =========================================================
    FORMATTING
    ========================================================= */
 
 const numberFormat = new Intl.NumberFormat('en-GB', {
   maximumFractionDigits: 0,
 });
 
 const damageFormat = new Intl.NumberFormat('en-GB', {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
 });
 
 const decimalFormat = new Intl.NumberFormat('en-GB', {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
 });
 
 const ENTRIES = CHARACTER_DATA.map((entry) => ({
   ...entry,
   rotationSeconds: (entry.rotationMin + entry.rotationMax) / 2,
 })).sort((a, b) => b.teamDps - a.teamDps);
 
 /* =========================================================
    CHARACTER PORTRAITS — PRYDWEN CDN
    ========================================================= */
 
 const CHARACTER_IMAGES = {
   Hsin: 'https://cdn.prydwen.gg/images/wuthering-waves/characters/hsin_card.webp',
   Suoming:
     'https://cdn.prydwen.gg/images/wuthering-waves/characters/suoming_card.webp',
   Jinhsi: 'https://cdn.prydwen.gg/images/ww/characters/jihni_card.webp',
   Xuanling:
     'https://cdn.prydwen.gg/images/wuthering-waves/characters/yangyang-xuanling_card.webp',
   Hiyuki: 'https://cdn.prydwen.gg/images/ww/characters/hiyuki_card.webp',
   Qingxiao:
     'https://cdn.prydwen.gg/images/wuthering-waves/characters/qingxiao_card.webp',
   Jingran:
     'https://cdn.prydwen.gg/images/wuthering-waves/characters/jingran_card.webp',
   Aemeath: 'https://cdn.prydwen.gg/images/ww/characters/math_card.webp',
   Lucy: 'https://cdn.prydwen.gg/images/wuthering-waves/characters/lucy_card.webp',
   Sigrika: 'https://cdn.prydwen.gg/images/ww/characters/44_card.webp',
   Luuk: 'https://cdn.prydwen.gg/images/ww/characters/45_card.webp',
   Cartethyia: 'https://cdn.prydwen.gg/images/ww/characters/cart_card.webp',
   Augusta: 'https://cdn.prydwen.gg/images/ww/characters/aug_card.webp',
   Galbrena: 'https://cdn.prydwen.gg/images/ww/characters/gal_card.webp',
   Phrolova: 'https://cdn.prydwen.gg/images/ww/characters/phr_card.webp',
   Iuno: 'https://cdn.prydwen.gg/images/ww/characters/iuno_card.webp',
   Carlotta: 'https://cdn.prydwen.gg/images/ww/characters/card_carlotta.webp',
   Changli: 'https://cdn.prydwen.gg/images/ww/characters/card_changli.webp',
   Brant: 'https://cdn.prydwen.gg/images/ww/characters/card_brant.webp',
 };
 
 function getCharacterImage(name) {
   const character = name.replace(/\s*\([^)]*\)/g, '').trim();
   return CHARACTER_IMAGES[character] || '';
 }
 
 /* =========================================================
    GENERAL HELPERS
    ========================================================= */
 
 function normalise(value) {
   return String(value ?? '')
     .toLowerCase()
     .normalize('NFD')
     .replace(/[\u0300-\u036f]/g, '')
     .replace(/\s+/g, ' ')
     .trim();
 }
 
 function formatRotation(entry) {
   if (entry.rotationMin === entry.rotationMax) {
     return `${entry.rotationMin}s`;
   }
 
   return `${entry.rotationMin}–${entry.rotationMax}s`;
 }
 
 function createElement(tag, className = '', text) {
   const element = document.createElement(tag);
 
   if (className) element.className = className;
   if (text !== undefined) element.textContent = text;
 
   return element;
 }
 
 function addExtraRow(parent, label, value) {
   const row = createElement('p', 'extra-row');
   const strong = createElement('strong', '', `${label}: `);
 
   row.append(strong, document.createTextNode(String(value)));
   parent.appendChild(row);
 }
 
 function formatDamageValue(value) {
   return value == null
     ? 'No recent calculations'
     : damageFormat.format(value);
 }
 
 /* =========================================================
    EXTERNAL SOURCE LINK HELPERS
    ========================================================= */
 
 function createExternalLink(label, url, className = 'source-link') {
   const link = createElement('a', className, label);
 
   link.href = url;
   link.target = '_blank';
   link.rel = 'noopener noreferrer';
   link.setAttribute('aria-label', `${label} (opens in a new tab)`);
 
   return link;
 }
 
 function addSourceLink(parent, label, linkText, url) {
   const row = createElement('p', 'source-link-row');
   const strong = createElement('strong', '', `${label}: `);
   const link = createExternalLink(linkText, url);
 
   row.append(strong, link);
   parent.appendChild(row);
 
   return row;
 }
 
 /* =========================================================
    SOURCES & CREDITS FOOTER
    ========================================================= */
 
 function createSourcesSection() {
   const section = createElement('section', 'source-credits');
 
   section.setAttribute('aria-labelledby', 'source-credits-heading');
 
   const heading = createElement(
     'h2',
     'source-credits-heading',
     'Sources & Credits'
   );
 
   const introduction = createElement(
     'p',
     'source-credits-intro',
     'This is an independent fan-made ranking page. Character images and team calculation data are credited to their respective sources. This website is not an official Prydwen or ChemX Calcs publication.'
   );
 
   const imageCredit = createElement('div', 'source-credit-item');
   const imageHeading = createElement('h3', '', 'Character images');
 
   const imageDescription = createElement(
     'p',
     '',
     'Character portraits are loaded from the Prydwen image CDN.'
   );
 
   imageCredit.append(
     imageHeading,
     imageDescription,
     createExternalLink(
       'Prydwen — Wuthering Waves Characters',
       IMAGE_SOURCE_URL
     )
   );
 
   const calculationCredit = createElement('div', 'source-credit-item');
 
   const calculationHeading = createElement(
     'h3',
     '',
     'Team damage calculations'
   );
 
   const calculationDescription = createElement(
     'p',
     '',
     'Team DPS figures, team setups, and underlying damage calculations are sourced from ChemX Calcs — Wuthering Waves DPS Tier List. The data displayed here is a manually maintained snapshot and does not update automatically when the original spreadsheet changes.'
   );
 
   const lastUpdated = createElement(
     'p',
     'source-last-updated',
     `Last updated on this website: ${CALCULATIONS_LAST_USED}`
   );
 
   const latestDataNote = createElement(
     'p',
     'source-update-note',
     'The date above records when the calculations were last copied into this website, not when ChemX Calcs last updated its spreadsheet. For the latest calculations, check the original source.'
   );
 
   calculationCredit.append(
     calculationHeading,
     calculationDescription,
     createExternalLink(
       'ChemX Calcs — Wuthering Waves DPS Tier List (original spreadsheet)',
       CALCULATION_SOURCE_URL
     ),
     lastUpdated,
     latestDataNote
   );
 
   const investmentExplanation = createElement(
     'p',
     'source-credits-disclaimer',
     'Team Investment Score describes how restrictive or investment-intensive a character’s team options can be compared with their weakest alternative team. A higher score indicates greater investment pressure or fewer competitive alternatives; a lower score indicates more accessible alternatives. Scores are displayed as supplied because the exact scoring formula and weighting were not provided.'
   );
 
   section.append(
     heading,
     introduction,
     imageCredit,
     calculationCredit,
     investmentExplanation
   );
 
   return section;
 }
 
 /* =========================================================
    TEAM INVESTMENT SCORE DETAILS
    ========================================================= */
 
 function createRelianceDetails(entry) {
   const details = createElement('details', 'character-extra');
 
   const summary = createElement(
     'summary',
     'extra-toggle',
     'How is the investment score assessed?'
   );
 
   const content = createElement('div', 'extra-content');
 
   addExtraRow(
     content,
     'Team Investment Score',
     `${decimalFormat.format(entry.relianceScore)} / 100`
   );
 
   addExtraRow(
     content,
     'Main DPS share',
     `${decimalFormat.format(entry.mainDpsShare)}%`
   );
 
   addExtraRow(
     content,
     'Main DPS damage',
     damageFormat.format(entry.mainDpsDamage)
   );
 
   addExtraRow(
     content,
     'Worst-team main DPS',
     formatDamageValue(entry.worstTeamMainDps)
   );
 
   if (entry.worstTeamMainDps !== null) {
     const comparison =
       (entry.worstTeamMainDps / entry.mainDpsDamage) * 100;
 
     addExtraRow(
       content,
       'Worst-team DPS relative to listed main DPS damage',
       `${decimalFormat.format(comparison)}%`
     );
   } else {
     addExtraRow(
       content,
       'Comparison status',
       'Unavailable — no recent calculations for other teams'
     );
   }
 
   addExtraRow(
     content,
     'Score interpretation',
     'A higher score indicates greater investment pressure or fewer competitive alternative teams. A lower score indicates more accessible alternatives.'
   );
 
   addExtraRow(
     content,
     'Score methodology',
     'The score is displayed as supplied. The exact formula and weighting were not provided, so this website does not recalculate it.'
   );
 
   if (entry.relianceNote) {
     addExtraRow(content, 'Note', entry.relianceNote);
   }
 
   addSourceLink(
     content,
     'Original data',
     'View the ChemX Calcs spreadsheet',
     CALCULATION_SOURCE_URL
   );
 
   details.append(summary, content);
 
   return details;
 }
 
 /* =========================================================
    CALCULATION DETAILS
    ========================================================= */
 
 function createDetails(entry) {
   const details = createElement('details', 'character-extra');
 
   const summary = createElement(
     'summary',
     'extra-toggle',
     'View calculation details'
   );
 
   const content = createElement('div', 'extra-content');
 
   addExtraRow(
     content,
     'Total team damage',
     damageFormat.format(entry.damage)
   );
 
   addExtraRow(content, 'Team DPS', numberFormat.format(entry.teamDps));
 
   addExtraRow(
     content,
     'Main DPS damage',
     damageFormat.format(entry.mainDpsDamage)
   );
 
   addExtraRow(
     content,
     'Main DPS share',
     `${decimalFormat.format(entry.mainDpsShare)}%`
   );
 
   addExtraRow(
     content,
     'Worst-team main DPS',
     formatDamageValue(entry.worstTeamMainDps)
   );
 
   addExtraRow(
     content,
     'Team Investment Score',
     `${decimalFormat.format(entry.relianceScore)} / 100`
   );
 
   addExtraRow(content, 'Rotation range', formatRotation(entry));
 
   addExtraRow(
     content,
     'Average rotation',
     `${entry.rotationSeconds}s`
   );
 
   addExtraRow(content, 'Team setup', entry.setup);
   addExtraRow(content, 'Calculation method', entry.calculation);
   addExtraRow(content, 'Source notes', entry.source);
 
   addSourceLink(
     content,
     'Full calculations',
     'Open the ChemX Calcs spreadsheet',
     CALCULATION_SOURCE_URL
   );
 
   addSourceLink(
     content,
     'Character image source',
     'Prydwen — Wuthering Waves Characters',
     IMAGE_SOURCE_URL
   );
 
   content.appendChild(createRelianceDetails(entry));
 
   details.append(summary, content);
 
   return details;
 }
 
 /* =========================================================
    LIST MODE
    ========================================================= */
 
 function createListCard(entry, rank) {
   const card = createElement('article', 'character-card');
 
   const rankElement = createElement(
     'div',
     'rank-number',
     String(rank).padStart(2, '0')
   );
 
   const imageWrapper = createElement('div', 'character-image-wrapper');
   const imageUrl = getCharacterImage(entry.name);
 
   if (imageUrl) {
     const image = document.createElement('img');
 
     image.className = 'character-image';
     image.src = imageUrl;
     image.alt = `${entry.name} character portrait — image source: Prydwen`;
     image.loading = 'lazy';
     image.decoding = 'async';
 
     image.addEventListener('error', () => {
       imageWrapper.classList.add('image-unavailable');
       image.remove();
     });
 
     imageWrapper.appendChild(image);
   } else {
     imageWrapper.classList.add('image-unavailable');
   }
 
   const content = createElement('div', 'character-details');
 
   content.append(
     createElement('h3', '', entry.name),
 
     createElement(
       'p',
       'damage-label',
       `Average rotation: ${entry.rotationSeconds}s (${formatRotation(entry)})`
     ),
 
     createElement(
       'p',
       'damage-value',
       `Team damage: ${damageFormat.format(entry.damage)}`
     ),
 
     createElement(
       'p',
       'dps-value',
       `${numberFormat.format(entry.teamDps)} team DPS`
     ),
 
     createElement(
       'p',
       'damage-label',
       `Team Investment Score: ${decimalFormat.format(
         entry.relianceScore
       )} / 100`
     ),
 
     createDetails(entry)
   );
 
   card.append(rankElement, imageWrapper, content);
 
   return card;
 }
 
 /* =========================================================
    TEAM INVESTMENT SCATTER GRAPH
    X-AXIS: Team Investment Score
    Y-AXIS: Team DPS
    ========================================================= */
 
 function createScatterPlot(entries) {
   // Remove any old floating tooltip before creating a new graph.
   document
     .querySelectorAll('.scatter-hover-tooltip-floating')
     .forEach((oldTooltip) => oldTooltip.remove());
 
   const wrapper = createElement('div', 'scatter-wrapper');
 
   if (!entries.length) return wrapper;
 
   const width = 1200;
   const height = 900;
 
   const margin = {
     top: 45,
     right: 45,
     bottom: 85,
     left: 100,
   };
 
   const plotWidth = width - margin.left - margin.right;
   const plotHeight = height - margin.top - margin.bottom;
 
   const portraitRadius = 24;
   const portraitDiameter = portraitRadius * 2;
 
   const minX = 0;
   const maxX = 100;
 
   const dpsValues = entries.map((entry) => entry.teamDps);
   const rawMinY = Math.min(...dpsValues);
   const rawMaxY = Math.max(...dpsValues);
 
   const yPadding = Math.max(4000, (rawMaxY - rawMinY) * 0.08);
 
   const minY = Math.floor((rawMinY - yPadding) / 5000) * 5000;
   const maxY = Math.ceil((rawMaxY + yPadding) / 5000) * 5000;
 
   const x = (value) =>
     margin.left + ((value - minX) / (maxX - minX)) * plotWidth;
 
   const y = (value) =>
     margin.top +
     plotHeight -
     ((value - minY) / (maxY - minY || 1)) * plotHeight;
 
   const svgNS = 'http://www.w3.org/2000/svg';
   const svg = document.createElementNS(svgNS, 'svg');
 
   svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
   svg.setAttribute('role', 'img');
 
   svg.setAttribute(
     'aria-label',
     'Scatter graph comparing Team Investment Score on the horizontal axis with Team DPS on the vertical axis. Hover over or select a character portrait for team details.'
   );
 
   function addSvg(parent, tag, attributes = {}, text = '') {
     const node = document.createElementNS(svgNS, tag);
 
     Object.entries(attributes).forEach(([key, value]) => {
       node.setAttribute(key, String(value));
     });
 
     if (text !== '') node.textContent = text;
 
     parent.appendChild(node);
 
     return node;
   }
 
   /* Plot background */
 
   addSvg(svg, 'rect', {
     x: margin.left,
     y: margin.top,
     width: plotWidth,
     height: plotHeight,
     rx: 5,
     fill: '#191c32',
   });
 
   /* Y-axis grid lines and Team DPS labels */
 
   const yTickCount = 8;
 
   for (let i = 0; i <= yTickCount; i++) {
     const value = minY + ((maxY - minY) * i) / yTickCount;
     const py = y(value);
 
     addSvg(svg, 'line', {
       x1: margin.left,
       y1: py,
       x2: margin.left + plotWidth,
       y2: py,
       stroke: '#35374b',
       'stroke-width': 1,
     });
 
     addSvg(
       svg,
       'text',
       {
         x: margin.left - 12,
         y: py + 4,
         'text-anchor': 'end',
         fill: '#b6bdd4',
         'font-size': 11,
       },
       numberFormat.format(value)
     );
   }
 
   /* X-axis grid lines and Investment Score labels */
 
   const xTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
 
   xTicks.forEach((value) => {
     const px = x(value);
 
     addSvg(svg, 'line', {
       x1: px,
       y1: margin.top,
       x2: px,
       y2: margin.top + plotHeight,
       stroke: '#35374b',
       'stroke-width': 1,
     });
 
     addSvg(
       svg,
       'text',
       {
         x: px,
         y: margin.top + plotHeight + 24,
         'text-anchor': 'middle',
         fill: '#b6bdd4',
         'font-size': 12,
       },
       String(value)
     );
   });
 
   /* Axis titles */
 
   addSvg(
     svg,
     'text',
     {
       x: margin.left + plotWidth / 2,
       y: height - 22,
       'text-anchor': 'middle',
       fill: '#c8baff',
       'font-size': 13,
       'font-weight': 600,
     },
     'Team Investment Score'
   );
 
   addSvg(
     svg,
     'text',
     {
       x: 25,
       y: margin.top + plotHeight / 2,
       transform: `rotate(-90 25 ${margin.top + plotHeight / 2})`,
       'text-anchor': 'middle',
       fill: '#c8baff',
       'font-size': 13,
       'font-weight': 600,
     },
     'Team DPS (damage per second)'
   );
 
   /* =======================================================
      FLOATING HOVER TOOLTIP
      Appended to document.body to avoid graph overflow clipping.
      Uses viewport coordinates rather than graph coordinates.
      ======================================================= */
 
   const tooltip = createElement(
     'div',
     'scatter-hover-tooltip scatter-hover-tooltip-floating'
   );
 
   Object.assign(tooltip.style, {
     position: 'fixed',
     display: 'none',
     zIndex: '9999',
     pointerEvents: 'none',
     boxSizing: 'border-box',
   });
 
   tooltip.setAttribute('role', 'tooltip');
 
   function addTooltipLine(parent, label, value) {
     const line = createElement('div', 'tooltip-line');
     const strong = createElement('strong', '', `${label}: `);
 
     line.append(strong, document.createTextNode(String(value)));
     parent.appendChild(line);
 
     return line;
   }
 
   function showTooltip(entry, event) {
     tooltip.replaceChildren();
 
     // Attach the tooltip to the viewport-level document body.
     if (!tooltip.isConnected) {
       document.body.appendChild(tooltip);
     }
 
     const title = createElement('strong', '', entry.name);
 
     Object.assign(title.style, {
       display: 'block',
       fontSize: '16px',
       color: '#d7caff',
       marginBottom: '6px',
     });
 
     const dps = createElement(
       'div',
       '',
       `${numberFormat.format(entry.teamDps)} Team DPS`
     );
 
     Object.assign(dps.style, {
       fontWeight: '700',
       fontSize: '15px',
       marginBottom: '5px',
     });
 
     const score = createElement(
       'div',
       '',
       `Investment Score: ${decimalFormat.format(
         entry.relianceScore
       )} / 100`
     );
 
     Object.assign(score.style, {
       color: '#d7caff',
       fontWeight: '700',
       marginBottom: '8px',
     });
 
     tooltip.append(title, dps, score);
 
     addTooltipLine(
       tooltip,
       'Total team damage',
       damageFormat.format(entry.damage)
     );
 
     addTooltipLine(
       tooltip,
       'Main DPS damage',
       damageFormat.format(entry.mainDpsDamage)
     );
 
     addTooltipLine(
       tooltip,
       'Main DPS share',
       `${decimalFormat.format(entry.mainDpsShare)}%`
     );
 
     addTooltipLine(
       tooltip,
       'Worst-team main DPS',
       formatDamageValue(entry.worstTeamMainDps)
     );
 
     if (entry.relianceNote) {
       const note = createElement('div', '', entry.relianceNote);
 
       Object.assign(note.style, {
         marginTop: '7px',
         color: '#e6c98b',
         fontWeight: '600',
       });
 
       tooltip.appendChild(note);
     }
 
     const separator = createElement('div');
 
     Object.assign(separator.style, {
       borderTop: '1px solid #45405e',
       margin: '8px 0',
     });
 
     tooltip.appendChild(separator);
 
     addTooltipLine(tooltip, 'Rotation', formatRotation(entry));
 
     addTooltipLine(
       tooltip,
       'Average rotation',
       `${entry.rotationSeconds}s`
     );
 
     addTooltipLine(tooltip, 'Team setup', entry.setup);
 
     addTooltipLine(tooltip, 'Calculation', entry.calculation);
 
     tooltip.style.display = 'block';
 
     positionTooltip(event);
   }
 
   function positionTooltip(event) {
     if (!tooltip.isConnected || tooltip.style.display === 'none') {
       return;
     }
 
     const viewportPadding = 8;
     const pointerGap = 16;
 
     const viewportWidth = window.innerWidth;
     const viewportHeight = window.innerHeight;
 
     const tooltipRect = tooltip.getBoundingClientRect();
     const tooltipWidth = tooltipRect.width;
     const tooltipHeight = tooltipRect.height;
 
     // Start to the right and below the pointer.
     let left = event.clientX + pointerGap;
     let top = event.clientY + pointerGap;
 
     // Flip to the left if the tooltip would leave the viewport.
     if (left + tooltipWidth > viewportWidth - viewportPadding) {
       left = event.clientX - tooltipWidth - pointerGap;
     }
 
     // Flip above the pointer if there is insufficient space below.
     if (top + tooltipHeight > viewportHeight - viewportPadding) {
       top = event.clientY - tooltipHeight - pointerGap;
     }
 
     // Clamp both coordinates so the whole tooltip stays on-screen.
     left = Math.max(
       viewportPadding,
       Math.min(left, viewportWidth - tooltipWidth - viewportPadding)
     );
 
     top = Math.max(
       viewportPadding,
       Math.min(top, viewportHeight - tooltipHeight - viewportPadding)
     );
 
     tooltip.style.left = `${left}px`;
     tooltip.style.top = `${top}px`;
   }
 
   function hideTooltip() {
     tooltip.style.display = 'none';
   }
 
   /* =======================================================
      PORTRAIT POINTS
      ======================================================= */
 
   entries.forEach((entry, index) => {
     const px = x(entry.relianceScore);
     const py = y(entry.teamDps);
 
     const group = addSvg(svg, 'g', {
       class: 'scatter-point',
       tabindex: 0,
       role: 'button',
       'aria-label':
         `${entry.name}. Team Investment Score ${decimalFormat.format(
           entry.relianceScore
         )}. ${numberFormat.format(entry.teamDps)} Team DPS. ` +
         'Select for team details.',
     });
 
     const clipId = `scatter-portrait-clip-${index}`;
 
     const defs = addSvg(group, 'defs');
 
     const clipPath = addSvg(defs, 'clipPath', {
       id: clipId,
       clipPathUnits: 'userSpaceOnUse',
     });
 
     addSvg(clipPath, 'circle', {
       cx: px,
       cy: py,
       r: portraitRadius,
     });
 
     // Portrait background remains visible if an image fails to load.
     addSvg(group, 'circle', {
       cx: px,
       cy: py,
       r: portraitRadius,
       fill: '#30294c',
       class: 'scatter-dot',
     });
 
     const imageUrl = getCharacterImage(entry.name);
 
     if (imageUrl) {
       const image = addSvg(group, 'image', {
         href: imageUrl,
         x: px - portraitRadius,
         y: py - portraitRadius,
         width: portraitDiameter,
         height: portraitDiameter,
         preserveAspectRatio: 'xMidYMid slice',
         'clip-path': `url(#${clipId})`,
         class: 'scatter-portrait',
       });
 
       image.setAttributeNS(
         'http://www.w3.org/1999/xlink',
         'xlink:href',
         imageUrl
       );
     } else {
       const initials = entry.name
         .replace(/\s*\([^)]*\)/g, '')
         .trim()
         .slice(0, 2)
         .toUpperCase();
 
       addSvg(
         group,
         'text',
         {
           x: px,
           y: py + 4,
           'text-anchor': 'middle',
           fill: '#f0edff',
           'font-size': 10,
           'font-weight': 800,
         },
         initials
       );
     }
 
     // Circular portrait outline.
     addSvg(group, 'circle', {
       cx: px,
       cy: py,
       r: portraitRadius,
       fill: 'none',
       stroke: '#c8bcff',
       'stroke-width': 2,
       class: 'scatter-portrait-border',
     });
 
     // Native tooltip fallback.
     addSvg(
       group,
       'title',
       {},
       `${entry.name} — Investment Score ${decimalFormat.format(
         entry.relianceScore
       )} — ${numberFormat.format(entry.teamDps)} DPS`
     );
 
     /* Mouse interactions */
 
     group.addEventListener('mouseenter', (event) => {
       showTooltip(entry, event);
     });
 
     group.addEventListener('mousemove', (event) => {
       positionTooltip(event);
     });
 
     group.addEventListener('mouseleave', hideTooltip);
 
     /* Keyboard interactions */
 
     group.addEventListener('focus', () => {
       group.classList.add('focused');
     });
 
     group.addEventListener('blur', () => {
       group.classList.remove('focused');
       hideTooltip();
     });
 
     /* Click or tap to display full details */
 
     function selectPoint() {
       wrapper
         .querySelectorAll('.scatter-point')
         .forEach((point) => point.classList.remove('selected'));
 
       group.classList.add('selected');
 
       hideTooltip();
 
       wrapper.querySelector('.scatter-selected-details')?.remove();
 
       const panel = createElement('section', 'scatter-selected-details');
 
       panel.setAttribute('aria-live', 'polite');
 
       panel.appendChild(createElement('h3', '', entry.name));
 
       panel.appendChild(
         createElement(
           'p',
           'selected-dps',
           `${numberFormat.format(entry.teamDps)} Team DPS`
         )
       );
 
       panel.appendChild(
         createElement(
           'p',
           'graph-meta',
           `Team Investment Score: ${decimalFormat.format(
             entry.relianceScore
           )} / 100`
         )
       );
 
       addExtraRow(
         panel,
         'Total team damage',
         damageFormat.format(entry.damage)
       );
 
       addExtraRow(
         panel,
         'Main DPS damage',
         damageFormat.format(entry.mainDpsDamage)
       );
 
       addExtraRow(
         panel,
         'Main DPS share',
         `${decimalFormat.format(entry.mainDpsShare)}%`
       );
 
       addExtraRow(
         panel,
         'Worst-team main DPS',
         formatDamageValue(entry.worstTeamMainDps)
       );
 
       addExtraRow(
         panel,
         'Average rotation',
         `${entry.rotationSeconds}s`
       );
 
       addExtraRow(panel, 'Rotation range', formatRotation(entry));
       addExtraRow(panel, 'Team setup', entry.setup);
       addExtraRow(panel, 'Calculation method', entry.calculation);
       addExtraRow(panel, 'Source notes', entry.source);
 
       addSourceLink(
         panel,
         'Full calculations',
         'Open the ChemX Calcs spreadsheet',
         CALCULATION_SOURCE_URL
       );
 
       addSourceLink(
         panel,
         'Character image source',
         'Prydwen — Wuthering Waves Characters',
         IMAGE_SOURCE_URL
       );
 
       if (entry.relianceNote) {
         addExtraRow(panel, 'Note', entry.relianceNote);
       }
 
       panel.appendChild(createRelianceDetails(entry));
       panel.appendChild(createDetails(entry));
 
       wrapper.appendChild(panel);
 
       panel.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
       });
     }
 
     group.addEventListener('click', selectPoint);
 
     group.addEventListener('keydown', (event) => {
       if (event.key === 'Enter' || event.key === ' ') {
         event.preventDefault();
         selectPoint();
       }
     });
   });
 
   /* =======================================================
      GRAPH FOOTER
      ======================================================= */
 
   wrapper.appendChild(svg);
 
   wrapper.appendChild(
     createElement(
       'p',
       'graph-meta',
       'Horizontal axis: Team Investment Score (0–100). Vertical axis: Team DPS. Hover over a portrait for concise team statistics; click or tap a portrait to expand the full details. A higher investment score indicates greater investment pressure or fewer competitive alternative teams, while a lower score indicates more accessible alternatives. Changli and Brant have no recent calculations for other teams, so their supplied scores of 100 are displayed without a worst-team comparison. Character images are credited to Prydwen; the original team calculations are sourced from ChemX Calcs.'
     )
   );
 
   return wrapper;
 }
 
 /* =========================================================
    SEARCH, MODE SWITCHING, AND RENDERING
    ========================================================= */
 
 function renderTierList() {
   const container = document.querySelector('#tier-list-container');
 
   if (!container) {
     console.error('Could not find #tier-list-container. Check index.html.');
     return;
   }
 
   container.replaceChildren();
 
   let currentMode = 'graph';
 
   const heading = createElement(
     'h2',
     '',
     'Team DPS & Investment Rankings'
   );
 
   const intro = createElement(
     'p',
     'results-summary',
     `${ENTRIES.length} team calculations · Graph compares Team Investment Score against Team DPS`
   );
 
   const controls = createElement('div', 'tier-list-controls');
 
   const listButton = createElement('button', 'mode-button', 'List Mode');
 
   const graphButton = createElement(
     'button',
     'mode-button',
     'Investment Graph'
   );
 
   listButton.type = 'button';
   graphButton.type = 'button';
 
   listButton.setAttribute('aria-pressed', 'false');
   graphButton.setAttribute('aria-pressed', 'true');
 
   const search = createElement('input', 'search-input');
 
   search.type = 'search';
   search.placeholder = 'Search characters, teams, or setups...';
   search.setAttribute('aria-label', 'Search team DPS rankings');
 
   const status = createElement('p', 'results-summary');
   status.setAttribute('aria-live', 'polite');
 
   const results = createElement('div', 'tier-list-results');
 
   controls.append(listButton, graphButton);
 
   function draw() {
     // Remove the previous floating tooltip when the graph is redrawn.
     document
       .querySelectorAll('.scatter-hover-tooltip-floating')
       .forEach((oldTooltip) => oldTooltip.remove());
 
     results.replaceChildren();
 
     const query = normalise(search.value);
 
     const filtered = ENTRIES.filter((entry) => {
       const searchable = normalise(
         [
           entry.name,
           entry.setup,
           entry.calculation,
           entry.source,
           entry.relianceNote,
           entry.teamDps,
           entry.relianceScore,
           entry.mainDpsShare,
           entry.mainDpsDamage,
           entry.worstTeamMainDps,
           entry.rotationSeconds,
           entry.rotationMin,
           entry.rotationMax,
         ].join(' ')
       );
 
       return searchable.includes(query);
     });
 
     status.textContent =
       `Showing ${filtered.length} of ${ENTRIES.length} team calculations`;
 
     if (!filtered.length) {
       results.className = 'tier-list-results';
 
       results.appendChild(
         createElement(
           'p',
           'empty-results',
           'No matching teams found. Try another search.'
         )
       );
 
       return;
     }
 
     if (currentMode === 'graph') {
       results.className = 'tier-list-results dps-graph';
       results.appendChild(createScatterPlot(filtered));
     } else {
       results.className = 'tier-list-results tier-list';
 
       filtered.forEach((entry) => {
         // List rankings remain sorted by Team DPS.
         const rank = ENTRIES.indexOf(entry) + 1;
 
         results.appendChild(createListCard(entry, rank));
       });
     }
   }
 
   function setMode(mode) {
     currentMode = mode;
 
     listButton.classList.toggle('active', mode === 'list');
     graphButton.classList.toggle('active', mode === 'graph');
 
     listButton.setAttribute('aria-pressed', String(mode === 'list'));
     graphButton.setAttribute('aria-pressed', String(mode === 'graph'));
 
     draw();
   }
 
   listButton.addEventListener('click', () => {
     setMode('list');
   });
 
   graphButton.addEventListener('click', () => {
     setMode('graph');
   });
 
   search.addEventListener('input', draw);
 
   // Credits stay visible when changing modes or searching.
   container.append(
     heading,
     intro,
     controls,
     search,
     status,
     results,
     createSourcesSection()
   );
 
   // Open in graph mode by default.
   setMode('graph');
 }
 
 renderTierList();
 
