import { updateChart } from "./graph.js";

export function insertionSort(numbers) {
    let i = 1;
    while (i < numbers.length) {
        let j = i;
        while (j > 0 && numbers[j - 1] > numbers[j]) {
            var temp = numbers[j];
            numbers[j] = numbers[j - 1];
            numbers[j - 1] = temp;
        } 
        console.log("Updating graph...")
        updateChart(numbers);
        i++;
    }
}