
let username = ["alice", "pop", "bob", "charlie","alic"];  // Example username list
function signup(str) {
  let flag=false

     username.forEach((ele,i) => {
      if(ele==str){
        console.log("already registered")
        flag=true
}
})
if(flag==false){
  username.push(str)
  console.log("Signup Sucessfu;")
}
}
  signup("Lavnya")  
  
  
  
  
  
  
  
  
  
// let username=["Lavanya","bon","masai"]
// function login(str,password){
//   let filtered=username.filter((el)=>el==str);
//   if(filtered.length==0){
//     console.log("User Not Found..Please Singup")
//   }else{
//    if(password=="Emp@123"){
//     console.log("Login Sucesfully")
//    }else{
//     console.log("Wrorn password")
//    }
//   }
// }
// login("Lavanya","Ep@123")

