// function myname(){
//     console.log('Ibro money')
// }
// myname()
// const myname = ()=>{
//     console.log('Ibro money')
// }
// myname()

// let a = 0;

// if(a=0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// let a =[1,2,3,4,5,6,7,8,9]
// for(i=1; i<=9; i++){
//     console.log(i)
// }

// let i=1;
// while(i<=9){
//     console.log(i)
//     i=i+2
// }

// let i=1;
// do{
//     console.log('ibrahim')
//     i++
// }
// while(i<=9)

// const a ='Ibrahim'
// for(i=0; i<a.length; i++){
//     console.log(a[i])
// }

const student = {
    name: 'Ibrahim',
    course: 'MERN'
}

// for(let Key in student){
//     console.log(Key)
// }

// for (let Values of Object.values(student)){
//     console.log(Values)
// }

const student2 = {
    name: 'Adisa',
    course: 'MEAN'
}

function classCode( state, city){
    return this.name+' '+this.course+' '+state+' '+city
}

console.log(classCode.call(student, 'Rajasthan', 'Jaipur'))
console.log(classCode.apply(student, ['kawara', 'Ilorin']))


