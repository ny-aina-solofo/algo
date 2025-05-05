/*  
    Regular expression objects have properties. One such property is source ,
    which contains the string that expression was created from. Another property
    is lastIndex , which controls, in some limited circumstances, where the next
    match will start
*/

const getLastIndex = (str)=> {
    // global ( g ) or sticky ( y ) option enabled
    let pattern = /y/g; 
    
    pattern.lastIndex = 3;
    let match = pattern.exec(str);
    const index = match.index ;
    const lastindex = pattern.lastIndex; 
    return lastindex;
} 
console.log(getLastIndex("xyzzy")); // → 5

