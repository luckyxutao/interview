var obj = {name:"二月",age:"15"};
var str = "{{name}}很厉害，才{{age}}岁";

str = str.replace(/\{\{(\w+)\}\}/g,(matched,g1)=>{
    return obj[g1];
})
console.log(str);
