
interface LogoProps {
    handleNavigateToStart: () => void;
    variant: string | null | undefined
}

export default function Logo({handleNavigateToStart, variant} : LogoProps) {
    return (
        <div className={`header-logo-block`}  onClick={handleNavigateToStart}>
            <div className={`header-logo  ${variant === 'black' ? 'black' : ''}`}></div>
        </div>
    )
}