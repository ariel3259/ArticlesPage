import { TableProps } from "../props/TableProps"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Table = <T extends {[key: string]: any},>(props: TableProps<T>): JSX.Element => {
    const render_head: JSX.Element[] = props.head.map((headField) => <th key={headField.field}>{headField.name}</th>)
    
    let render_body: JSX.Element | JSX.Element[] = (
        <tr>
            <td colSpan={props.head.length}>There are not data</td>
        </tr>
    )
    if (props.data.length > 0) {
        const formated_values: Record<string, unknown>[] = props.data.map((x: T) =>{
            const value:  {[key: string] : unknown} = {}
            let keys = Object.keys(x)
            keys = keys.filter((x) => !(props.head.some((headField) => x == headField.field)))
            for (const key in keys) {
                value[key] = x[key]
            }
            return value
        }) 
        render_body = formated_values.map(
            (x, i) => {
                const values = Object.values(x)
                const render_values: JSX.Element[] = values.map((y, i) => <td key={i}>{`${y}`}</td>)
                const row = <tr key={i}>
                    {render_values}
                </tr>
                return row
            }
        )
    }
    return (
        <table id={props.table_id}>
            <thead id={props.thead_id}>
                <tr>
                    {render_head}
                </tr>
            </thead>
            <tbody id={props.tbody_id}>
                    {render_body}
            </tbody>
        </table>
    )
}