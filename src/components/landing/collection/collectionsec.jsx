import React from 'react';
//import 'C:/Projects/website_3/src/scss/collectionsec.scss';
import '../../../scss/collectionsec.scss'
import collectionImage from '../../../assets/collection.jpg'; 

const CollectionSec = () => {
    return (
        <div className="collection-section">
            <div className='content-container-empty'>

            </div>
            <div className="image-container">
                <img src={collectionImage} alt="Collection" className="collection-image" />
            </div>
            <div className="content-container">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus leo, pellentesque vel lobortis a, dignissim hendrerit quam. Cras finibus sed nisi in faucibus. Fusce eget eros sed mi ornare ornare.</p>
                <button className="collection-button">View the Collection</button>
            </div>
        </div>
    );
};

export default CollectionSec;
