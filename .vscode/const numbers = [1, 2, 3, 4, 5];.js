const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  setTimeout(() => {
    console.log(`Number: ${numbers[i]}`);
  });
}
