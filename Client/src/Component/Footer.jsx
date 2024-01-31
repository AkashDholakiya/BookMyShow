import React from "react";
import '../App.css'

const Footer = () => {

    return (
        <footer className="container-fluid py-4" style={{...styles.styleFooter}}>
            <div className="row">
                <div className="col-md-12"> 
                    <p className="text-center" style={styles.paraFont}>&copy; BookYourShow, 2024. All right reserved  </p>
                </div>
            </div>
        </footer>
    )
}

const styles = {
    styleFooter : {
        borderTop : "3px inset #fff",
        color : "#fff",
        borderTopLeftRadius : "20px",
        borderTopRightRadius : "20px",
    },
    paraFont : {
        fontSize : "20px",
        fontWeight : "400",
    }
}
export default Footer