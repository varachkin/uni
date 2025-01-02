import { useLocation } from 'react-router-dom';

// Define the type for cart items


// Define the props type for the CartIcon component
interface CartIconProps {
  onClick: () => void;
  quantity: number | undefined;
}

export const CartIcon: React.FC<CartIconProps> = ({ onClick, quantity }) => {
  const { pathname } = useLocation();

  return (
    <div
      className="cart-icon-wrapper"
      id="cart"
      onClick={pathname === '/cart' || !quantity ? undefined : onClick} // Use undefined instead of null
      style={{ opacity: !quantity ? 0.1 : 1 }}
    >
      <div className="cart"></div>
      {!!quantity && quantity > 0 && (
        <div className="circle">
         {quantity}
        </div>
      )}
    </div>
  );
};
