import { useState } from "react";
import '../styles/Footer.css'



function Footer() {

    const [inputValue, sertInputValue] = useState('')

    function handleInput(e) {

        sertInputValue(e.target.value)
    }

    function handleBlur() {

        if (!inputValue.includes('@')){

            alert("Attention, il n'y a pas d'@, ceci n'est pas une addresse valide 😥")
        }
    }

    return (

        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passioné(e)s de plantes 🌱🌳🌵
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
            <input
                placeholder="Entrez votre mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer
