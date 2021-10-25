import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout';
import { getProductsBySlug } from '../../store/action'
import { generatePublicUrl } from '../../urlConfig';
import './style.css'

/**
* @author
* @function ProductListPage
**/

export const ProductListPage = (props) => {

    const product = useSelector(state => state.product)
    const [priceRange, setPriceRange] = useState({
        under10k:5000,
        under15k:15000,
        under25k:25000,
        under35k:35000,
        under60k:60000
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug))
    }, []);

    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((item, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>{props.match.params.slug} mobile under {priceRange[item]}</div>
                                <button>View All</button>
                            </div>
                            <div style={{display:'flex'}}>
                                {
                                    product.productsByPrice[item].map(item =>
                                        <div className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(item.images[0].img)} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div className="productHover" style={{ margin: '5px 0' }}>{item.title}</div>
                                                <div>
                                                    <span>4.4</span>&nbsp;
                                                    <span>2512</span>
                                                </div>
                                                <div className="productPrice">{item.regularPrice}</div>
                                            </div>
                                        </div>)
                                }

                            </div>
                        </div>
                    )
                })
            }

        </Layout>
    )

}

export default ProductListPage;