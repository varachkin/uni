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
    success_release: Product[];
    fault_release?: Product[];
}

const fakeSuccess = [{
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

export default function SuccessPage() {
    const { language, emailConfirmation } = useSelector((state: RootState) => state.configurationReducer);
    const navigate = useNavigate();
    const location = useLocation();
    const start = useStartHook()
    const locationState = location.state as LocationState | null; // Explicitly type location.state
    const { cart } = useSelector((state: RootState) => state.dataReducer);

    const [content, setContent] = useState<Content>({
        title: languageConfig[language].SERVICE_PAGE.TITLE_SUCCESS,
        subtitle: languageConfig[language].SERVICE_PAGE.SUBTITLE_SUCCESS,
        button: languageConfig[language].BUTTONS.FINISH,
        path: '/',
        success_release: [],
    });

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
        if (emailConfirmation) {
            navigate('/service-email', { replace: true, state: { transactionID } });
        } else {
            start()
        }
    };

    return (
        <ServicePageWrapper className="success">
            <div className="service-page-content">
                <div className="o-circle c-container__circle o-circle__sign--success">
                    <div className="o-circle__sign"></div>
                </div>
                <TouchScreenList height={75} center={true}>
                    <AnimatedTitle
                        title={languageConfig[language].SERVICE_PAGE.TITLE_SUCCESS}
                        subTitle={<ListStatusProducts {...{ success_release: [...fakeSuccess], fault_release: [] }} />}
                    />
                </TouchScreenList>
                <ButtonTimer
                    callback={handleGoStart}
                    onClick={handleGoStart}
                    status="success"
                >
                    {content.button}
                </ButtonTimer>
            </div>
        </ServicePageWrapper>
    );
}
