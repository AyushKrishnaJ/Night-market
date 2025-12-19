import "./SellerDetails.css"
import larrowSvg from "../assets/left-arrow.svg";
// import thumb from "../assets/chips.png"
import thumb from "../assets/example.png"
import clockSvg from "../assets/clock.svg"
import locationSvg from "../assets/location.svg";

// Header of the Seller Details page
function SdHeader() {
    const handleclick=()=>{

    };
    return(
        <div className="sd-header">
        <button onClick={handleclick} className="larrow-button">
            <img className="larrow-color" src={larrowSvg} alt="back"/>
        </button>
          Seller Details
        </div>
    )
}

// Stock image
function SdImage() {
    return(
        <div className="sd-image-container">
            <img className="sd-image" src={thumb} alt="thumbnail"/>
            <div className="sd-lastupdated">
                <img className="sd-lastupdated-clock" src={clockSvg} alt="clock"/>
                <p className="sd-lastupdated-text">Updated 67 minutes ago.</p>
            </div>
        </div>
    )
}

// Gives brief description of seller including room and stock description
function SdDetails() {
    // Dummy variable for open/closed status
    // Change to props later
    // Change true to false to test closed status
    let isOpen = true;
    let isOpenText = isOpen? "Open": "Closed";


    return(
        <div className="sd-details">
            <div className="sd-details-header">
                <div className="sd-details-header-info">
                    <div className="sd-details-name">Rahul Kumar</div>
                    <div className="sd-details-loc">
                        <img className="sd-details-loc-symbol" src={locationSvg}></img>
                        Block A | Room 204
                    </div>
                </div>

                <div className="sd-details-open-closed" style={{border: isOpen? "green 3px solid": "#b13333 3px solid", backgroundColor: isOpen? "rgba(0, 128, 0, 0.1)": "rgba(177, 51, 51, 0.1)"}}>
                    <div className="sd-details-status-circle" style={{backgroundColor: isOpen? "green": "#b13333"}}>
                    </div>
                    <p className="sd-details-status-text" style={{color: isOpen? "green": "#b13333"}}>{isOpenText} Now</p>
                </div>
            </div>

            <div className="sd-details-about">
                <p className="sd-details-about-header">About</p>
                <p className="sd-details-about-text">Fresh, hygienic snacks delivered right to your room. Chips, biscuits, cold drinks, and instant noodles available daily. Fast delivery within Block A. Reliable service. Payments accepted via UPI or cash.</p>
            </div>
        </div>
    )
}

// Goes to Whatsapp of the seller
function SdWhatsapp() {
    return(
        <div className="sd-whatsapp">
            Whatsapp
        </div>
    )
}

export default function SellerDetails() {

    return (
        <>
            <div className="sd-container">
                <SdHeader />

                <SdImage />

                <SdDetails />

                <SdWhatsapp />
            </div>
        </>
    )
}