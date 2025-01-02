import {Wrapper} from "./pages/Wrapper/Wrapper";
import {ReactNode} from "react";
import {StartPage} from "./pages/StartPage/StartPage";
import HomePage from "./pages/HomePage/HomePage";
import ErrorBoundary from "./ErrorBoundary";
import {NotFoundPage} from "./NotFoundPage";
import TimeoutPage from "./pages/TimeoutPage/TimeoutPage";
import TechnicalBreakPage from "./pages/TechnicalBreakPage/TechnicalBreakPage";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ServiceMenuPage } from "./pages/ServiceMenuPage/ServiceMenuPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import RejectedPage from "./pages/RejectedPage/RejectedPage";
import WarningPage from "./pages/WarningPage/WarningPage";
import PaymentMethodPage from "./pages/PaymentMethodPage/PaymentMethodPage";
import CartPage from "./pages/CartPage/CartPage";
import CardPaymentMethod from "./pages/CardPaymentMethod/CardPaymentMethod";
import CashPaymentMethod from "./pages/CashPaymentMethod/CashPaymentMethod";

interface AppRouterProps {
    children?: ReactNode;
}

export default function AppRouter(props: AppRouterProps | null) {
    return (
        <BrowserRouter future={{ v7_startTransition: true }}>
            <Wrapper>
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<StartPage {...props} />}/>
                        <Route path="/home" element={<HomePage {...props} />}/>
                        <Route path="/payment" element={<PaymentMethodPage />}/>
                        <Route path="/cart" element={<CartPage />}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/service-card-payment" element={<CardPaymentMethod />}/>
                        <Route path="/service-cash-payment" element={<CashPaymentMethod />}/>
                        <Route path="/settings" element={<ServiceMenuPage />}/>
                        <Route path="/service-technical-break" element={<TechnicalBreakPage />}/>
                        <Route path="/service-timeout" element={<TimeoutPage />}/>
                        <Route path="/service-success" element={<SuccessPage />}/>
                        <Route path="/service-rejected" element={<RejectedPage />}/>
                        <Route path="/service-warning" element={<WarningPage />}/>
                        
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </ErrorBoundary>
            </Wrapper>
        </BrowserRouter>

    );
}
