import React from 'react'
import Styles from './topbar.module.css'
import { FiAlignCenter  } from "react-icons/fi";


const Topbar = () => {
  return (
  <section id={Styles.content}>
    <nav>
    <i className={`${Styles.bx} ${Styles.bx_menu}`}> <FiAlignCenter  /> </i>
    <a href="#" className={Styles.nav_link}>Categories</a>
    <a href="#" className={Styles.profile}>
      <img src="./image/download.jpeg" />
    </a>
  </nav>
    <main>
        <div className={Styles.head_title}>
            <div className={Styles.left}>
                <h1>Dashboard</h1>
                <ul className={Styles.breadcrumb}>
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li><i className={Styles.bx} ></i></li>
                    <li>
                        <a className={Styles.active} href="#">Home</a>
                    </li>
                </ul>
            </div>
            <a href="#" className={Styles.btn_download}>
                <i className={Styles.bx} ></i>
                <span className={Styles.text}>Download PDF</span>
            </a>
        </div>

        <ul className={Styles.box_info}>
            <li>
                <i className={Styles.bx}></i>
                <span className={Styles.text}>
                    <h3>1020</h3>
                    <p>New Order</p>
                </span>
            </li>
            <li>
                <i className={Styles.bx} ></i>
                <span className={Styles.text}>
                    <h3>2834</h3>
                    <p>Visitors</p>
                </span>
            </li>
            <li>
                <i className={Styles.bx} ></i>
                <span className={Styles.text}>
                    <h3>$2543</h3>
                    <p>Total Sales</p>
                </span>
            </li>
        </ul>


        <div className={Styles.table_data}>
            <div className={Styles.order}>
                <div className={Styles.head}>
                    <h3>Recent Orders</h3>
                    <i className={Styles.bx} ></i>
                    <i className={Styles.bx} ></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Date Order</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="img/people.png" />
                                <p>John Doe</p>
                            </td>
                            <td>01-10-2021</td>
                            <td><span className={` ${Styles.statu} ${Styles.completed}`}>Completed</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img/people.png" />
                                <p>John Doe</p>
                            </td>
                            <td>01-10-2021</td>
                            <td><span className={`${Styles.statu} ${Styles.pending}`}>Pending</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img/people.png" />
                                <p>John Doe</p>
                            </td>
                            <td>01-10-2021</td>
                            <td><span className={`${Styles.statu} ${Styles.process}`}>Process</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={Styles.todo}>
					<div className={Styles.head}>
						<h3>Todos</h3>
						<i className={Styles.bx}></i>
						<i className={Styles.bx}></i>
					</div>
					<ul className={Styles.todo_list}>
						<li className={Styles.completed}>
							<p>Todo List</p>
							<i className={Styles.bx} ></i>
						</li>
						<li className={Styles.completed}>
							<p>Todo List</p>
							<i className={Styles.bx}></i>
						</li>
						<li className={Styles.not_completed}>
							<p>Todo List</p>
							<i className={Styles.bx} ></i>
						</li>
						<li className={Styles.not_completed}>
							<p>Todo List</p>
							<i className={Styles.bx} ></i>
						</li>
						<li className={Styles.not_completed}>
							<p>Todo List</p>
							<i className={Styles.bx} ></i>
						</li>
					</ul>
				</div>
        </div>
    </main>


  </section>
  )
}

export default Topbar