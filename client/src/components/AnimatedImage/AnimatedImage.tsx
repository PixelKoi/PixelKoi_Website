import beach from "../../assets/images/unsplash/thailandbeach.webp";
import React, {useRef, useEffect} from "react";
import './AnimatedImage.scss'
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap } from 'gsap';

const AnimatedImage = () => {
    let container = useRef(null)
    let image = useRef(null)
    let imageReveal = CSSRulePlugin.getRule('.imageStyling:after')
    useEffect(()=>{
        const t1 = gsap.timeline();
        t1.fromTo(container, {x: 1}, {css: {visibility: "visible"}}
        ).to(imageReveal, 1.4, {width: "0%", ease: "Power2.easeInOut"})
            .to(image.current, 1, {scale:0.45, ease:"Power2.easeInOut", delay: -1.6})
    })
    return(
      <section className="main">
          <div ref={container} className="container">
              <div className="imageStyling">
                  <img ref={image}
                      src={beach} alt="beachImg"  />
              </div>
          </div>
      </section>

  )
}

export default AnimatedImage;