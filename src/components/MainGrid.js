import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import './../App.css';

const MainGrid = ({ validateScore }) => {
  const [images, setImages] = useState([
    {
      name: "Saber",
      src: "https://cdn.myanimelist.net/images/characters/6/275276.jpg",
    },
    {
      name: "Kiritsugu Emiya",
      src: "https://cdn.myanimelist.net/images/characters/4/474826.jpg",
    },
    {
      name: "Archer",
      src: "https://cdn.myanimelist.net/images/characters/12/338672.jpg",
    },
    {
      name: "Tokiomi Toosaka",
      src: "https://cdn.myanimelist.net/images/characters/9/338666.jpg",
    },
    {
      name: "Assassin",
      src: "https://cdn.myanimelist.net/images/characters/14/160563.jpg",
    },
    {
      name: "Kirei Kotomine",
      src: "https://cdn.myanimelist.net/images/characters/3/258487.jpg",
    },
    {
      name: "Rider",
      src: "https://cdn.myanimelist.net/images/characters/9/142869.jpg",
    },
    {
      name: "Waver Velvet",
      src: "https://cdn.myanimelist.net/images/characters/8/126883.jpg",
    },
    {
      name: "Berserker",
      src: "https://cdn.myanimelist.net/images/characters/8/102820.jpg",
    },
    {
      name: "Kariya Matou",
      src: "https://cdn.myanimelist.net/images/characters/6/135841.jpg",
    },
    {
      name: "Lancer",
      src: "https://cdn.myanimelist.net/images/characters/11/116250.jpg",
    },
    {
      name: "Kayneth El-Melloi Archibald",
      src: "https://cdn.myanimelist.net/images/characters/13/141327.jpg",
    },
  ]);

  const shuffle = () => {
    const array = images.slice();
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    setImages(array);
  }

  return (
    <Grid
      container
      spacing={6}
      justifyContent="space-evenly"
      alignItems="center"
    >
      {images.map((image) => {
        return (
          <Grid item xs={6} sm={4} md={3} lg={2} key={image.name}>
            <Card id="card">
              <CardActionArea
                id="card"
                onClick={() => {
                  shuffle()
                  validateScore(image);
                }}
              >
                <CardMedia
                  id="card-item"
                  component="img"
                  image={image.src}
                  alt={image.name}
                />
                <CardContent id="card-title">
                  <h3>{image.name}</h3>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MainGrid;
