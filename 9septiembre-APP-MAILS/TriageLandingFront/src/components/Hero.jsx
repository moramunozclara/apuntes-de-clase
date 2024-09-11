const Hero = ({heroData}) => {

    if (!heroData) {
        return <p>No se ha proporcionado información de Hero.</p>;
      }

    const { isVisible, img, icon, color, title, content, isImgRight } = heroData

    // const [img, setImg] = useState("");
    // const [icon, setIcon] = useState("");
    // const [bgColor, setBgColor] = useState("");
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    // useEffect(() => {
    //     fetch('')
    //     .then (response => response.json())
    //     .then ( data => { set})
    // }, []);

    return ( 
        <>
            <h2>{title}</h2>
            <p>{content}</p>
            <img src={img} alt={`Imagen de ${title}`} />
        
        </>
     );
}
 
export default Hero;