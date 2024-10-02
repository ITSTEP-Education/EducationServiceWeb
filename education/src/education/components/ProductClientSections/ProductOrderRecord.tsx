import { FC, useState, useEffect } from "react";
import axios from 'axios';
import { Display } from "../../styled/General.styled";
import { TitleWrapper, BtnWrapper } from "../../styled/ProductItem.styled";
import ProductOrder from "../ProductItem/ProductOrder";
import { dictNameToRoute } from "../../contexts/ProductItemData";
import { TClientProperty } from '../../blocks/product/Education';

interface IProductOrderRecord{
    _width?: number,
    nameProduct: string | null,
    _clientProperty: TClientProperty | null,
}

type TProductItemOrder = {
    name: string,
    typeEngeeniring: string,
    timeStudy: number,
    sumPay: number
}

const ProductOrderRecord: FC<IProductOrderRecord> = (props) => {

    const [productOrder, setProductOrder] = useState<TProductItemOrder | null>({name:'none', typeEngeeniring:'none', timeStudy:0, sumPay:0});
    const [responce, setResponce] = useState<string>('');

    const handleProductOrder = () => {

        const productOrderPost = axios.create({
            baseURL: 'https://localhost:7296/api/v1/Education',
            method: 'post',
            responseType: 'json',
            headers:{
                'Content-Type': 'application/json'
            }
        });
    
        setResponce('');
        
        let queryName = dictNameToRoute[props.nameProduct == null ? 'none' : props.nameProduct] == undefined ? props.nameProduct : dictNameToRoute[props.nameProduct == null ? 'none' : props.nameProduct];
        productOrderPost.post(`product-order-dto?name=${queryName}`,  props._clientProperty)
        .then((responce) => {           
            setProductOrder(responce.data);
        })
        .catch((error) => {
            setProductOrder(null);
        });       
    }

    useEffect(handleProductOrder, [props.nameProduct, props._clientProperty]);

    const handlePostClientOrder = () => {
        const clientOrderPost = axios.create({
            baseURL: 'https://localhost:7296/api/v2/Education',
            method: 'post',
            responseType: 'json',
            headers:{
                'Content-Type': 'application/json'
            }
        });
    
        clientOrderPost.post('product-order', productOrder)
        .then((responce) => {
            console.log(responce.data);
            setResponce(responce.data);
        })
        .catch((error) => {
            setResponce('error');
        });
    }

    const handleResponce = (): string =>{
        if (responce == '') return 'JUST ORDER IT';
        else if (responce == 'error') return 'TRY AGAIN';
        
        return `ORDER: ${responce}`;
    }

    return(
        <div style={{width: `${props._width || 500}px`}}>
            <Display _justify='none'>
                <TitleWrapper style={{width:'450px', textAlign: 'center'}}>ORDER DETAILS</TitleWrapper>
                <BtnWrapper onClick={handleProductOrder} disabled={true}>PROPOSAL</BtnWrapper>
            </Display>
            <ProductOrder _productOrder={productOrder}/>
            <Display _justify='none'>
                <TitleWrapper onClick={handlePostClientOrder} style={{width:'500px', textAlign: 'center', cursor: 'pointer'}} bgColor="#db6030">{handleResponce()}</TitleWrapper>
            </Display>
        </div>
    );
}

export default ProductOrderRecord;