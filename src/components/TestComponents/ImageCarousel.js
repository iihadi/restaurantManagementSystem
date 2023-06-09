import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import styled from 'styled-components'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Styles = styled.div`
    .imageCarousel {

    --slider-height-percentage: 10%;
    --slider-transition-duration: 525ms;
    --organic-arrow-thickness: 4px;
    --organic-arrow-border-radius: 0px;
    --organic-arrow-height: 40px;
    --organic-arrow-color: transparent;
    --control-button-width: 10%;
    --control-button-height: 25%;
    --control-button-background: transparent;
    --control-bullet-color: transparent;
    --control-bullet-active-color: transparent;
    --loader-bar-color: transparent;
    --loader-bar-height: 6px;

}
`


export const ImageCarousel = () => (
    <Styles>
        <AutoplaySlider cssModele='Styles'
            play={true}
            cancelOnInteraction={false}
            interval={6000}
            organicArrows={false}
            bullets={false}
          
    >
        <div data-src="https://images.alphacoders.com/946/946712.jpg" />
            <div data-src="https://c0.wallpaperflare.com/preview/661/198/486/mexico-mexico-city-don-porfirio-palacio.jpg" />
            <div data-src='https://c4.wallpaperflare.com/wallpaper/547/779/771/building-mexico-city-mexico-square-wallpaper-preview.jpg' />
            <div data-src='https://c4.wallpaperflare.com/wallpaper/1019/246/574/mexico-city-wallpaper-preview.jpg' />
        </AutoplaySlider>
    </Styles>
)

