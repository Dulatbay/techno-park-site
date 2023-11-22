import './HeaderImage.css'

interface props {
    imageUrl: string,
    title: string,
    description: string
}

export const HeaderImage = ({imageUrl, title, description} : props) => {
    return (
        <div className="parallax-container">
            <div className="parallax-image" style={{
                backgroundImage: `url(${imageUrl})`,
            }}></div>
            <div className="parallax-content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};
