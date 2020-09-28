import React from "react"
import { Link } from "gatsby"
import footerStyles from './footer.module.css'

export default  function Footer () {
	return (

		<ul className={footerStyles.footerUl}>

		<li className={footerStyles.footerLi}> About Me </li>
		<li className={footerStyles.footerLi}> Blog </li>
		<li className={footerStyles.footerLi}> Affiliates </li>

	</ul>


		)
}