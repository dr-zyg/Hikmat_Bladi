const proverbs = [
  {
    text: "اللي فاتك بليلة فاتك بحيلة",
    literal: "He who passed you by one night has surpassed you with a trick.",
    meaning: "Experience or a small lead gives a big advantage."
  },
  {
    text: "اللي بغا العسل يصبر لقريص النحل",
    literal: "If you want honey, endure the bee sting.",
    meaning: "To reach your goals, you must accept hardship."
  },
  {
    text: "اللِّي ما عندو كبير يشري ليه كبير",
    literal: "He who has no elder should buy one.",
    meaning: "Elders have wisdom; seek advice from experienced people."
  },
  {
    text: "اللي فرط يكرط",
    literal: "He who neglects, regrets.",
    meaning: "Don’t take things lightly or you’ll pay the price."
  },
  {
    text: "اللي دار راسو قنطرة يدوسوه الناس",
    literal: "He who acts like a bridge will be stepped on.",
    meaning: "Don’t let others take advantage of your kindness."
  },
  {
    text: "كول وما تخلي، اسمع وما تحكي",
    literal: "Eat and leave nothing, hear and say nothing.",
    meaning: "Be discreet; not everything heard should be repeated."
  },
  {
    text: "حوتة وحدة كتخنز الشواري",
    literal: "One fish rots the whole basket.",
    meaning: "One bad person can corrupt the whole group."
  }
];

function showRandomProverb() {
  const random = proverbs[Math.floor(Math.random() * proverbs.length)];
  document.getElementById("proverb-text").textContent = `❝ ${random.text} ❞`;
  document.getElementById("proverb-literal").textContent = random.literal;
  document.getElementById("proverb-meaning").textContent = random.meaning;
}

window.onload = showRandomProverb;

const searchInput = document.getElementById("search");
const resultList = document.getElementById("search-results");

searchInput?.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  resultList.innerHTML = "";
  
  if (query.length < 2) return;

  const matches = proverbs.filter(p =>
    p.text.toLowerCase().includes(query) ||
    p.meaning.toLowerCase().includes(query) ||
    p.literal.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultList.innerHTML = "<li>No matching proverbs found.</li>";
  } else {
    matches.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${p.text}</strong><br><em>${p.meaning}</em>`;
      resultList.appendChild(li);
    });
  }
});
