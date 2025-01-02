import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { languageConfig } from '../../langugeConfig';
import { CartIcon } from '../CartIcon/CartIcon';
import type { RootState } from '../../store/store';

export const Footer = () => {
    const navigate = useNavigate()
    const { language, currency, hasCart } = useSelector((state: RootState) => state.configurationReducer)
    const { cart } = useSelector((state: RootState) => state.dataReducer)

    const handleNavigateToCart = () => {
        navigate('/cart')
    }

    const total = cart.reduce((total, product) => {
        return {
            totalPrice: total.totalPrice + product?.quantity * (product?.product?.product?.price?.discounted || product?.product?.product?.price?.regular),
            totalQuantity: total.totalQuantity + product?.quantity
        };
    }, {totalPrice: 0, totalQuantity: 0})


    return (
        !!hasCart && (<footer className="footer">
            <div className="footer-info-block">
                {!!cart?.length && (
                    <div className="footer-info-block-row">
                        <div>{languageConfig[language].FOOTER.TOTAL}</div>
                        <div>
                            {`${total.totalPrice.toFixed(2)} ${currency}`}
                        </div>
                    </div>
                )}
            </div>
            <div className='footer-cart-block'>
                <CartIcon onClick={handleNavigateToCart} quantity={total.totalQuantity} />
            </div>
        </footer>)
    )
}