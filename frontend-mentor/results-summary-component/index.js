var data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]

const resultStats = document.createElement("div");

resultStats.className = "result-stats flex flex-col gap-4";
  const getColor = (category) => {
    var colors = {
      'Reaction': {
        bgColor: 'bg-red-100',
        textColor: 'text-red-500'
      },
      'Memory': {
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-500'
      },
      'Verbal': {
        bgColor: 'bg-green-100',
        textColor: 'text-green-500'
      },
      'Visual': {
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-500'
      }
    }
    return colors[category]
  }
data.forEach((entry) => {
  const element = document.createElement("div");
  const {bgColor, textColor} = getColor(entry.category);

  element.innerHTML = `
      <div class="flex justify-between ${bgColor} p-2 rounded-lg items-center font-bold text-xs">
        <div class="${textColor} flex gap-2">
          <img class="w-4 h-4" src = "${entry.icon}" alt="Icon ${data.category}"/>
          <span>${entry.category}</span>
        </div>
        <div>
          <span>${entry.score}</span>
          <span class="text-gray-600">/100</span>
        </div>
      </div>
  `
  document.getElementById('summary-stats').appendChild(element)
});
