let ary = [111,'a',222,'a',222]
//数组去重、遍历判断


function unique (ary) { 
    let res = []
    for(let i of ary){
        if (res.indexOf(i) === -1){
            res.push(i)
        }
    } 
    return res
}



//使用set数据结构
function unique(ary){
    const res = new Set(ary)
    return [...res]
} 
console.log(unique(ary))

