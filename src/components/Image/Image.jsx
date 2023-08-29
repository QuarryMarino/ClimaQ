
function Image({image}) {
   

return(
    <>
    <div>
    <Image
  rel="icon"
  type="image/svg+xml"
  href="./public/Imagen/Cloud-background.png"
/>
   <Image
      src={`/img/${
        dato ? dato.weather[0].icon.replace("n", "d") : "1d"
      }.png`}
      width={200}
      height={220}
      alt=""
    />

    
    </div>
    </>
)
}


export default Image;