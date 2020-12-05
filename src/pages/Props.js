
const photos = 
[{
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  }
];

const Photos = ({title, photo}) => {
    return (
      <>
        <h1>{title}</h1>
        <img src={photo} alt="dummy-image"/>
      </>
    );
    }
    
    
    photos.map((photos) => {
        return <Photos key={photos.id} title={photos.title} photo={photos.url} />;
      })
   

    export default Photos;