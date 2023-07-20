import productDesktopImg from '../assets/image-product-desktop.jpg';
import productMobileImg from '../assets/image-product-mobile.jpg';
import cartIcon from '../assets/icon-cart.svg';

export default function ProductPreview() {
    return(
        <div className="card">
            <div className="media">
                <picture>
                    <source media='(max-width:650px)' srcSet={productMobileImg}/>
                    <img src={productDesktopImg}/>
                </picture>
            </div>
            <div className="content">
                <h4 className="category">
                    PERFUME
                </h4>
                <h1 className="title">
                    Gabrielle Essence Eau De Parfum
                </h1>
                <p className="description">
                    A floral, solar and voluptuous interpretation compseb by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="prices">
                    <div className="current-price">
                        $149.99
                    </div>
                    <div className="original-price">
                        $169.99
                    </div>
                </div>
                <button className="add-to-cart">
                    <img src={cartIcon}/>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}