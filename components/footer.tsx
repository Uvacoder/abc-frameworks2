import Link from "next/link";

const Footer = (props) => (
  <div className="footer">
    <div className="text-footer">
      © 2020 - 2022 -{" "}
      <Link href="/privacy">
        <a>Privacy</a>
      </Link>{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <br></br>
    </div>
    <a href="https://github.com/swve" target="_blank" rel="noreferrer">
      <img className="swve-logo" alt="Sweave logo" src="../img/sweave.png" />
    </a>
    <br></br>

    <a href="http://github.com/sponsors/swve" target={"_blank"}>
      <img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/swve?label=Sponsor%20Framestack&style=social" />
    </a>
  </div>
);

export default Footer;
