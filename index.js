
let username = ["alice", "bob", "charlie","alice"];  // Example username list
function signup(str) {
    let filtered = username.filter((el) => el == str );
      // Filter to find matches
      if(filtered.length==0){
        username.push(str)
        console.log("Signup Succesful")
      }else{
        console.log("already registeed")
      }
    // console.log(filtered);  // Output the result
  }
  
  signup("alice", "bob");  // Test with "bob"
  