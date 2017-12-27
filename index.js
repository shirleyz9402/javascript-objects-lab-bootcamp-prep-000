var recipes = {}
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]: value})
}
function destructivelyUpdateObjectWithKeyandValue(objext,key,value){
 object[key] = value
 return object
}