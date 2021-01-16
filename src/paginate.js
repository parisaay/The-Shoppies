import _ from 'lodash'

export const paginate=(pageSize,items,pageNumber)=>{
const startIndex=(pageNumber-1)* pageSize   
return _(items)
.slice(startIndex)
.take(pageSize)
.value()
}


