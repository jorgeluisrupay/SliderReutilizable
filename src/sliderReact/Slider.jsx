import React from 'react'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import { SliderReutilizable,TextoSlide, Slide } from './SliderReutilizable'
import '../css/Slider.css'
import styled from 'styled-components'

export const Slider = () => {
  return (
    <>
    <main>
        <Titulo>Titulo de Productos Destacados</Titulo>
        <SliderReutilizable controles={false} autoplay={true} velocidad="3000" intervalo="5000" >
          <Slide>
                <a href="#">
                    <img src={img1} alt="" />
                </a>
                <TextoSlide colorFondo="#ff8000" colorTexto="#000">
                    <p>15% descuento en productos</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img2} alt="" />
                </a>
                <TextoSlide colorFondo="" colorTexto="#fff">
                    <p>15% descuento en productos</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img3} alt="" />
                </a>
                <TextoSlide>
                    <p>15% descuento en productos</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img4} alt="" />
                </a>
                <TextoSlide>
                    <p>15% descuento en productos</p>
                </TextoSlide>
            </Slide>
        </SliderReutilizable>


        <Titulo>Productos Nuevos</Titulo>
        <SliderReutilizable controles={true} velocidad={1000}>
          <Slide>
                <a href="#">
                    <img src={img1} alt="" />
                </a>
                <TextoSlide colorFondo="navy" colorTexto="#fff">
                    <p>15% descuento en productos</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img2} alt="" />
                </a>
                <TextoSlide colorFondo="" colorTexto="#fff">
                    <p>15% descuento en productos</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img3} alt="" />
                </a>
                <TextoSlide>
                    <p>15% descuento en productos</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img4} alt="" />
                </a>
                <TextoSlide>
                    <p>15% descuento en productos</p>
                </TextoSlide>
            </Slide>
        </SliderReutilizable>
        
    </main>
    </>
  )
}

const Titulo = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`
