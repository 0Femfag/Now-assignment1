1. An Array is a variable which can hold/ contain more than one value/ item. They can hold numerous value/items under a single variable/name.
One can access or get the values of any array element by referring them or assigning them an index number and array indexes start from 0.
To create an array, we make use of any of the KEYWORD {const, let, var } followed by the variable name then assign the values, starting with the normal bracket[] and it can comprises many element ranging Number/integer, String, Boolean, undefined and lots more.
One can alter an array element getting the value with the index then declaring it beneath and assigning the new element. You can input or have an object in an array, an array in an array and even functions in an array...

2. length method: This is use to find or return the length of an array, that's the number of array elements.
include method: This literally is use to check if an element exist in an array and it prints either true or false.
push method: It's literally use to add a new element to an array, usually at the end.
indexOf method: To get the index of a particular element in an array. 
Splice method: Use primarily to add new items to an array but when used with indexOf and with dinstict parameter setting, it's perform different tasks, which is to delete or take out an element in an array.

3.const likePost = async(req, res)=>{
  const myPost =[
  {
    id: "66c54cca55b1d6c213319859",
    title: "my first title",
    desc: "learning backend in axia afrika",
    previewPix: "our preview pix",
    detailPix: "our detail Pix",
    creatorId: "66c4dbcdde4d9f8245f928b3",
    likes: ["Femi", "Zidane", "Emmanuel"],
  }
]
  const Length = myPost.length;
  console.log(Length);
  const numerousLikes = myPost.likes;
  console.log(numerousLikes);
  const checkUserInArray = numerousLikes.includes(name);
  console.log(checkUserInArray);
  if(!checkUserInArray){
    numerousLikes.push(name);
  }else{
    const index = numerousLikes.indexOf(name);
    numerousLikes.splice(index, 0)
  }
  myPost.likes = numerousLikes;
  console.log(myPost)
  res.json({message: "Like added"})
};




