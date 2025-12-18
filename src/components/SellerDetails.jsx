import "./SellerDetails.css"
import larrowSvg from "../assets/left-arrow.svg";
// import thumb from "../assets/chips.png"
import thumb from "../assets/example.png"
import clockSvg from "../assets/clock.svg"

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
                <p className="sd-lastupdated-text">Updated 12 minutes ago.</p>
            </div>
        </div>
    )
}

// Gives brief description of seller including room and stock description
function SdDetails() {
    return(
        <div className="sd-details">
            <div className="sd-details-header">
                <div className="sd-details-name">Rahul Kumar</div>
                <div className="sd-details-loc">Block A Room 204</div>
                <div className="sd-details-open-closed">open</div>
            </div>
            <div className="sd-details-about">
                <p className="sd-details-about-header">About</p>
                <p className="sd-details-about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla cumque ab velit iste et sequi vel molestiae quos consequatur hic ullam, facilis nemo fuga, praesentium temporibus! Reiciendis, cum veritatis.</p>
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