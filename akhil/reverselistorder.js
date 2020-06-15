function reverseList(list)
{
var array = [];
for (var a = list.length-1; a >=0; a--)
{
array.push(list[a]);
}
return array;
}