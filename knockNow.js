/**
 * Since I don't know what type of data will be in the input, 
 * So I will do it as an array of string as variable data below
 */

/**
 * The desired data object will be like:
 * {
 * name: "L4",
 * address: "123 kings road",
 * date: 2022
 * }
 * 
 * we then get the adress, then add up all the listing with the same address
 */


const input = [
  "L4, 123 kings road,2022",
  "L1, 123 kings road,2020",
  "L2, 20 queen road,1990",
  "L5, 20 queen road,2018",
  "L6, 20 queen road,1990",
  "L7, 593 Dundas st,2023",
  "L8, 593 Dundas st,2005",
  "L9, 210 Yonge st,2000",
  "L10, 210 Yonge st,2004",
  "L11, 210 Yonge st,1995",
  "L3, 210 Yonge st,2013"
]

const convertedData = [];
let currentAddress;
let date;
let currentName;
let addressList=[];
let mostRecentList = [];
const output = [];


const convertedInput = (input) => {
    for (let i = 0; i < input.length; i++) {
        const item = input[i].split(',');
        
        convertedData.push({
            name: item[0],
            address: item[1].trim(),
            date: parseInt(item[2])
        });
    } //Loop to convert data to array of object
}

const outputObject = (data) => {
    for (let i = 0; i < data.length; i++) {
        currentAddress = data[i].address
        date = data[i].date;
        currentName = convertedData[i].name;
    
        if (!addressList.includes(currentAddress)) {
            addressList.push(currentAddress);
            mostRecentList.push(data[i])
        } else {
            for (let j = 0; j < mostRecentList.length; j++) {
                if(currentAddress === mostRecentList[j].address) {
                    if (mostRecentList[j].date < date) mostRecentList[j].name = currentName
                }
            }
        }
    }//Loop to get most recent List
}

const getAnswer = (recentList) => {
    for (let i=0; i < recentList.length; i++) {
        output.push(recentList[i].name)
    } //Loop to get listName only
}


//Execute:
convertedInput(input);
outputObject(convertedData);
getAnswer(mostRecentList);

console.log(output)
