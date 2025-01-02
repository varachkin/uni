import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/data/dataSlice";
import { useEffect } from "react";
import type { RootState } from "../../store/store";
import { languageConfig } from "../../langugeConfig";
import { AnimatedTitle } from "../../components/AnimatedTitle/AnimatedTitle";
import { ButtonTimer } from "../../components/ButtonTimer/ButtonTimer";
import useStartHook from "../../hooks/useStartHook";
import ServicePageWrapper from "../ServicePageWrapper/ServicePageWrapper";
import { ListStatusProducts } from "../../components/ListStatusProducts/ListStatusProducts";
import { TouchScreenList } from "../../components/TouchScreenList/TouchScreenList";

interface Product {
    product_id: number;
    [key: string]: any; // Allows additional properties for flexibility
}

interface LocationState {
    transactionData?: {
        transactionID: string;
    };
    success_release?: Product[];
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
            pl: 'Pepsi lorem ipsum lorem ipsum lorem ipsum',
            en: 'Pepsi'
        },
    }
},
{
    product_id: '1', count: 21, product: {
        product_name: {
            pl: 'Pepsi lorem ipsum lorem ipsum lorem ipsum',
            en: 'Pepsi'
        },
    }
},
{
    product_id: '1', count: 21, product: {
        product_name: {
            pl: 'Pepsi lorem ipsum lorem ipsum lorem ipsum',
            en: 'Pepsi'
        },
    }
},
{
    product_id: '1', count: 21, product: {
        product_name: {
            pl: 'Pepsi lorem ipsum lorem ipsum lorem ipsum',
            en: 'Pepsi'
        },
    }
},
{
    product_id: '1', count: 21, product: {
        product_name: {
            pl: 'Pepsi lorem ipsum lorem ipsum lorem ipsum',
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
}, {
    product_id: '1', count: 21, product: {
        product_name: {
            pl: '7up',
            en: '7up'
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
    product_id: '1', count: 21, product: {
        product_name: {
            pl: '7up',
            en: '7up'
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
    product_id: '1', count: 21, product: {
        product_name: {
            pl: '7up',
            en: '7up'
        },
    }
},]

export default function WarningPage() {
    const { language } = useSelector((state: RootState) => state.configurationReducer);
    const { cart } = useSelector((state: RootState) => state.dataReducer);
    const start = useStartHook()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const locationState = location.state as LocationState | undefined;

    const transactionID = locationState?.transactionData?.transactionID;

    const handleGoStart = (): void => {
        if (transactionID) {
            navigate('/service-email-confirmation', { state: { transactionID } });
        } else {
            start()
        }
        dispatch(clearCart());
    };

    const compareArrayProducts = (array: Product[] = []): Product[] => {
        return cart
            .map(item => {
                const productMatch = array.find(product => product.product_id === item.product_id);
                return productMatch ? { ...item, product: item.product } : null;
            })
            .filter((item): item is any => item !== null); // Type guard to ensure non-null values
    };

    useEffect(() => {
        if (locationState) {
            // You can process success_release and fault_release here if needed
            compareArrayProducts(locationState.success_release);
            compareArrayProducts(locationState.fault_release);
        }
    }, [locationState, cart]);

    return (
        <ServicePageWrapper className="warning">
            <div className="service-page-content">
                <div className="o-circle c-container__circle o-circle__sign--warning">
                    <span>{'?'}</span>
                    <div className="o-circle__sign"></div>
                </div>
                <TouchScreenList height={75} center={true}>
                    <AnimatedTitle
                        title={languageConfig[language].SERVICE_PAGE.WARNING_TITLE}

                        subTitle={<ListStatusProducts {...{ success_release: [...fakeSuccess], fault_release: [...fakeError] }} />}
                    />
                </TouchScreenList>

                <ButtonTimer
                    callback={handleGoStart}
                    onClick={handleGoStart}
                    timer={20}
                    status='warning'
                >
                    {languageConfig[language].BUTTONS.FINISH}
                </ButtonTimer>
            </div>
        </ServicePageWrapper>
    );
}