function generateUniqueId() {
  return "id-" + Date.now();
}

console.log(generateUniqueId());

const id = crypto.randomUUID();
console.log("🚀 ~ id:", id);
