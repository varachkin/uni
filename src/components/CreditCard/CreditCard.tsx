import cashImg from "./../../assets/img/Mastercard.svg";
export const CreditCard = () => {
    return (
        <>
            <main className="credit-card-wrapper">
                <aside className="card-front">
                    <label className="number" htmlFor="cardNumber">
                        0000 0000 0000 0001
                    </label>
                    <label className="name" htmlFor="cardHolder">
                        Name Surname
                    </label>
                    <label className="expiry" htmlFor="expiryMonth" >
                        00/00
                    </label>
                    <img className="cardLogo" data-v-5d206127="" data-v-8fcb32d4="" style={{ opacity: 1 }} src={cashImg}/>


                        <div className="chip">
                            <svg role="img" viewBox="0 0 100 100" aria-label="Chip">
                                <use href="#chip-lines" />
                            </svg>
                        </div>
                </aside>
            </main>

            <svg id="chip">
                <g id="chip-lines">
                    <polyline points="0,50 35,50"></polyline>
                    <polyline points="0,20 20,20 35,35"></polyline>
                    <polyline points="50,0 50,35"></polyline>
                    <polyline points="65,35 80,20 100,20"></polyline>
                    <polyline points="100,50 65,50"></polyline>
                    <polyline points="35,35 65,35 65,65 35,65 35,35"></polyline>
                    <polyline points="0,80 20,80 35,65"></polyline>
                    <polyline points="50,100 50,65"></polyline>
                    <polyline points="65,65 80,80 100,80"></polyline>
                </g>
            </svg>

            <svg id="contactless">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
            </svg>
        </>
    )
}