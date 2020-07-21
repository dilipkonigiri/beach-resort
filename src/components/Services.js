import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {

    constructor() {
        super()
        this.state = {
            services: [
                {
                    icon: <FaCocktail/>,
                    title: "Free Cocktails",
                    info: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
                },
                {
                    icon: <FaHiking/>,
                    title: "Endless Hiking",
                    info: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
                },
                {
                    icon: <FaShuttleVan/>,
                    title: "Free Shuttle",
                    info: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
                },
                {
                    icon: <FaBeer/>,
                    title: "Strongest Beer",
                    info: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
                }
            ]
        }
    }

    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
               {this.state.services.map((item, index) => {
                   return (
                       <article key={index} className="services">
                       <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                       </article>
                   )                 
               })}
               </div>
            </section>
        )
    }
}
