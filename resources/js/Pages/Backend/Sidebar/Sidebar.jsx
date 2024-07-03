import React from 'react'
import Styles from './sidebar.module.css'
import { FaTachometerAlt,FaRegSmileBeam  } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link } from '@inertiajs/react';



const Sidebar = () => {
  return (
	<section className={Styles.sidebar}>
		<a href="#" className={Styles.brand}>
			<i className={Styles.bx}><FaRegSmileBeam /></i>
			<span className={Styles.text}>Nahid Admin</span>
		</a>
		<ul className={`${Styles.side_menu} ${Styles.top}`}>
			<li className={Styles.active}>
				<a href="#">
					<i className={Styles.bx}  ><FaTachometerAlt />
                    </i>
					<span className={Styles.text}>Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className={`${Styles.bx} bxs-shopping-bag-alt`} ></i>
					<span className={Styles.text}>My Store</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className={`${Styles.bx} bxs-doughnut-chart`} ></i>
					<span className={Styles.text}>Analytics</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className={`${Styles.bx} bxs-message-dots`}></i>
					<span className={Styles.text}>Message</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className={`${Styles.bx} bxs-group`} ></i>
					<span className={Styles.text}>Team</span>
				</a>
			</li>
		</ul>
		<ul className={Styles.side_menu}>
			<li>
				<a href="#">
					<i className={Styles.bx}  ><IoSettings /></i>
					<span className={Styles.text}>Settings</span>
				</a>
			</li>
			<li>
				<a href="#" className={Styles.logout}>
					<i className={Styles.bx}><CiLogout /></i>
					<Link method="post" href={route('logout')} className={Styles.text}>Logout</Link>
				</a>
			</li>
		</ul>
	</section>
	
  )
}

export default Sidebar