const Hero = ({hero}) => {

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
            <div className="Card">
                <h2>Hero section</h2>
                {hero.map(({title, content, img}) => (

                <div  className="Card">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <img src={img} alt={`Imagen de ${title}`} />
            </div>
            ))}
        

        </div>
        </>
     );
}
 
export default Hero;