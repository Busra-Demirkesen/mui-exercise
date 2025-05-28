import { Stack, ImageList, ImageListItem, Box,ImageListItemBar } from "@mui/material";

const MuiImagelist = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
            title={item.title}/>

          </ImageListItem>
        ))}
      </ImageList>

      <Box  sx={{ width: 500, height: 450, overflowY:'scroll' }}>
        <ImageList
          variant="masonry"
         
          cols={3}
          gap={8}
        >
          {itemData2.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MuiImagelist;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Mountain View",
  },
  {
    img: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=800&q=80",
    title: "Forest Path",
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    title: "Beach Sunset",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
    title: "City Skyline",
  },
  {
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
    title: "Snowy Mountains",
  },
  {
    img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
    title: "Desert Dunes",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    title: "Lavender Fields",
  },
  {
    img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=800&q=80",
    title: "Ocean Waves",
  },
  {
    img: "https://images.unsplash.com/photo-1558981403-c5f9891b6f3b?auto=format&fit=crop&w=800&q=80",
    title: "Bridge Over River",
  },
  {
    img: "https://images.unsplash.com/photo-1549887534-1fd6a3d2d51f?auto=format&fit=crop&w=800&q=80",
    title: "Night Sky",
  },
];

const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Mountain View",
  },
  {
    img: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=800&q=80",
    title: "Forest Path",
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    title: "Beach Sunset",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
    title: "City Skyline",
  },
  {
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
    title: "Snowy Mountains",
  },
  {
    img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
    title: "Desert Dunes",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    title: "Lavender Fields",
  },
  {
    img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=800&q=80",
    title: "Ocean Waves",
  },
  {
    img: "https://images.unsplash.com/photo-1558981403-c5f9891b6f3b?auto=format&fit=crop&w=800&q=80",
    title: "Bridge Over River",
  },
  {
    img: "https://images.unsplash.com/photo-1549887534-1fd6a3d2d51f?auto=format&fit=crop&w=800&q=80",
    title: "Night Sky",
  },
];
