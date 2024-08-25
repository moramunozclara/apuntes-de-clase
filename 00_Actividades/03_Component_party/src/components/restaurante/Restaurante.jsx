import MenuSection from "./MenuSection";

const Restaurante = ({menu}) => {


    return ( 

        <div className="Card">
            <MenuSection titulo="Entrantes" items={menu.entrantes}></MenuSection>
            <MenuSection titulo="Principales" items={menu.principales}></MenuSection>
            <MenuSection titulo="Postres" items={menu.postres}></MenuSection>

        </div>
     );
}
 
export default Restaurante;