/* ================= ICONS ================= */
const IC_CHECK = '<svg class="b-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5.5"/></svg>';
const IC_X = '<svg class="b-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg>';
const IC_DB = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6.5 6.5v11M3.5 9.5v5M17.5 6.5v11M20.5 9.5v5M6.5 12h11"/></svg>';
const IC_CAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>';
const IC_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;color:var(--green-dark)"><path d="M12 17v5"/><path d="M8 3h8l-1 7 3 3H6l3-3-1-7z"/></svg>';

/* ================= DIRECTIVES DATA ================= */
const MECH = [
  'Eat and drink slowly, and chew well.',
  'Avoid heavy and fatty meals — they delay closure of the LES and place too large a volume of food in the stomach.',
  'Opt for <b>3 meals and 3 snacks</b> spaced out regularly.',
  'Drink liquids between meals — strictly <b>30 minutes before or after</b>.',
  'Avoid carbonated drinks, drinking straws, and chewing gum to reduce aerophagia, abdominal distension, and bloating.',
  'Eat dinner at least <b>two to three hours before bedtime</b>.',
  'Avoid bending over immediately after meals.',
  'Avoid naps immediately after a meal.',
  'Sleep on your <b>left side</b>, with a <b>15 cm elevation</b> of the head of the bed.',
  'Manage stress through mindfulness meditation, yoga, or tai chi.'
];
const NOS = [
  'Methylxanthine-rich foods — <b>coffee, tea, and chocolate</b>.',
  '<b>Fatty or spicy</b> foods.',
  '<b>Acidic foods</b> — specifically citrus fruits, citrus juices, tomatoes, and tomato juices.',
  'Cola-type soft drinks and <b>carbonated beverages</b>.',
  'Products containing <b>spearmint or peppermint</b>.',
  '<b>Alcohol</b>.',
  '<b>Fermentable vegetables:</b> broccoli, cauliflower, Brussels sprouts, turnip, garlic, onion, and leek greens.',
  '<b>Legumes.</b>',
  '<b>Fermentable grains:</b> oat bran products, barley, and psyllium.',
  '<b>Fermentable fruits:</b> apples, pears, grapes, melons, cherries, and dried fruits.'
];

document.getElementById('mechList').innerHTML = MECH.map((text) => `<li>${IC_CHECK}<span>${text}</span></li>`).join('');
document.getElementById('noList').innerHTML = NOS.map((text) => `<li>${IC_X}<span>${text}</span></li>`).join('');

/* ================= MEAL DATA ================= */
const ROWS = [
  { time:'07:30', label:'Breakfast', key:'b' },
  { time:'10:30', label:'Snack 1', key:'s1' },
  { time:'13:00', label:'Lunch', key:'l' },
  { time:'16:00', label:'Snack 2', key:'s2' },
  { time:'18:30', label:'Dinner', key:'d' }
];

const MENUS = [
  {
    name:'Menu A', tabSub:'High-Energy', full:'High-Energy Baseline',
    days:[
      { name:'Monday', loc:'WFH', train:'Weights + MT', meals:{
        b:'3 scrambled eggs with spinach and Italian herbs. 2 slices sourdough (2 S.T.E.P.S.).',
        s1:'Post-Weights: Wheat Protein/Creatine Shake. 1/2 Palmer Mango (or 1/2 cup Blueberries / 2 small Kiwis).',
        l:'Colombian Style: 120 g chicken breast, 1 medium Russell potato (2 S.T.E.P.S.), cilantro, cumin, clear broth.',
        s2:'90 g hard aged Cheddar or Parmesan + green banana.',
        d:'Post-MT Asian Bowl: 120 g salmon, 1 cup white vermicelli (3 S.T.E.P.S.), zucchini, light soy sauce.' }},
      { name:'Tuesday', loc:'Office', train:null, meals:{
        b:'180 ml plain Greek yogurt, 1/2 cup Blueberries, 15 ml walnuts.',
        s1:'2 hard-boiled large eggs.',
        l:'120 g salmon, 500 ml Napa cabbage & cucumber, 5 ml garlic-infused oil.',
        s2:'Wheat Protein/Creatine Shake.',
        d:'120 g chicken, 500 ml roasted Chinese eggplant & bok choy.' }},
      { name:'Wednesday', loc:'Office', train:'Evening MT', meals:{
        b:'3 eggs cooked in 5 ml garlic-infused oil, 1/2 Red Papaya.',
        s1:'Wheat Protein/Creatine Shake. 2 small kiwis.',
        l:'Colombian Style: 120 g pan-seared chicken breast (seasoned with turmeric and salt), 8-12 Colombian yellow potatoes, 250 ml steamed green beans. Garnish with fresh cilantro (or substitute fresh flat-leaf parsley if unavailable).',
        s2:'90 g hard aged Cheddar or Parmesan + 15 ml almonds (or walnuts/macadamia nuts) (Pre-training).',
        d:'Post-MT Pho-Style: 120 g chicken, clear broth, lemongrass, 1 cup white vermicelli.' }},
      { name:'Thursday', loc:'Office', train:null, meals:{
        b:'150 g firm tofu scrambled with turmeric and green onion (green part only).',
        s1:'2 hard-boiled large eggs.',
        l:'Leftover Chicken + 1 medium Russell potato (2 S.T.E.P.S.).',
        s2:'Wheat Protein/Creatine Shake.',
        d:'120 g roasted chicken (breast or leg, skinless) rubbed with cumin and oregano, 1 baked medium Russell potato, 250 ml steamed white radish drizzled with 5 ml garlic-infused oil.' }},
      { name:'Friday', loc:'WFH', train:'Weights', meals:{
        b:'3 eggs, 250 ml baby bok choy, 2 slices sourdough (2 S.T.E.P.S.).',
        s1:'Pre-Weights: Wheat Protein/Creatine Shake. 1/2 Palmer Mango (or 1/2 cup Blueberries / 2 small Kiwis).',
        l:'Asian Noodle Bowl: 120 g poached chicken breast in a mild lemongrass and ginger infused broth, 1 cup white rice vermicelli (3 S.T.E.P.S.), 250 ml baby bok choy. Finished with a dash of light soy sauce and green onion tops (green parts only).',
        s2:'90 g hard aged Cheddar or Parmesan + 1/2 Red Papaya.',
        d:'120 g salmon, 500 ml roasted eggplant & green beans, garlic-infused oil.' }}
    ],
    weekend:{
      sat:[
        ['Breakfast','Greek yogurt, 1/2 Mango, walnuts.'],
        ['Snack','Protein/Creatine Shake.'],
        ['Lunch','120 g grilled chicken thigh (skinless), 500 ml cucumber and radish salad tossed in 5 ml olive oil, salt, and Italian herbs.'],
        ['Dinner','120 g chicken stir-fry with 1 cup white vermicelli, bean sprouts, light soy sauce.']
      ],
      sun:[
        ['Breakfast','3 eggs, sourdough (2 S.T.E.P.S.).'],
        ['Snack','Protein/Creatine Shake.'],
        ['Lunch','120 g pan-seared lean beef strip (seasoned with salt, cumin, and oregano), roasted Russell potato, grilled zucchini.'],
        ['Dinner','3-egg omelet folded with 250 ml wilted spinach, seasoned with salt and a pinch of turmeric.']
      ]
    }
  },
  {
    name:'Menu B', tabSub:'Rotational Variety', full:'Rotational Variety',
    days:[
      { name:'Monday', loc:'WFH', train:'Weights + MT', meals:{
        b:'3 eggs, 250 ml zucchini, 2 slices sourdough.',
        s1:'Wheat Protein/Creatine Shake. 1 green banana.',
        l:'Asian Noodle Bowl: 120 g chicken, 1 cup white vermicelli, bean sprouts, lemongrass, light soy sauce.',
        s2:'90 g hard aged Cheddar or Parmesan + 15 ml almonds (or walnuts/macadamia nuts).',
        d:'Post-MT: 120 g oven-baked salmon (seasoned with cumin and a pinch of salt), 250 ml roasted eggplant drizzled with 5 ml olive oil, 1 baked medium Russell potato.' }},
      { name:'Tuesday', loc:'Office', train:null, meals:{
        b:'180 ml plain Greek yogurt + 1/2 cup Dragon fruit.',
        s1:'2 hard-boiled large eggs.',
        l:'Leftover Chicken + 8-12 Colombian yellow potatoes.',
        s2:'Wheat Protein/Creatine Shake.',
        d:'120 g chicken, 500 ml Konjac noodles, bok choy, green beans.' }},
      { name:'Wednesday', loc:'Office', train:'Evening MT', meals:{
        b:'3 eggs with spinach and Italian herbs.',
        s1:'Wheat Protein/Creatine Shake. 2 small kiwis.',
        l:'120 g chicken, 1 medium Russell potato, 250 ml spinach (cumin).',
        s2:'1/2 Palmer Mango (or 1/2 cup Blueberries / 2 small Kiwis) + 15 ml walnuts (or macadamia nuts) (Pre-training).',
        d:'Post-MT Pho-Style: 120 g thinly sliced chicken breast steeped in hot clear broth, infused with lemongrass and fresh ginger slices, 1 cup white vermicelli (3 S.T.E.P.S.), Napa cabbage. Garnish with basil and green onion tops.' }},
      { name:'Thursday', loc:'Office', train:null, meals:{
        b:'150 g firm tofu (turmeric), 250 ml cucumber, 2 slices sourdough.',
        s1:'2 hard-boiled large eggs.',
        l:'Leftover Post-Training Soup (from Wed).',
        s2:'Wheat Protein/Creatine Shake.',
        d:'120 g salmon (Italian herbs), 500 ml roasted white radish & eggplant.' }},
      { name:'Friday', loc:'WFH', train:'Weights', meals:{
        b:'3 eggs, 1/2 cup Blueberries.',
        s1:'Wheat Protein/Creatine Shake. 1/2 Palmer Mango (or 1/2 cup Blueberries / 2 small Kiwis).',
        l:'120 g chicken, 1 medium Russell potato, 250 ml green beans.',
        s2:'90 g hard aged Cheddar or Parmesan + 2 small kiwis.',
        d:'Asian Stir-fry: 150 g firm tofu, 1 cup white vermicelli, bean sprouts, spinach, light soy sauce.' }}
    ],
    weekend:{
      sat:[
        ['Breakfast','3 eggs, spinach, sourdough.'],
        ['Snack','Protein/Creatine Shake.'],
        ['Lunch','120 g stir-fried chicken breast (using 5 ml garlic-infused oil) with lemongrass, folded into 500 ml lightly wilted Napa cabbage.'],
        ['Dinner','150 g firm tofu baked with Italian herbs, 500 ml zucchini and eggplant.']
      ],
      sun:[
        ['Breakfast','Greek yogurt, 1/2 Mango, walnuts.'],
        ['Snack','2 hard-boiled eggs.'],
        ['Lunch','120 g lean beef, 8-12 Colombian yellow potatoes, spinach.'],
        ['Dinner','Protein/Creatine Shake + 90 g hard aged Cheddar or Parmesan.']
      ]
    }
  },
  {
    name:'Menu C', tabSub:'Peak Consolidation', full:'Peak Consolidation',
    days:[
      { name:'Monday', loc:'WFH', train:'Weights + MT', meals:{
        b:'3 eggs with 250 ml bean sprouts, 2 slices sourdough.',
        s1:'Wheat Protein/Creatine Shake. 1/2 cup Blueberries.',
        l:'Colombian Style: 120 g chicken, 8-12 Colombian yellow potatoes, cilantro/cumin.',
        s2:'90 g hard aged Cheddar or Parmesan + green banana.',
        d:'Post-MT Noodle Bowl: 120 g salmon, 1 cup white vermicelli, bok choy, lemongrass.' }},
      { name:'Tuesday', loc:'Office', train:null, meals:{
        b:'180 ml plain Greek yogurt, 1/2 Red Papaya, 15 ml almonds (or walnuts/macadamia nuts).',
        s1:'2 hard-boiled large eggs.',
        l:'120 g gently poached salmon, served cold over a 500 ml crisp cucumber and white radish salad, dressed with 5 ml garlic-infused olive oil and fresh dill or Italian herbs.',
        s2:'Wheat Protein/Creatine Shake.',
        d:'120 g chicken, 500 ml roasted eggplant & green beans.' }},
      { name:'Wednesday', loc:'Office', train:'Evening MT', meals:{
        b:'3 eggs, 250 ml spinach, green onion (green part).',
        s1:'Wheat Protein/Creatine Shake. 2 small kiwis.',
        l:'120 g chicken, 1 medium Russell potato, 250 ml green beans.',
        s2:'90 g hard aged Cheddar or Parmesan + 15 ml walnuts (or macadamia nuts) (Pre-training).',
        d:'Post-MT Pho-Style: 120 g chicken, clear broth, 1 cup white vermicelli, bean sprouts.' }},
      { name:'Thursday', loc:'Office', train:null, meals:{
        b:'180 ml plain Greek yogurt + 1/2 cup Dragon Fruit.',
        s1:'2 hard-boiled large eggs.',
        l:'Leftover Chicken + 8-12 Colombian yellow potatoes.',
        s2:'Wheat Protein/Creatine Shake.',
        d:'120 g salmon (Italian herbs), 500 ml roasted white radish.' }},
      { name:'Friday', loc:'WFH', train:'Weights', meals:{
        b:'3 eggs, 250 ml bok choy, 2 slices sourdough.',
        s1:'Wheat Protein/Creatine Shake. 1/2 Palmer Mango (or 1/2 cup Blueberries / 2 small Kiwis).',
        l:'Asian Noodle Bowl: 120 g chicken, turmeric, 1 cup white vermicelli, zucchini, light soy sauce.',
        s2:'90 g hard aged Cheddar or Parmesan + 1/2 Red Papaya.',
        d:'150 g firm tofu pressed and pan-crisped, served with 500 ml slow-roasted Chinese eggplant, finished with 5 ml garlic-infused oil and fresh basil leaves.' }}
    ],
    weekend:{
      sat:[
        ['Breakfast','Greek yogurt, 2 small kiwis, walnuts.'],
        ['Snack','Protein/Creatine Shake.'],
        ['Lunch','120 g chicken with 500 ml cucumber salad.'],
        ['Dinner','120 g chicken breast strips wok-tossed (lightly) with 500 ml crisp bean sprouts, Konjac noodles, a splash of light soy sauce, and turmeric.']
      ],
      sun:[
        ['Breakfast','3 eggs, sourdough (2 S.T.E.P.S.).'],
        ['Snack','Protein/Creatine Shake.'],
        ['Lunch','120 g lean beef, 1 medium Russell potato, green beans.'],
        ['Dinner','3-egg omelet with 250 ml spinach.']
      ]
    }
  }
];

/* ================= FORMATTING ================= */
function mealHTML(text) {
  let formatted = text;
  formatted = formatted.replace(/^(Post-MT Asian Bowl|Post-MT Pho-Style|Post-MT Noodle Bowl|Asian Noodle Bowl|Asian Stir-fry)\s*:\s*/, '<span class="cuisine asian">$1</span>');
  formatted = formatted.replace(/^(Colombian Style)\s*:\s*/, '<span class="cuisine col">$1</span>');
  formatted = formatted.replace(/^(Post-Weights|Post-MT|Pre-Weights)\s*:\s*/, '<span class="ctx">$1</span>');
  formatted = formatted.replace(/\((Pre-training)\)/g, '<span class="ctx">$1</span>');
  formatted = formatted.replace(/(Wheat Protein\/Creatine Shake|Protein\/Creatine Shake)/g, '<span class="shake">$1</span>');
  formatted = formatted.replace(/\b(pan-seared|pan-crisped|oven-baked|slow-roasted|stir-fried|wok-tossed|poached|grilled|steamed|roasted|baked)\b/g, '<span class="cook">$1</span>');
  formatted = formatted.replace(/(\d+(?:\s?[-–]\s?\d+)?\s?(?:g|ml))\b/g, '<b class="q">$1</b>');
  formatted = formatted.replace(/(\d+\s?S\.T\.E\.P\.S\.)/g, '<span class="steps">$1</span>');
  return formatted;
}

/* ================= RENDER MENUS ================= */
function buildMenu(menu) {
  const headCells = menu.days.map((day) => `
    <th class="${day.train ? 'training' : ''}">
      <span class="day-name">${day.name}</span>
      <span class="pills">
        <span class="pill loc">${day.loc}</span>
        ${day.train ? `<span class="pill train">${IC_DB}${day.train}</span>` : ''}
      </span>
    </th>`).join('');

  const bodyRows = ROWS.map((row) => {
    const cells = menu.days.map((day) => `<td class="${day.train ? 'training' : ''}">${mealHTML(day.meals[row.key])}</td>`).join('');
    return `<tr>
      <td class="time-col"><span class="t">${row.time}</span><span class="m">${row.label}</span></td>${cells}
    </tr>`;
  }).join('');

  const wkCard = (title, meals, className, pill) => `
    <div class="wk-card ${className}">
      <div class="wk-head"><h4>${title}</h4>${pill}</div>
      <ul class="wk-list">
        ${meals.map((meal) => `<li><span class="wl">${meal[0]}</span><span>${mealHTML(meal[1])}</span></li>`).join('')}
      </ul>
    </div>`;

  return `
    <div class="week-meta">
      <h3>${menu.name} — ${menu.full}</h3>
      <div class="legend">
        <span class="key"><span class="swatch"></span> Training day</span>
        <span class="key">${IC_PIN} Time column pinned</span>
        <span class="key"><span class="cuisine asian">Asian</span> profile</span>
        <span class="key"><span class="cuisine col">Colombian</span> profile</span>
      </div>
    </div>
    <div class="table-card">
      <div class="table-scroll">
        <table>
          <thead><tr><th class="time-col"><span class="t">Time</span><span class="m">Meal</span></th>${headCells}</tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
    </div>
    <div class="wk-divider"><span class="line"></span><span class="wk-title">${IC_CAL} Weekend Plan</span><span class="line"></span></div>
    <div class="weekend">
      ${wkCard('Saturday', menu.weekend.sat, 'train-day', `<span class="pill train">${IC_DB}Training day</span>`)}
      ${wkCard('Sunday', menu.weekend.sun, '', '<span class="pill meat">Red Meat Day</span>')}
    </div>`;
}

const tabBar = document.getElementById('tabBar');
const panelsWrap = document.getElementById('menuPanels');

MENUS.forEach((menu, index) => {
  const button = document.createElement('button');
  button.className = 'tab-btn' + (index === 0 ? ' active' : '');
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
  button.innerHTML = `${menu.name}<span class="tab-sub">${menu.tabSub}</span>`;
  button.addEventListener('click', () => switchMenu(index));
  tabBar.appendChild(button);

  const panel = document.createElement('div');
  panel.className = 'week-panel' + (index === 0 ? ' active' : '');
  panel.setAttribute('role', 'tabpanel');
  panel.innerHTML = buildMenu(menu);
  panelsWrap.appendChild(panel);
});

let currentMenu = 0;

function switchMenu(index) {
  currentMenu = index;
  tabBar.querySelectorAll('.tab-btn').forEach((button, buttonIndex) => {
    button.classList.toggle('active', buttonIndex === index);
    button.setAttribute('aria-selected', buttonIndex === index ? 'true' : 'false');
  });
  panelsWrap.querySelectorAll('.week-panel').forEach((panel, panelIndex) => panel.classList.toggle('active', panelIndex === index));
}

/* Tab keyboard navigation */
tabBar.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    switchMenu((currentMenu + 1) % MENUS.length);
  }
  if (event.key === 'ArrowLeft') {
    switchMenu((currentMenu + MENUS.length - 1) % MENUS.length);
  }
});

/* ================= NAV ACTIVE STATE ================= */
const navLinks = Array.from(document.querySelectorAll('#navLinks a'));

function updateNav(sectionId) {
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + sectionId));
}

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      updateNav(entry.target.id);
    }
  });
}, { rootMargin:'-40% 0px -55% 0px' });

['directives', 'advice', 'macros', 'schedules'].forEach((id) => obs.observe(document.getElementById(id)));

/* ================= REVEAL ANIMATION ================= */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((element) => revealObs.observe(element));

/* ================= PROGRESS BAR ================= */
const bar = document.getElementById('progress');

window.addEventListener('scroll', () => {
  const html = document.documentElement;
  const progress = html.scrollTop / Math.max(1, html.scrollHeight - html.clientHeight);
  bar.style.width = (progress * 100) + '%';
}, { passive:true });