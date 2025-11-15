import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
<<<<<<< HEAD
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
                <img src="/logo.svg" alt ="Apple logo"/>
=======
                <p>Shop your way: Find an Apple Store or authorized retailer near you, or reach us at [number] 000 00 0000.</p>
                <img src="/logo.svg" alt ="logo"/>
>>>>>>> a9677c0 (Initial commit: Apple Clone project)
            </div>

            <hr />

            <div className="links">
<<<<<<< HEAD
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
=======
                <p>
  &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
</p>
>>>>>>> a9677c0 (Initial commit: Apple Clone project)

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
