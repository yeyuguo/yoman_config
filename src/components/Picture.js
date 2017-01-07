require('normalize.css/normalize.css');
require('../styles/less/style.less')
import React from 'react';


// less start
var imageDatas = require('../data/imageData.json')


imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

// 单张图片的组件
var ImgFigure = React.createClass({
    render:function(){
        return (
            <figure className='img-figure'>
                <img  src={this.props.data.imageURL} alt={this.props.data.title}/>
                <figcaption>
                    <h2 className='img-title'>{this.props.data.title}</h2>
                </figcaption>
            </figure>
        )
    }
})

// 多张图片的组件
var PicApp = React.createClass({

    render:function(){
        var controllerUnits = [],
        imgFigures = []
        // 单图片组成多图片
        imageDatas.forEach(function(value){
            imgFigures.push(<ImgFigure data={value} />)
        })
        return (
            <section className='stage'>
                <section className="img-sec">
                    {imgFigures}
                </section>
                <nav className="controller-nav">
                    
                </nav>

            </section>
        )
    }
})

module.exports = PicApp