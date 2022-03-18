import React, { useRef, useEffect, useCallback } from "react";

import iconleft from "./../assets/img/lefticon.svg";
import iconright from "./../assets/img/righticon.svg";
import styled from "styled-components";

export const SliderReutilizable = ({
  children,
  controles = false,
  autoplay = false,
  velocidad = "500",
  intervalo = "5000",
}) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const Siguiente = useCallback(()=> {
        //Comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
        //Obtenemos el primer elemento del slideshow
        const primerElemento = slideshow.current.children[0];
  
        //Establecemos la transicion para el slideshow
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
  
        //Calculamos el tamaño del slider
        const tamañoSlide = slideshow.current.children[0].offsetWidth;
        // console.log(tamañoSlide);
  
        //Mover el slideshow
        slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
  
        //Hacer el cambio, mover imagen al final
        const transicion = () => {
          //Reiniciamos la posicion del slideshow
          slideshow.current.style.transition = "none";
          slideshow.current.style.transform = `translateX(0)`;
          //Tomamos el primer elemento y lo mandamos al final
          slideshow.current.appendChild(primerElemento);
          //Eliminar el evento despues de hacer el evento
          slideshow.current.removeEventListener("transitionend", transicion);
        };
        //Evenlistener para cuando termina la animacion
        slideshow.current.addEventListener("transitionend", transicion);
      }
  },[velocidad]) 

  const Anterior = () => {
    if (slideshow.current.children.length > 0) {
      //Obtenemos el ultimo elemento del slideshow
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );
      //Establecemos la transicion para el slideshow
      slideshow.current.style.transition = `none`;

      //Calculamos el tamaño del slider
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
      if (autoplay) {
        intervaloSlideshow.current = setInterval(() => {
            Siguiente();
          }, intervalo);
          //Eliminar los intervalos
          slideshow.current.addEventListener("mouseenter", () => {
            clearInterval(intervaloSlideshow.current);
          });
          //Volver a poner el autoplay
          slideshow.current.addEventListener("mouseleave", () => {
            intervaloSlideshow.current = setInterval(() => {
              Siguiente();
            }, intervalo);
          });
      }
    
  }, [autoplay,intervalo,Siguiente]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
      {
       controles && (
        <Controles>
            <Boton onClick={Anterior}>
                <img src={iconleft} alt="" />
            </Boton>
            <Boton derecho onClick={Siguiente}>
                <img src={iconright} alt="" />
            </Boton>
      </Controles>
       )
      }
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;
const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
export const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  max-height: 500px;
  position: relative;

  img {
    width: 100%;
    vertical-align: top;
  }
`;
export const TextoSlide = styled.div`
  background: ${(props) =>
    props.colorFondo ? props.colorFondo : "rgba(0,0,0,.3)"};
  color: ${(props) => (props.colorTexto ? props.colorTexto : "#fff")};
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-weight: 600;

  @media screen and (max-width: 700px) {
    position: relative;
    background: #000;
  }
`;
const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
  }

  /* path{
        filter: ${(props) =>
    props.derecho
      ? "drop-shadow(-2px 0px 0px #fff)"
      : "drop-shadow(2px 0px 0px #fff)"}
    }  */

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;
