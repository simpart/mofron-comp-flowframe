/**
 * @file   mofron-comp-flowframe/index.js
 * @brief  tree interface for mofron
 * @author simpart
 */
const mf = require('mofron');
const Frame = require('mofron-comp-frame');
const Fade = require('mofron-effect-fade');
const FlowMgn = require('mofron-effect-flowmgn')
const Size = require('mofron-effect-size');

mf.comp.FlowFrame = class extends Frame {
    
    /**
     * initialize component
     * 
     * @param p1 (object) component option
     * @param p1 (string) width (css size)
     * @param p2 (string) height (css size)
     */
    constructor (po, p2) {
        try {
            super();
            this.name('FlowFrame');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     *
     * @note private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.effect([
                new Fade(),
                new FlowMgn('left', ['0.2rem', '-0.2rem']),
                new Size({
                    width     : ['1rem', '0rem'],
                    height    : ['1rem', '0rem'],
                    execOrder : 1
                })
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * get flow margin effect
     *
     * @return (FlowMgn) flow margin effect
     */
    flow () {
        try { return this.effect('FlowMgn'); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * width setter/getter
     */
    width (prm) {
        try {
            if (null !== this.effect('Size')) {
                this.effect('Size').width(prm);
            }
            return super.width(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height setter/getter
     */
    height (prm) {
        try {
            if (null !== this.effect('Size')) {
                this.effect('Size').height(prm);
            }
            return super.height(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.FlowFrame;
/* end of file */
