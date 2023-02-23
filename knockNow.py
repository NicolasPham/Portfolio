list = [  "L4, 123 kings road,2022",
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

convertedData = []
data = {}
addresslist = []
mostRecentList = []
answer = []

def convertData(input):
    for i in range(len(input)):
        data["name"] = input[i].split(",")[0]
        data["address"] = input[i].split(",")[1]
        data["year"] = input[i].split(",")[2]
        convertedData.append(data.copy())

def outputObject (data) :
  for i in range(len(data)):
    currentAddress = data[i]["address"]

    if (addresslist.count(currentAddress) <=0):
      addresslist.append(currentAddress)
      mostRecentList.append(data[i])
    else :
      for list in mostRecentList:
        if list["address"] == currentAddress and list["year"] < data[i]["year"]:
          list["name"] = data[i]["name"]
          list['year'] = data[i]['year']

def getAnswer (list):
  for item in list:
    answer.append(item["name"])
  print(answer)
    


convertData(list)
outputObject(convertedData)
getAnswer(mostRecentList)