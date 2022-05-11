function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));

let availablePatterns = ["argyle", "tartan", "cross", "tablecloth"]; // we could probably get these programatically
let availableColours = [
  // "maroon",
  // "darkgreen",
  // "darkolivegreen",
  // "brown",
  // "saddlebrown",
  // "sienna",
  // "midnightblue",
  // "peru",
  // "white",
 	// "snow",
 	// "honeydew",
 	// "mintcream",
 	// "azure",
 	// "aliceblue",
 	// "ghostwhite",
 	// "whitesmoke",
 	// "seashell",
 	// "beige",
 	// "oldlace",
 	// "floralwhite",
 	// "ivory",
 	// "antiquewhite",
 	// "linen",
 	// "lavenderblush",
  // "mistyrose",
  // "Orchid",
  // "PaleGoldenRod",
  // "PaleGreen",
  // "PaleTurquoise",
  // "PaleVioletRed",
  // "PapayaWhip",
  // "PeachPuff",
  // "Peru",
  // "Pink",
  // "Plum",
//   "PowderBlue",
//   "RosyBrown",
//   "RoyalBlue",
//   "lightGray",
//   "lightGreen",
// "Thistle",
// ---------------
"#DFC7C1",
"#F4DCD6",
"#B2D9EA",
"#84B4C8",
"#619196",
// ---------------
"#F8CA9D",
"#8EC9BB",
"#C5D7C0",
"#FB8E7E",
"#F2CF59",
"#FA6E4F",
// ---------------
"#C3E4FD",
"#B5BA7E",
"#F4AFB3",
"#E18D96",
"#A02C2D",

// ---------------
"#B5DDD1",
"#D7E7A9",
"#D3C0F9",
"#F99A9C",
"#FDBCCF",
// ---------------
// ---------------
"#AB6393",
"#9C8ADE",
"#E69288",
"#FEB68E",
"#E8CCC0",
// ---------------
// ---------------
"#E17E76",
"#E3BAA8",
"#AA7B6F",
"#FED797",
"#2E8364",
// ---------------
// ---------------
"#8AC0DE",
"#F0C5D5",
"#F5C9B2",
"#EAB159",
"#9E6B55",
// ---------------
// ---------------
"#ADDDCE",
"#70AE98",
"#E6B655",
"#F0A35E",
"#CA7E8D",
// ---------------
// ---------------
"#F9E1E0",
"#FEADB9",
"#BC85A3",
"#9799BA",
"#487CA6",
// ---------------
// ---------------
"#70AE98",
"#ECBE7A",
"#E58B88",
"#9DABDD",
"#D9EFFC",
// ---------------
// ---------------
"#38908F",
"#B2EBE0",
"#5E96AE",
"#FFBFA3",
"#E08963",
// ---------------

"#C8B4BA",
"#F3DD83",
"#C1CD97",
"#E18D96",
"#909090",
// ---------------
"#D2A3A9",
"#E6DCE5",
"#EBC3C1",
"#ECAD8F",
"#AF6E4E",
// ---------------
"#89AEB2",
"#F1E0B0",
"#F1CDB0",
"#E7CFC8",
// ---------------
// "#",
// "#",
// "#",
// "#",
// "#",
// ---------------

];

// assign a random height, pattern and colour to each book
spines.map(function (s, i) {
  let randomHeight = getRandomInt(220, 290);
  s.style.height = `${randomHeight}px`;
  s.style.top = `${280 - randomHeight}px`;

  let randomPattern = randomChoice(availablePatterns);
  s.style.backgroundImage = `var(--${randomPattern})`;

  let randomColor = randomChoice(availableColours);
  s.style.backgroundColor = randomColor;

  covers[i].style.height = `${randomHeight}px`;
  covers[i].style.top = `${280 - randomHeight}px`;

  tops[i].style.top = `${280 - randomHeight}px`;
});
