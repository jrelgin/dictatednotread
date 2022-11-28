/** @jsx jsx */
import { jsx } from "theme-ui"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Dictated, but not read. Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by Jason Elgin
      </p>
    </div>
  </footer>
)

export default Footer
