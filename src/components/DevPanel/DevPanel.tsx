import { useState } from "react"
import { useNavigate } from "react-router";

export const DevPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const handleOpen = () => {
        setIsOpen(prev => !prev)
    }

    const handleGoHome = ()=> {
        navigate('/');
        handleOpen()
    }

    return (
        <>
            <div className={`dev-panel-wrapper ${isOpen ? 'show' : ''}`}>
                <div>
                    <span onClick={handleGoHome}>⌂</span>
                </div>
                <span onClick={handleOpen}>{!isOpen ? '►' : '◄'}</span>
            </div>
        </>
    )
}