import { useSelector } from "react-redux";
import { languageConfig } from "../../langugeConfig";
import type { RootState } from "../../store/store";
import { v4 as uuidv4 } from 'uuid';

interface Product {
    product_id: string; // Assuming product IDs are strings; update as needed
    count: number; // Count of products
    product: {
        product_name: {
            [key: string]: string; // Product name is localized by language
        };
    };
}

interface ListStatusProductsProps {
    fault_release?: Product[]; // Array of faulty products (optional)
    success_release?: Product[]; // Array of successful products (optional)
}

export const ListStatusProducts = ({
    fault_release = [],
    success_release = [],
}: ListStatusProductsProps): JSX.Element => {
    const { language } = useSelector((state: RootState) => state.configurationReducer);

    return (
        <div className="list-wrapper">
            {!!success_release?.length && (
                <div className="succes-products-list products-list">
                    <h4>{languageConfig[language].SERVICE_PAGE.SUCCESS.toUpperCase()}:</h4>
                    {success_release.map((item, index) => (
                        <div className="status-product-list-row" key={uuidv4()}>
                            <div className="o-circle c-container__circle o-circle__sign--success">✔︎</div>
                            <div className="status-product-list-value">
                                <span style={{ animationDelay: `${index + 0.5}s` }}>
                                    {item?.product?.product_name[language]?.length > 28 ? item?.product?.product_name[language].slice(0, 27) + '...' :
                                        item?.product?.product_name[language]}
                                </span>
                                <span>
                                    {item?.count}
                                    {languageConfig[language].SERVICE_PAGE.LABEL_PCS}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!!fault_release?.length && (
                <div className="fail-products-list products-list">
                    <h4>{languageConfig[language].SERVICE_PAGE.ERROR.toUpperCase()}:</h4>

                    {fault_release.map((item, index) => (
                        <div className="status-product-list-row" key={uuidv4()}>
                            <div className="o-circle c-container__circle o-circle__sign--failure">✘</div>
                            <div className="status-product-list-value">
                                <span style={{ animationDelay: `${index + 0.5}s` }}>
                                    {item?.product?.product_name[language]?.length > 28 ? item?.product?.product_name[language].slice(0, 27) + '...' :
                                        item?.product?.product_name[language]}
                                </span>
                                <span>
                                    {item?.count}
                                    {languageConfig[language].SERVICE_PAGE.LABEL_PCS}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
