import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const Cocktails = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    useGSAP(() => {

        const triggerValue = isMobile ? '.loved' : '#cocktails'
        const startValue = isMobile ? 'top 60%' : 'top 30%';
        const endValue = isMobile ? 'bottom 90%' : 'bottom 40%';

        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: triggerValue,
                start: startValue,
                end: endValue,
                scrub: true,
            }
        });

        parallaxTimeline
            .from('#c-left-leaf', {
                x: -100, y: 100
            })
            .from('#c-right-leaf', {
                x: 100, y: 150
            })

    })
    return (
        <section id='cocktails' className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id='c-left-leaf' />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id='c-right-leaf' />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>
                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>-{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved mocktails:</h2>
                    <ul>
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>-{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails