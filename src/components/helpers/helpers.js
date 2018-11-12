const capFirstChar = stringToCap => stringToCap[0].toUpperCase() + stringToCap.slice(1);

const randomNum = arrayLength => Math.floor(Math.random() * arrayLength);

export default { capFirstChar, randomNum };
