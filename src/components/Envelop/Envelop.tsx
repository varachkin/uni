interface IEnvelopProps {
    text?: string
}

export const Envelop = ({text}: IEnvelopProps) => {
    return (
        <div className="letter-image">
            <div className="animated-mail">
                <div className="back-fold"></div>
                <div className="letter">
                    <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div>
                    <div className="letter-context-body">
                        <p>{text}</p>
                    </div>
                    <div className="letter-stamp">
                        <div className="letter-stamp-inner"></div>
                    </div>
                </div>
                <div className="top-fold"></div>
                <div className="body-envelop"></div>
                <div className="left-fold"></div>
            </div>
            <div className="shadow"></div>
        </div>
    )
}