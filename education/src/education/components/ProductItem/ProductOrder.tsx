import React, { FC } from 'react';
import { TableWrapper } from '../styles/TableProduct.styled';
import '../styles/TableProduct.css';

type TProductItemOrder = {
    name: string,
    typeEngeeniring: string,
    timeStudy: number,
    sumPay: number,
}

type TProductOrder = {
    _productOrder: TProductItemOrder | null,
}

const recordProductOrder = (product: TProductItemOrder | null): React.ReactElement => (
    <tr>
        <td>{product?.name}</td>
        <td>{product?.typeEngeeniring}</td>
        <td>{product?.timeStudy}</td>
        <td>{product?.sumPay}</td>
    </tr>
);

const ProductOrder: FC<TProductOrder> = (props) => {

    return(
        <TableWrapper id='tab-dbo'>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Months, qty</th>
                <th>Price, UAH</th>
            </tr>
            {props._productOrder? recordProductOrder(props._productOrder) : <></>}
        </TableWrapper>
    );
}

export default ProductOrder;