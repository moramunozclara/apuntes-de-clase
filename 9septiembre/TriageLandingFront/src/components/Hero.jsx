const Hero = () => {

    const [img, setImg] = useState("");
    const [icon, setIcon] = useState("");
    const [bgColor, setBgColor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    useEffect(() => {
        fetch('')
        .then (response => response.json())
        .then ( data => { set})
    }, []);




    return ( 
        <>
        </>
     );
}
 
export default Hero;