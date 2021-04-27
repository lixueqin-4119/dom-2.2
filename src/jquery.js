window.jQuery=function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements=document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements=selectorOrArray
    }
 
 return{
     addClass(className){
         for(let i=0;i<elements.length;i++){
             const element=elements[i]
             element.classList.add(className)
         }
         return this
     },
     find(selector){
       let array=[]
       for(let i=0;i<elements.length;i++){//用element代替document查找范围
        const elements2=Array.from(elements[i].querySelectorAll(selector))
        array=array.concat(elements2)
}
     array.oldApi=this//this是oldApi
     return jQuery(array)
     },
     each(fn){//遍历当前所有元素，你给我个函数就行了
         for(let i=0;i<elements.length;i++){
             fn.call(null,elements[i],i)
         }
         return this//this就是当前的api
     },
     parent(){
        const array = []
        this.each((node)=>{
          if(array.indexOf(node.parentNode) === -1){
            array.push(node.parentNode)
          }
        })
        return jQuery(array)
      },
      children(){
        const array = []
        this.each((node)=>{
          array.push(...node.children)
        })
        return jQuery(array)
      },
      print(){
        console.log(elements)
      },
     oldApi:selectorOrArray.oldApi,
     end(){
       return this.oldApi //this是newApi
}
 }
}