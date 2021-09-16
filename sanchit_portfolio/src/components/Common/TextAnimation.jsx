import React, { Component } from 'react';
import $ from 'jquery';

class TextAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dynamicText: [],
            textInViewIndex: 0
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.dynamicText === nextProps.textArr) return null;
        return {
            dynamicText: nextProps.textArr
        }
    }
    animateText = (i) => {
        console.log("Executing...");
        let index = (i === this.state.dynamicText.length) ? 0 : i;
        let $elementToFade = $('#dyn-text__' + index);
        $elementToFade.addClass('is-visible').css('opacity', 1);
        let self = this;
        $('#dyn-text__' + index).animate({ 'opacity': 0.3 }, 2000, 'swing', function () {
            $(this).removeClass('is-visible').css('opacity', '');
            self.animateText(index + 1);
        });
    }
    render() {
        const dynamicText = [...this.state.dynamicText];
        return (
            <span className="text-animation">
                {
                    dynamicText.map((text, index) => {
                        if (index === 0) {
                            return <b key={'dyn-text__' + index} id={'dyn-text__' + index} className="text is-visible">{text}</b>
                        }
                        return <b key={'dyn-text__' + index} id={'dyn-text__' + index} className="text">{text}</b>
                    })
                }
            </span>
        );
    }
    componentDidMount() {
        this.animateText(0);
    }
    componentWillUnmount() {
        $(".text-animation .text").stop();
    }
}

export default TextAnimation;