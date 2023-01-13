

        let my_string1="4567"
            
try{
    let revstring1= my_string1.split('').reverse().join('')
     console.log("Reversed string is (string-one): "+my_string1 )
}catch(err){
    console.log("Error : "+err.message)
}finally{
    console.log("Type of my_string1 is : "+typeof my_string1)
    

}
 
try{
     let revstring2 = my_string2 . split('').reverse().join('')
     console.log("Reversed string is (string-two): "+my_string2 )
}catch(err){
    console.log("Error : "+err.message )
}finally{
    console.log("Type of my_string2 is : "+typeof my_string2 )
    

}
   