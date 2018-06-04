var data =[
{name: "Zachary", age:28},
{name: "Metteo", age:24},
{name: "Nicholas", age:29},
]

function createComparisonFunction(propertyName){
return function compareByName(obj1, obj2){
  var value1 = obj1[propertyName]
  var value2 = obj2[propertyName]
  if(value1 < value2){
    return -1;
    }else if (value1 > value2){
    return 1;
    }else {
    return 0;
    }
  }
}

data.sort(createComparisonFunction("name"));
console.log(data);

data.sort(createComparisonFunction("age"));
console.log(data);



