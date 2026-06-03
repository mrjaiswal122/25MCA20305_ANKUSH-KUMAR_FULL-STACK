let OriginalData = [
  { name: "Aman", marks: 85 },
  { name: "Priya", marks: 45 },
  { name: "Rohit", marks: 72 },
  { name: "Neha", marks: 91 },
  { name: "Karan", marks: 38 }
];



async function  fetchStudents(){

    let prom = new Promise((resolve)=>{
        setTimeout(() => {
            resolve(OriginalData);
        },0);
    
    });


  
    let data = await prom;



    let names= data.map((firstRow,i)=>firstRow.name); 
    let passedStudents = data.filter((d)=>d.marks>=50);
    let total = data.reduce((acc,curr)=>acc+curr.marks,0);

    let avg = total/names.length;

    return new Promise((resolve)=> setTimeout(() => {
        resolve({names,passedStudents,total, avg})
    },2000));
}
async function run (){

   const {names,passedStudents,total, avg}= await fetchStudents()
   console.log("Names: ",names)
   console.log("Passed Students:", passedStudents)
   console.log("Total Marks :", total)
   console.log("Average Marks:", avg)

 
}
run()