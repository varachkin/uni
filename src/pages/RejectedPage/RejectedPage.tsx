import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { ListStatusProducts } from "../../components/Client/ListStatusProducts/ListStatusProducts";
import { languageConfig } from "../../langugeConfig";
import type { RootState } from "../../store/store";
import { ButtonTimer } from "../../components/ButtonTimer/ButtonTimer";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import ServicePageWrapper from "../ServicePageWrapper/ServicePageWrapper";
import useStartHook from "../../hooks/useStartHook";
import { ListStatusProducts } from "../../components/ListStatusProducts/ListStatusProducts";
import { TouchScreenList } from "../../components/TouchScreenList/TouchScreenList";

// Define the types for the location.state
interface Product {
    product_id: number;
    product: string; // Add the correct type for your product
}

interface TransactionData {
    transactionID?: string;
}

interface LocationState {
    success_release?: Product[];
    fault_release?: Product[];
    transactionData?: TransactionData;
}

// Define the types for the content state
interface Content {
    title: string;
    subtitle: string;
    button: string;
    path: string;
}

const fakeError = [{
    product_id: '1', count: 2, product: {
        product_name: {
            pl: 'Coca-Cola',
            en: 'Coca-Cola'
        },
    }
},
{
    product_id: '1', count: 21, product: {
        product_name: {
            pl: 'Pepsi',
            en: 'Pepsi'
        },
    }
}, {
    product_id: '1', count: 1, product: {
        product_name: {
            pl: 'Lays',
            en: 'Lays'
        },
    }
}, {
    product_id: '1', count: 21, product: {
        product_name: {
            pl: '7up',
            en: '7up'
        },
    }
}, {
    product_id: '1', count: 1, product: {
        product_name: {
            pl: 'Unknown',
            en: 'Unknown'
        },
    }
}]

export default function RejectedPage() {
    const { language } = useSelector((state: RootState) => state.configurationReducer);
    const navigate = useNavigate();
    const location = useLocation();
    const start = useStartHook()
    const locationState = location.state as LocationState | null; // Explicitly type location.state
    const { cart } = useSelector((state: RootState) => state.dataReducer);

    const [content, setContent] = useState<Content>({
        title: languageConfig[language].SOMETHING_WENT_WRONG_PAGE.SOMETHING_WENT_WRONG_TITLE,
        subtitle: languageConfig[language].SOMETHING_WENT_WRONG_PAGE.SOMETHING_WENT_WRONG_SUBTITLE,
        button: languageConfig[language].BUTTONS.BACK,
        path: '/',
    })

    // Function to compare arrays and return matched products
    const compareArrayProducts = (array?: Product[]) => {
        if (array) {
            return cart
                .map((item: any) => {
                    const productMatch = array.find(product => product.product_id === item.product_id);
                    return productMatch ? { ...item, product: item.product } : null;
                })
                .filter((item: Product | null) => item !== null);
        } else {
            return [];
        }
    };

    useEffect(() => {
        if (locationState) {
            setContent(prev => ({
                ...prev,
                success_release: compareArrayProducts(locationState.success_release),
                fault_release: compareArrayProducts(locationState.fault_release),
            }));
        }
    }, [locationState]);

    const transactionID = locationState?.transactionData?.transactionID || null;

    const handleGoStart = () => {
        if (transactionID) {
            navigate('/service-email-confirmation', { state: { transactionID } });
        } else {
            start()
        }
    };

    return (
        <ServicePageWrapper className="error">
            <div className="service-page-content">
                <div className="o-circle c-container__circle o-circle__sign--failure">
                    <div className="o-circle__sign"></div>
                </div>
                <TouchScreenList height={75} center={true}>
                    <AnimatedTitle
                        title={languageConfig[language].SERVICE_PAGE.TITLE_ERROR}
                        subTitle={<ListStatusProducts {...{ success_release: [], fault_release: [...fakeError] }} />}
                    />
                </TouchScreenList>
                <ButtonTimer
                    callback={handleGoStart}
                    onClick={handleGoStart}
                    status="error"
                >
                    {content.button}
                </ButtonTimer>
            </div>
        </ServicePageWrapper>
    );
}
