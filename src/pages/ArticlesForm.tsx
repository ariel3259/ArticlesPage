import React from "react";
import {Table} from "../components/Table"
import { Articles } from "../model/Articles"
import { HeadField } from "../props/TableProps"

export const ArticlesForm: React.FC = () => {
    const fields: HeadField[] = [
        {
            name: "Name",
            field: "name"
        },
        {
            name: "Price",
            field: "price"
        },
        {
            name: "Stock",
            field: "stock"
        }
    ]
    return (
        <>
            <div id='form'>
                <div className="form-head">
                    <h1>Articles</h1>
                </div>
                <div className="table">
                    <Table<Articles> 
                        table_id="articles_table" 
                        thead_id="articles_thead" 
                        tbody_id="articles_tbody"
                        can_be_deleted={true}
                        is_mutable={true}
                        head={fields}
                        data={[]}/>
                </div>
            </div>
        </>
    )
}