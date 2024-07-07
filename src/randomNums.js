export default function getRandomNumber (min = 0, max = 100) {
    return Math.floor(min + Math.random() * (max + 1 - min));
};