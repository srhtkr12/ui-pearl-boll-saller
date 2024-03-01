import React from 'react'
import { Slides } from './Slides'
import CrouselItem from './CrouselItem'
import Carousel from 'react-material-ui-carousel'

const Crousels = () => {
    return (
        <Carousel>
            {Slides.map(item => <CrouselItem key={item.id} url={item.thumbnailUrl} name={item} />)}
        </Carousel>
    )
}

export default Crousels