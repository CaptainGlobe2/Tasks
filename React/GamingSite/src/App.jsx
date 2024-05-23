import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { RecommendedArticles } from "./components/RecommendedArticles/RecommendedArticles"
import { TrendingGames } from "./components/TrendingGames/TrendingGames"
import { WhatsNew } from "./components/WhatsNew/WhatsNew"

export  const App = () => {
  return (
    <>
      <Navbar /> 
      <Hero />  
      <TrendingGames />
      <RecommendedArticles />
      <WhatsNew />
      <div className="bg-primary text-white p-10">
      <div className="container text-center bg-primary w-full">
        Let's Play the Game
      </div>
      </div>
    </>
  )
}
