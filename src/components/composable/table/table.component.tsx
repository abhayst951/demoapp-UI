import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

export const TableComponent = (props: any) => {

  useEffect(() => {
    const key = props.keys;
    console.log('Keys are', key);
  }, [props.keys]);
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
            {
                props.col.map((item:any, index:number) => {
                    return <th key={index}>{item.name}</th>
                })
            }
        </tr>
      </thead>
      <tbody>
        {props.row.map((item:any, index: number) => {
            return <tr key={index}>
                {props?.keys.map((key: string, ind: number) => {
                    if (key !== 'action') {
                        return <td key={ind}>{item[key]}</td>
                    } else {
                        return <Button key={ind} onClick={props.callback('edit', item)}> Edit </Button>
                    }
                })}
            </tr>
        })}
      </tbody>
    </Table>
  );
}
