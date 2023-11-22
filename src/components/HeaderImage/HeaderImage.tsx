import './HeaderImage.css'

interface props {
    imageUrl: string
}

export const HeaderImage = ({imageUrl} : props) => {
    return (
        <div className="parallax-container">
            <div className="parallax-image" style={{
                backgroundImage: `url(${imageUrl})`,
            }}></div>
            <div className="parallax-content">
                <h1>SDU IT Park</h1>
                <p>SDU IT Park - товарищество с ограниченной ответственностью, единственным учредителем которого является университет СДУ.</p>
            </div>
        </div>
    );
};
