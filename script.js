function parseSet(input) {
  // حذف آکولاد و فاصله‌ها
  input = input.replace(/[{}]/g, "").trim();
  if (input === "") return new Set();
  const elements = input.split(/[,،]/).map(e => e.trim()).filter(e => e !== "");
  return new Set(elements);
}

function showResult(text) {
  document.getElementById("result").innerHTML = text;
}

function calculateUnion() {
  const A = parseSet(document.getElementById("setA").value);
  const B = parseSet(document.getElementById("setB").value);
  const union = new Set([...A, ...B]);
  showResult(`اجتماع (A ∪ B) = { ${[...union].join(", ")} }`);
}

function calculateIntersection() {
  const A = parseSet(document.getElementById("setA").value);
  const B = parseSet(document.getElementById("setB").value);
  const intersection = new Set([...A].filter(x => B.has(x)));
  showResult(`اشتراک (A ∩ B) = { ${[...intersection].join(", ")} }`);
}

function calculateDifference() {
  const A = parseSet(document.getElementById("setA").value);
  const B = parseSet(document.getElementById("setB").value);
  const difference = new Set([...A].filter(x => !B.has(x)));
  showResult(`تفاضل (A − B) = { ${[...difference].join(", ")} }`);
}
