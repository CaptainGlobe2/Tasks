import React from "react";
import Game1 from "../../assets/game/game1.jpg";
import Game2 from "../../assets/game/game2.jpg";
import Game3 from "../../assets/game/game3.jpg";
import { FaFire } from "react-icons/fa";
import CharacterPng1 from "../../assets/characters/character1.png";

const GameCardData = [
  {
    id: 1,
    title: "Game Title",
    image: Game1,
    followers: 30,
  },
  {
    id: 2,
    title: "Game Title",
    image: Game2,
    followers: 35,
  },
  {
    id: 3,
    title: "Game Title2",
    image: Game3,
    followers: 35,
  },
  {
    id: 4,
    title: "Game Title3",
    image: Game1,
    followers: 35,
  },
  {
    id: 5,
    title: "Game Title4",
    image: Game2,
    followers: 35,
  },
  {
    id: 6,
    title: "Game Title5",
    image: Game3,
    followers: 55,
  },
];

export const TrendingGames = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white">
        <div className="container relative">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Currently Trending Games</h1>
            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
              View All
            </button>
          </div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
              {/* {Game Card} */}
              {GameCardData.map((item) => {
                return (
                  <div key={item.id} className="col-span-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] object-cover rounded-2xl"
                    />
                    <div className="text-center">
                      <p>{item.title}</p>
                      <p className="flex items-center gap-2 justify-center">
                        <FaFire />
                        <span>{item.followers} </span>
                        <span>Followers</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <img src={CharacterPng1} alt="Character" className="absolute left-[-150px] top-0 z-[1] h-[340px]" />
        </div>
      </section>
    </>
  );
};
