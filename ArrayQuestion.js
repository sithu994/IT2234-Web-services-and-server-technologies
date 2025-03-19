//01 practice
console.log("01 practice")
console.log("Array:")
let number=[1,2,3,4]
console.log(number);

//02 practice
console.log("02 practice")
for(let i=0;i<number.length;i++)
{
	console.log(number[i])
}
console.log()

//03 practice
console.log("03 practice")
number.forEach((n)=>{
	console.log(n)
})
console.log()

//04 practice
console.log("04 practice")
//find max
let num=[3,6,8,23,78]
let max=num[0]
num.forEach((n) =>{/*
	if(a>max)
	{
		max=a;
	}
	*/(max<n)&&(max=n)
})
console.log("max number:"+max);

//05 practice
console.log("05 practice")
//print nested Array
//[[1,2,30],[5,6],[8,5,3]]
console.log("Nested array:");
let arr2 =[
		[1,2,30],
		[5,6],
		[8,5,3]]
arr2.forEach((n)=>{
	n.forEach((i)=>{
		console.log(i)
	})
})
//06 practice
console.log("06 practice")
/*a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the common element between a and b
*/
let a = [4,5,6,3,7];
let b = [8,3,2,1,5];
let commonElemrnt =[];
let commomElementsize=0;
for(let c=0;c<a.length;c++){
	for(let d =0;d<b.length;d++){
		if(a[c]==b[d])
		{
			commonElemrnt[commomElementsize] = a[c];
			commomElementsize++;
			break;
		}
	}
}
console.log("common element:"+commonElemrnt);
//07 practice
console.log("07 practice")
//arr =[1,2,3,4,5,6,]
//target=7
//write a code find the all pairs that  sum up to the target
const arr = [1, 2, 3, 4, 5, 6];
const target = 7;
const pairs = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      pairs.push([arr[i], arr[j]]);
    }
  }
}console.log("Pairs that sum up to", target, ":", pairs);

//08 practice
console.log("08 practice")
//[4,8,3,4,3,2,1,,8,4]
//find the most frequent element in the array
const arrlist = [4, 8, 3, 4, 3, 2, 1, 8, 4]; 
const frequencyMap = {};
let maxFreq = 0;
let mostFrequentElement = null;
for (let num of arrlist) {
  frequencyMap[num] = (frequencyMap[num] || 0) + 1;
   if (frequencyMap[num] > maxFreq) {
    maxFreq = frequencyMap[num];
    mostFrequentElement = num;
  }
}
console.log("Most Frequent Element:", mostFrequentElement);
console.log("Frequency:", maxFreq);

//09 practice
console.log("09 practice")
//array operation 
//push and pop
arr3=['a','b','c']
console.log(arr3);
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

//10 practice
console.log("10 practice")
//reverse the array using  push and pop
//a b c d -> d c b a 
let arr1=['a','b','c','d']
console.log(arr1)
let arrlength = arr1.length;
let arr4 =[]
for(let i=0; i < arrlength; i++)
{
	arr4.push(arr1.pop())//arr1 pop and arr2 push
}
arr1=arr4;
console.log("reverse number :"+arr1)
//JSON
//{KEY: VALUE}
let student = {regno:'2021/ICT/01',name:'james',age:'21',course:'IT',skills:['Java','JS','C++']}
console.log(student)
console.log(student.name)
let students =[
{regno:'2021/ICT/01',name:'james',age:'21',course:'IT'},
{regno:'2021/ICT/02',name:'ravi',age:'22',course:'IT'},
{regno:'2021/ICT/03',name:'gaya',age:'23',course:'IT'}
]
console.log(student)
/*
Task 11
Define 10 students in JSON
Store it in an array
Find the female students
Find the students who are following IT course
Find the max and average GPA among the students
*/
console.log("11 practice")
const studentlist = [
  {"id": 1, "name": "John Doe", "gender": "Male", "course": "IT", "gpa": 3.8},
  {"id": 2, "name": "Jane Smith", "gender": "Female", "course": "Business", "gpa": 3.6},
  {"id": 3, "name": "Alice Brown", "gender": "Female", "course": "IT", "gpa": 3.9},
  {"id": 4, "name": "Bob Johnson", "gender": "Male", "course": "Engineering", "gpa": 3.2},
  {"id": 5, "name": "Emily Davis", "gender": "Female", "course": "IT", "gpa": 4.0},
  {"id": 6, "name": "Michael Wilson", "gender": "Male", "course": "IT", "gpa": 3.5},
  {"id": 7, "name": "Sarah Miller", "gender": "Female", "course": "Medicine", "gpa": 3.7},
  {"id": 8, "name": "Chris Evans", "gender": "Male", "course": "Business", "gpa": 3.4},
  {"id": 9, "name": "Sophia Turner", "gender": "Female", "course": "IT", "gpa": 3.8},
  {"id": 10, "name": "David White", "gender": "Male", "course": "Engineering", "gpa": 3.1}
];

// Find Female Students 
let femaleStudents = [];
for (let i = 0; i < studentlist.length; i++) {
  if (studentlist[i].gender === "Female") {
    femaleStudents.push(studentlist[i]);
  }
}
console.log("Female Students:", femaleStudents);

// Find Students in IT Course
let itStudents = [];
for (let i = 0; i < studentlist.length; i++) {
  if (studentlist[i].course === "IT") {
    itStudents.push(studentlist[i]);
  }
}
console.log("Students in IT Course:", itStudents);

// Find Maximum and Average GPA
let totalGPA = 0;
let maxGPA = studentlist[0].gpa;

for (let i = 0; i < studentlist.length; i++) {
  totalGPA += studentlist[i].gpa;
  if (studentlist[i].gpa > maxGPA) {
    maxGPA = studentlist[i].gpa;
  }
}

let avgGPA = totalGPA / studentlist.length;
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));
