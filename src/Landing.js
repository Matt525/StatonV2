import React, { useEffect, useReducer } from 'react'
import video1 from './images/FrontEndSlide.mp4'
import './styles.css';
import { isConstructorDeclaration, reduceEachTrailingCommentRange } from 'typescript'

export default function Landing() {
    
    return (

<div className="landingContainer">
                <div className="flip-container">
                        <div className="flip-card">
                            <div className="sideA slide_1">M</div>
                            <video
                                    // play video on mouse over/enter
                                    onMouseEnter={event=>{
                                    event.target.play();
                                    console.log("MOUSE OVER DETECTED")
                                }}  onMouseOut={
                                    // Resetting video and pausing upon mouse out.
                                    event=>{
                                        event.target.pause();
                                        event.target.currentTime = 0; 
                                    }
                                    } type='video/mp4' src={video1} style={{ minWidth: '100%',
                                        width: '100%'}} className="sideB slide_1_back">
                                    
                                </video>
                        </div>
                </div>
                <div className="flip-container">
                        <div className="flip-card">
                            <div className="sideA slide_2">A</div>
                                <video
                                    // play video on mouse over/enter
                                    onMouseEnter={event=>{
                                    event.target.play();
                                    console.log("MOUSE OVER DETECTED")
                                }}  onMouseOut={
                                    // Resetting video and pausing upon mouse out.
                                    event=>{
                                        event.target.pause();
                                        event.target.currentTime = 0; 
                                    }
                                    } type='video/mp4' src={video1} style={{ minWidth: '100%',
                                        width: '100%'}} className="sideB slide_2_back">
                                    
                                </video>
                        </div>
                </div>
                <div className="flip-container">
                        <div className="flip-card">
                            <div className="sideA slide_3">T</div>
                            <div className="sideB slide_3_back"></div>
                        </div>
                </div>
                <div className="flip-container">
                        <div className="flip-card">
                            <div className="sideA slide_4">T</div>
                            <div className="sideB slide_4_back"></div>
                        </div>
                </div>
</div>
                    
           
 
       
    )

}
