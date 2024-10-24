import React from 'react'

const Table = ({columns,renderRow,data}:{columns:{header:string;  accessor:string; className?:string}[];
    renderRow:(item:any)=>React.ReactNode;
    data:any[];

}) => {
  return (
    <table className='w-full mt-4'>
        <thead>
            <tr>
                {columns.map((col)=>(
                    <th
                    className='text-left text-sm'
                    key={col.header}>{col.header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>(
                renderRow(item)
            ))}
        </tbody>
        
        </table>
  )
}
    
export default Table