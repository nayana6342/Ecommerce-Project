import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent, CardMedia, CardActions, Grid } from '@mui/material';
import './styles.css';


const products = [
  {
    id: 1,
    title: "Traditional Indian Jhumka Earrings with Pink Stones",
    price: "$45.00",
    image:"https://www.thejewelbox.in/cdn/shop/files/BabyPinkStoneandPearlsGermanSilverOxidisedJhumkaEarrings-TheJewelbox-1.png?v=1696484325&width=533"
  },
  {
    id: 2,
    title: "Elegant Gold and Diamond Circle Jewelry Set",
    price: "$250",
    image: "https://tugarigems.com/wp-content/uploads/2024/11/Tugari-8.jpg.webp"
  },
  {
    id: 3,
    title: "Elegant Pearl and Floral Choker Necklace",
    price: "$150",
    image: "https://shop.southindiajewels.com/wp-content/uploads/2024/01/696-scaled.jpg"
  },
  {
    id: 4,
    title: "Elegant Pearl Cluster Hoop Earrings",
    price: "$45.00",
    image: "https://img.theloom.in/pwa/catalog/product/cache/e442fb943037550e0d70cca304324ade/r/u/rub122_1_.jpg/tr:c-at_max,w-800,h-1066"
  },
  {
    id: 5,
    title: "Traditional Red and Green Stone-Studded Bangles",
    price: "$25.00",
    image: "https://i.pinimg.com/736x/04/2d/c7/042dc7fcd064e97099a569950b763343.jpg"
  },
  {
    id: 6,
    title: "Traditional Gold-Plated Temple Jewellery Set",
    price: "$150",
    image: "https://i.etsystatic.com/37147395/r/il/f6fbc7/6512777562/il_570xN.6512777562_spr6.jpg"
  },
  {
    id: 7,
    title: "Purple and Gold Bangle Set",
    price: "$25.99",
    image: "https://shopbees.com/cdn/shop/files/RADIANTBANGLESETINPURPLE.jpg?v=1704875051"
  },
  {
    id: 8,
    title: "Elegant Blue Beaded Hoop Earrings",
    price: "$25.00",
    image: "https://i.pinimg.com/736x/37/fa/3d/37fa3dbec2fbe43c731be3e42d085547.jpg"
  },
  {
    id: 9,
    title: "Elegant Assorted Stud Earrings Set",
    price: "$20.00",
    image: "https://img.ltwebstatic.com/images3_spmp/2023/12/08/72/1701995781a280db8262561a6d4dfd19b9aa97fb4a_thumbnail_720x.webp"
  },
  {
    id: 10,
    title: "Gold Flower Earrings",
    price: "$150",
    image: "https://i.pinimg.com/736x/2f/11/88/2f11882b5daa4b5865c4840cd54e0718.jpg"
  },
  {
    id: 11,
    title: "Rainbow Gemstone Eternity Ring",
    price: "$950",
    image: "https://i.pinimg.com/736x/17/39/2f/17392fd5dd819f0f70aeb6499baa0066.jpg"
  },
  {
    id: 12,
    title:"Colorful Floral Earrings Set",
    price: "$29.99",
    image: "https://i.pinimg.com/736x/cb/fc/e5/cbfce555b200e15cf85a5cd42ab17adb.jpg"
  },
   {
    id: 13,
    title: "Intricate Silver Choker Necklace",
    price: "$45.00",
    image: "https://i.pinimg.com/736x/2c/11/59/2c1159a741ce99c359aa9fec0ab5d636.jpg"
  },
  {
    id: 14,
    title: "Elegant Pearl and Crystal Bow Earrings",
    price: "$45.00",
    image: "https://i.pinimg.com/736x/ef/b1/81/efb18168aa4a09961ae39ce07751b0b1.jpg"
  },
  {
    id: 15,
    title:"Elegant Pink and Gold Bangle Set",
    price: "$25.99",
    image: "https://i.pinimg.com/736x/e2/50/dc/e250dc9dd3d64c8899b7f03e071b04b2.jpg"
  },

  {
    id: 16,
    title: "Elegant Gold and Diamond Rings Set",
    price: "$250",
    image: "https://jkdiamondsinstitute.com/wp-content/uploads/2021/03/image4.jpg"
  },



];

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Regal Spark Jewels
            </Typography>
           
              <SearchIcon/>&nbsp;&nbsp;&nbsp;
            <ShoppingCartIcon /> &nbsp;&nbsp;
            <Button color="inherit">Login / Register</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <br></br><br></br><Grid container spacing={2} sx={{ padding: 2 }}>
        {products.map((product) => (
          <Grid  key={product.id}>
            <Card sx={{ maxWidth: 290}}style={{objectFit:'contain'}} className="product-card">
              <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.description}
                </Typography>
                <Typography variant="body1" color="primary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outlined">VIEW</Button>
              </CardActions>

            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Navbar;
