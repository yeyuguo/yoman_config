require('normalize.css/normalize.css');
require('../styles/less/style.less')
import React from 'react';


// less start
var imageDatas = require('../data/imageData.json')
console.log('+++++++++',imageDatas)

imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);


var PicApp = React.createClass({
    render:function(){
        return (
            <section className='stage'>
                <section className="img-sec">
                </section>
                <nav className="controller-nav">
                </nav>

            </section>
        )
    }
})

module.exports = PicApp