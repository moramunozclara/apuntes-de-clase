const Section = ({section}) => {

   const { isVisible, img, icon, color, title, content, isImgRight } = section

    return ( 
        <>
            <h2>{title}</h2>
            <p>{content}</p>

        </>

     );
}
 
export default Section;