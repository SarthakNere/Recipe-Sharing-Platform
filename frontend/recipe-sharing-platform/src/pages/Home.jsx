import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'

export default function Home() {
  return (
    <>
        <section className='home'>
            <div className='left'>
                <h1>Recipe Sharing Platform</h1>
                <h4>Recipe Sharing Platform is a user-friendly web application that empowers cooking enthusiasts to create, share, and explore delicious recipes from around the world. Whether you're a seasoned chef or a home cook, our platform provides an easy and engaging way to showcase your culinary skills and discover new dishes.</h4>
                <h4>Whether you're looking for inspiration or aiming to build your own recipe collection, Recipe Sharing Platform is your go-to destination for all things culinary. Join our community, enhance your cooking skills, and turn your passion for food into a shared experience!</h4>
                <h4></h4>
                <button>Share Your Recipe</button>
            </div>
            <div className='right'>
                <img src={foodRecipe} width="320px" height="300px"></img>
            </div>
        </section>
        <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#079999" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,197.3C384,181,480,107,576,112C672,117,768,203,864,218.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    </>
  )
}
