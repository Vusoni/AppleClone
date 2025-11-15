import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>Shop your way: Find an Apple Store or authorized retailer near you, or reach us at [number] 000 00 0000.</p>
                <img src="/logo.svg" alt ="logo"/>

            </div>

            <hr />

            <div className="links">

                <p>
  &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
</p>


                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
